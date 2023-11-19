import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../model/Personne';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';
  private personnesSubject = new BehaviorSubject<Personne[]>([]);
  personnes = this.personnesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPersonnes();
  }

  private fetchPersonnes() {
    this.http.get<Personne[]>(this.apiUrl).subscribe(
      (data) => {
        this.personnesSubject.next(data);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  getPersonneById(id: number): Personne | null {
    const personnes = this.personnesSubject.getValue();
    const foundPersonne = personnes.find(personne => personne.id == id);
    return foundPersonne || null;
  }
}
