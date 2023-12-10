import { Component } from '@angular/core';
import { NotifierService } from './services/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {

  constructor(
    private toaster : NotifierService,
  ){}

  showSuccess(title : string,body:string){
    this.toaster.showSuccess(body,title);
  }
}
