import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { AuthService, user } from '../../services/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    InputComponent,
    ButtonComponent,
    CommonModule,
    SignupComponent,
    RouterLink,
    HomeComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showWarning: boolean = false;
  showLoginMessage: boolean = false;
  hideCreateAccount: boolean = false;
  loginForm: FormGroup;
  formSubmitted = false;

  private timeoutHandle: any;
  private inactivityTimeLimit: number = 120000;

  ngOnInit(): void {
    this.startInactivityTimer();
  }

  startInactivityTimer(): void {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() =>
      setTimeout(() => {
        this.showWarning = true;
        this.showLoginMessage = true;
        this.hideCreateAccount = true;
        this.logoutUser();
      }, this.inactivityTimeLimit)
    );
  }

  closeWarning(): void {
    this.showWarning = false;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authService
        .login(formData)
        .pipe(
          tap((response) => {
            // save the user data and mark the user as logged in
            console.log('Login Successful', response);
            localStorage.setItem('token', response.token);
          }),
          switchMap(() => this.authService.getUser()),
          tap((userData) => {
            if (userData) {
              this.authService.setLoggedIn(userData);
              this.router.navigate(['/']);
            } else {
              console.error('Failed to retrieve user data');
            }
          }),
          catchError((error) => {
            console.error('Login failed', error);
            return of(null);
          })
        )
        .subscribe();
    } else {
      console.log('Form is not valid');
    }
  }

  logoutUser() {
    console.log('User is being logged out due to inactivity.');
  }
}
