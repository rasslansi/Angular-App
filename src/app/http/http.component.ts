// http.component.ts
import { Component, OnInit } from '@angular/core';
import { CvService } from '../cvTech/services/cv/cv.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  constructor(private cvService : CvService) {}

  ngOnInit(): void {
    // CvService already fetches and stores data from the API
  }
}
