import { Component, Input } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
@Input() personne! : Personne;
constructor(
  private embaucheService: EmbaucheService
){}
embaucher(){
this.embaucheService.embaucher(this.personne);
}
}
