import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes! : Observable<Personne[]>;
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {
    this.personnes = this.fetchPersonnes();
    console.log(this.personnes);
  }

  private fetchPersonnes() {
    return this.http.get<Personne[]>(this.apiUrl)
  }

  // getPersonnesSync(): Personne[] {
  //   console.log('worrkinngggggg');
  //   console.log(this.personnesSubject.value[0]);
  //   console.log(this.personnes$);
  //   return this.personnesSubject.value;
  // }
}
