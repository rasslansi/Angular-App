import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  personne! : Personne | null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
            console.log("works",params.id);
            console.log(personne);
          }
        );
      }
    );
  }
  hasImage(){
    if(this.personne){
    if(this.personne.path == "as.jpg")
    return true;
  else
    return false;}
  else return false;
  }
}
