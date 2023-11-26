    import { Component, OnInit } from '@angular/core';
    import { Personne } from 'src/app/model/Personne';
    import { CvService } from '../cv.service';
    import { Observable } from 'rxjs';

    @Component({
      selector: 'app-cv',
      templateUrl: './cv.component.html',
      styleUrls: ['./cv.component.css']
    })
    export class CvComponent implements OnInit {
      activatedTab :number=0;
      tabs: string[] = ["View All","age < 40","age >= 40"];
    isSelected: Boolean= false;
    personnes: Personne [] =[];
    selectedPersonne : Personne=new Personne(0,"undefined","undefined",0,"undefined",0,"undefined");
    constructor(
      private cvService: CvService
    ){}
    ngOnInit(): void {
      this.cvService.personnes.subscribe({
        next: (data)=>{
          this.personnes= data;
        },
        error:(error)=>{
          console.log('error');
            this.personnes=this.cvService.fakePersonnes;
        },
      }

      );

    }
    selectPersonne(personne : Personne){
      this.selectedPersonne = personne;
      this.isSelected=true;
    }

    tabChange(tabIndex: number) {
        this.activatedTab=tabIndex;
        if(tabIndex==2) {
            this.filterPersonneSup(10).subscribe({
                    next: (data)=>{
                        this.personnes= data;
                        console.log(data);
                    },
                    error:(error)=>{
                        console.log('error')
                    },
                }
            );
        }
        else if(tabIndex==1) {
            this.filterPersonneInf(10).subscribe({
                    next: (data)=>{
                        this.personnes= data;
                        console.log(data);
                    },
                    error:(error)=>{
                        console.log('error')
                    },
                }
            );
        }
        else this.cvService.personnes.subscribe({
                    next: (data)=>{
                        this.personnes= data;
                        console.log(data);
                    },
                    error:(error)=>{
                        console.log('error')
                    },
                }

            );
    }
    filterPersonneSup(age:number): Observable<Personne[]> {
            return this.cvService.FilterPersonsByAgeSup(age);
    }
    filterPersonneInf(age:number): Observable<Personne[]> {
            return this.cvService.FilterPersonsByAgeInf(age);
    }

    }
