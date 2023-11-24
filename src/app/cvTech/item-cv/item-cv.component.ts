import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne! : Personne;
  @Output() selectedPersonne = new EventEmitter();
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }
  hasImage(){
    if(this.personne.path == "as.jpg")
    return true;
  else
    return false;
  }
}
