import { Component } from '@angular/core';
import {Personne} from "../../model/Personne";
import {CvService} from "../cv.service";
import {NotifierService} from "../../notifier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent {
  personne={
    name:'',
    firstname:'',
    age:0,
    cin:0,
    job:'',
    path:''
  };

  constructor(
    private cvService : CvService,
    private notifier : NotifierService,
    private router : Router,
  ) {
  }
  onSubmit() {
    console.log(this.personne);
    this.cvService.AddCv(this.personne);
    this.notifier.showSuccess("Well Done!","Cv added successfully!");
    //this.router.navigate(['cv']);
  }
}
