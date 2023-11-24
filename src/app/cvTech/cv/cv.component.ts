import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
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
      console.log('error')
    },
  }

  );

}
selectPersonne(personne : Personne){
  this.selectedPersonne = personne;
  this.isSelected=true;
}
}
