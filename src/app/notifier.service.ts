import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(
    private toaster : ToastrService,
  ) { }

  showSuccess(title: string, body: string) {
    this.toaster.success(body, title);
  }

  showInfo(title: string, body: string) {
    this.toaster.info(body, title);
  }

  showWarning(title: string, body: string) {
    this.toaster.warning(body, title);
  }

  showError(title: string, body: string) {
    this.toaster.error(body, title);
  }
}
