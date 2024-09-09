import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private user: any = null;

  constructor() {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(userData: any): void {
    this.loggedIn = true;
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  }

  logout(): void {
    this.loggedIn = false;
    this.user = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  }

  //get the currently logged in user
  getUser(): any {
    if (!this.user && typeof window !== 'undefined') {
      this.user = JSON.parse(localStorage.getItem('user') || 'null');
    }

    return this.user;
  }
}
