import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../model/Personne';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  readonly apiUrl = 'https://apilb.tridevs.net/api/personnes';
  personnes= new Observable<Personne[]>;

  constructor(private http: HttpClient) {
    this.personnes = this.fetchPersonnes();
  }

  private fetchPersonnes() {
    return this.http.get<Personne[]>(this.apiUrl) 
  }

  getPersonneById(id: number): Observable<Personne | null> {
    return this.http.get<Personne[]>(this.apiUrl).pipe(
      map((personnes) => {
        const foundPersonne = personnes.find((personne) => personne.id == id);
        return foundPersonne || null;   
      })
    );
  }
}
