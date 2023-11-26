import {Component, OnInit} from '@angular/core';
import {Personne} from "../../model/Personne";
import {CvService} from "../cv.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  formGroup !: FormGroup;
  personnes!: Personne[];
  constructor(
    private formBuilder : FormBuilder,
    private cvService: CvService
  ) {
  }

  formInit(){
    this.formGroup=this.formBuilder.group({
      'personne':[]
    })
      this.formGroup.get('personne')?.valueChanges.pipe(
          debounceTime(1000)
      ).subscribe(response=>{
        this.cvService.getPersonsByName(response).subscribe({
            next: (data) => {
                console.log("autocomplete getting data");
                this.personnes=data;
            },
            error: () =>{
                console.log("eroor filtering personne")
            }
        });
      })
  }

    ngOnInit(): void {
    this.formInit();
    this.cvService.personnes.subscribe({
        next: (data) => {
          console.log("autocomplete getting data");
          this.personnes=data;
        },
        error: () =>{
          console.log("eroor initialising personne")
        }
    }
    );
    }


}
