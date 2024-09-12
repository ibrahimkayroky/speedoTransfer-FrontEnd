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
      }, 12000)
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
      this.authService.login(formData).subscribe({
        next: (response: user) => {
          // save the user data and mark the user as logged in
          console.log('Login Successful', response);

          // fetch user details after login
          this.authService.setLoggedIn(response);
          this.authService.getUser().subscribe({
            next: (user: user) => {
              // save the fetched user data
              this.authService.setLoggedIn(user);
            },
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Login failed', err);
        },
      });
    } else {
      console.log('Form not valid');
    }
  }

  logoutUser() {
    console.log('User is being logged out due to inactivity.');
  }
}
