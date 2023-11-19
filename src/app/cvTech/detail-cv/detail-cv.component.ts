import { Component, Input } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
@Input() personne! : Personne;
constructor(
  private embaucheService: EmbaucheService,
  private router : Router
){}
embaucher(){
this.embaucheService.embaucher(this.personne);
}
moreInfo(){
  const link = ['cv', this.personne.id];
  this.router.navigate(link);
}
}
