import { Component } from '@angular/core';
import {Personne} from "../../model/Personne";
import {CvService} from "../services/cv/cv.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent {
  personnes: Personne [] =[];
  private selectedPersonne: Personne= new Personne(0,"undefined","undefined",0,"undefined",0,"undefined");
  isSelected: boolean= false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (params) => {
        this.personnes = params.personnes;
        this.selectedPersonne = params.personne;
      }
    );
  }
  selectPersonne(personne : Personne){
    this.isSelected=true;
    const link = ['list', personne.id];
    this.router.navigate(link);
    console.log(this.isSelected);
      }
}
