import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Authentification/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private auth : AuthService,
  ){}
  ngOnInit() {
    this.auth.loadUserState();
  }
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  logout(): void {
    this.auth.logout();
  }

}
