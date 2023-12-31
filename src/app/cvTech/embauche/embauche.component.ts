import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../services/embauche/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes!: Personne[];
  constructor(private embaucheService : EmbaucheService){

  }
  ngOnInit(){
    this.personnes = this.embaucheService.getEmbauchees();
  }

}
