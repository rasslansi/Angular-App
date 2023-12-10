    import { Component, OnInit } from '@angular/core';
    import { Personne } from 'src/app/model/Personne';
    import { CvService } from '../services/cv/cv.service';
    import { Observable } from 'rxjs';
    import {ActivatedRoute} from "@angular/router";

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
      private cvService: CvService,
      private activatedRoute: ActivatedRoute,
    ){}
    ngOnInit(): void {
      this.activatedRoute.data.subscribe(
            (params) => {
                this.personnes = params.personnes;
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
