import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, debounceTime, Observable, of, retry, switchMap} from 'rxjs';
import { Personne } from '../model/Personne';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  readonly apiUrl = 'https://apilb.tridevs.net/api/personnes';
    private personnesSubject = new BehaviorSubject<Personne[]>([]);
    personnes = this.personnesSubject.asObservable();

    fakePersonnes: Personne[] = [
        {
            id: 1,
            name: 'Doe',
            firstName: 'John',
            age: 3,
            path: '/images/john_doe.jpg',
            cin: 123456789,
            job: 'Software Engineer',
        },
        {
            id: 2,
            name: 'Smith',
            firstName: 'Jane',
            age: 28,
            path: '/images/jane_smith.jpg',
            cin: 987654321,
            job: 'UX Designer',
        },
        {
            id: 3,
            name: 'Johnson',
            firstName: 'Michael',
            age: 5,
            path: '/images/michael_johnson.jpg',
            cin: 456789123,
            job: 'Data Scientist',
        },
        {
            id: 4,
            name: 'Brown',
            firstName: 'Emily',
            age: 25,
            path: '/images/emily_brown.jpg',
            cin: 654321987,
            job: 'Graphic Designer',
        },
        {
            id: 5,
            name: 'Garcia',
            firstName: 'Carlos',
            age: 32,
            path: '/images/carlos_garcia.jpg',
            cin: 135792468,
            job: 'Product Manager',
        },
    ];
    fakePersonnes2:Personne[]=[
      {
          id: 1,
          name: 'Doe',
          firstName: 'John',
          age: 30,
          path: '/images/john_doe.jpg',
          cin: 123456789,
          job: 'Software Engineer',
      },
      {
          id: 2,
          name: 'Smith',
          firstName: 'Jane',
          age: 2,
          path: '/images/jane_smith.jpg',
          cin: 987654321,
          job: 'UX Designer',
      },
      // Add more fakePersonnes as needed
  ];
    constructor(private http: HttpClient) {
        of(null)
            .pipe(
                debounceTime(150000), // Adjust the debounce time as needed
                switchMap(() => this.fetchPersonnes())
            )
            .subscribe(
                data => this.personnesSubject.next(data),
                error => console.error('Error fetching data:', error)
            );
    }

    fetchPersonnes(): Observable<Personne[]> {
        return this.http.get<Personne[]>(this.apiUrl).pipe(
            catchError((error) => {
                console.error('Error fetching data:', error);
                return of(this.fakePersonnes); // Return fake array in case of an error
            }),
            retry(2)
        );
    }

  getPersonneById(id: number): Observable<Personne | null> {
    return this.personnes.pipe(
      map((personnes) => {
        const foundPersonne = personnes.find((personne) => personne.id == id);
        return foundPersonne || null;
      })
    );
  }

  FilterPersonsByAgeSup(age: number): Observable<Personne[]> {
    return this.personnes.pipe(
      map((personnes) => {
        return personnes.filter((personne) => personne.age > age);
      })
    );
  }
  FilterPersonsByAgeInf(age: number): Observable<Personne[]> {
    return this.personnes.pipe(
      map((personnes) => {
        return personnes.filter((personne) => personne.age <= age);
      })
    );
  }
    getPersonsByName(searchString: string): Observable<Personne[]> {
        // Construct filter parameters
        const filterParams = {
            where: {
                name: {
                    like: `%${searchString}%`,
                },
            },
        };

        // Convert filterParams to a string
        const params = new HttpParams().set('filter', JSON.stringify(filterParams));

        // Make the API request with the filter parameter
        return this.http.get<Personne[]>(this.apiUrl, { params }).pipe(
            catchError((error) => {
                console.error('Error fetching filtered data:', error);
                return of(this.fakePersonnes2); // Return an empty array in case of an error
            }),
            retry(2)
        );
    }
}
