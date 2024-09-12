import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface user {
  name: string;
  email: string;
  password: string;
  country: string;
  birthDate: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private user: user | null = null;
  private baseURL: string =
    'https://speedotransfer-backend-production-7875.up.railway.app/api/v1';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    const url = this.baseURL + '/auth/register';
    return this.http.post(url, data);
  }

  login(data: any): Observable<any> {
    const url = this.baseURL + '/auth/authenticate';
    return this.http.post(url, data);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(userData: user): void {
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
  getUser(): Observable<user> {
    const url = this.baseURL + '/user/getUser';
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    // Set up the headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<user>(url, { headers });
  }
}
