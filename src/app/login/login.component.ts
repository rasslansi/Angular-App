import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private toaster: NotifierService,
    private auth : AuthService,
    private http: HttpClient,
    private router : Router
  ){
  }
  onSubmit() {

    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
    this.http.post(authenticationEndpoint, this.user).subscribe(
      (response: any) => {
        this.toaster.showSuccess("Welcome Back!","Authentication successful!")
        console.log('Authentication successful!', response);


        this.auth.login({
          id: response.userId,
          email: this.user.email,
        });

        this.router.navigate(['']);

      },
      (error) => {
        this.toaster.showError("error","Authentication failed!")
        console.error('Authentication failed!', error);
      }
    );

  }

}
