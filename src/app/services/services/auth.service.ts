import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { error } from 'console';

export interface user {}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private user: user | null = null;
  private baseURL: string =
    'https://speedotransfer-backend-production-7875.up.railway.app/api/v1';

  private userSubject = new BehaviorSubject<user | null>(null);

  constructor(private http: HttpClient) {
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const token = localStorage.getItem('token');
    if (token) {
      of(token)
        .pipe(
          switchMap(() => this.getUser()),
          tap((userData) => {
            if (userData) {
              this.setLoggedIn(userData);
            } else {
              this.logout();
            }
          }),
          catchError((error): any => {
            console.error('Error fetching user data', error);
            this.logout();
          })
        )
        .subscribe();
    } else {
      console.warn('No token found in localStorage. user is not logged in');
    }
  }

  register(data: any): Observable<any> {
    const url = this.baseURL + '/auth/register';
    return this.http.post(url, data);
  }

  login(data: any): Observable<any> {
    const url = this.baseURL + '/auth/authenticate';
    return this.http.post<any>(url, data).pipe(
      tap((response) => {
        // Save the token in localStorage
        localStorage.setItem('token', response.token);

        // Optionally, clear old user data
        localStorage.removeItem('user');

        // Fetch and store the new user data
        this.getUser().subscribe((userData) => {
          if (userData) {
            this.setLoggedIn(userData);
          } else {
            console.error('Failed to retrieve user data');
          }
        });
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(userData: user): void {
    this.loggedIn = true;
    this.user = userData;
    this.userSubject.next(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  logout(): void {
    this.loggedIn = false;
    this.user = null;
    this.userSubject.next(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }

  //get the currently logged in user
  getUser(): Observable<user | null> {
    const url = this.baseURL + '/user/getUser';
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (!token) {
      return of(null);
    }
    // Set up the headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<user>(url, { headers }).pipe(
      catchError(() => {
        this.logout();
        return of(null);
      })
    );
  }

  getUserData(): Observable<user | null> {
    return this.userSubject.asObservable();
  }
}
