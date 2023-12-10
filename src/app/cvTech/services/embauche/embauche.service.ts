import { Injectable } from '@angular/core';
import { Personne } from '../../../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes!: Personne[];
  constructor() {
    this.personnes=[];
  }

  getEmbauchees(){
    return this.personnes;
  }

  embaucher(personne : Personne) : void {
    const index = this.personnes.indexOf(personne);
    if(index<0){
    this.personnes.push(personne);
  }else{
    alert(`${personne.name} est deja sélectionée`)
  }}

  debaucher(personne : Personne) :void{
    const index = this.personnes.indexOf(personne);
    if(index>=0){
      this.personnes.splice(index,1);
    }
  }
}
