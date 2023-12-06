import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;
  constructor(
    private http: HttpClient,
    private router:Router
  ) {
    const storedUser = localStorage.getItem('currentUser');
    this.userSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.user$ = this.userSubject.asObservable();
  }

  login(user: User): void {
      try {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
  }

private getStoredUser(): User | null {
  try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error retrieving user from localStorage:', error);
    return null;
  }
}
loadUserState(): void {
  const storedUser = this.getStoredUser();
  this.userSubject.next(storedUser);
}
isLoggedIn(): boolean {
  return !!this.userSubject.value;
}
logout(): void {
    try {
      localStorage.removeItem('currentUser');
      this.userSubject.next(null);
    } catch (error) {
      console.error('Error removing user from localStorage:', error);
    }
}

}
export interface User {
  id: number;
  email: string;
}

export class Users implements User {
  id!: number;
  email!: string;
}
