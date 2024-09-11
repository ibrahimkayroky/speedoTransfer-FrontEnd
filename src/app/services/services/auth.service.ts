import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private user: any = null;
  private baseURL: string =
    'https://speedotransfer-backend-production-7875.up.railway.app/api/v1';

  constructor(private http: HttpClient) {}

  register() {
    const url = this.baseURL + '/auth/register';
    const body = {
      name: 'heba',
      email: 'heba@123.com',
      password: '123',
      birthDate: '2024-09-08T13:10:28.576Z',
    };
    return this.http.post(url, body);
  }

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
