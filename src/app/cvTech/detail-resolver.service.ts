import { Injectable } from '@angular/core';
import {Personne} from "../model/Personne";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {catchError, Observable, of, throwError} from "rxjs";
import {CvService} from "./cv.service";

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<Personne|null> {
  constructor(private cvService: CvService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Personne|null> {
          return this.cvService.getPersonneById(route.params.id).pipe(
              catchError(error => {
                    console.log(error);
                return throwError(null);
              })
          );
  }
}
