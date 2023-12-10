import { Injectable } from '@angular/core';
import {Personne} from "../../model/Personne";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {catchError, Observable, of, throwError} from "rxjs";
import {CvService} from "../services/cv/cv.service";

@Injectable({
  providedIn: 'root'
})
export class CvResolverService implements Resolve<Personne[]|null> {
  constructor(private cvService: CvService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Personne[]|null> {
    return this.cvService.fetchPersonnes().pipe(
        catchError(error => {
          console.log(error);
          return throwError(null);
        })
    );
  }
}
