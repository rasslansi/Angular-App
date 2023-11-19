import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
@Input() personnes! : Personne[];
@Output() selectedPersonne = new EventEmitter();
selectPersonne(selectedPersonne : Personne){
  this.selectedPersonne.emit(
    selectedPersonne
  );

}
}
