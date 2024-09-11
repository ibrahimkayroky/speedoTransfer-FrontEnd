import { Component, Input, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { AuthService, user } from '../../services/services/auth.service';
import * as constants from './constants';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

export function passwordMatchValidator(
  formGroup: FormGroup
): { [key: string]: boolean } | null {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmpassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordsDontMatch: true };
  }
  return null;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    CommonModule,
    FormsModule,
    LoginComponent,
    HomeComponent,
    RouterLink,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  countries = constants.countries;
  months = constants.months;
  years = constants.years;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        country: ['', [Validators.required]],
        dayOfBirth: ['', [Validators.required]],
        monthOfBirth: ['', [Validators.required]],
        yearOfBirth: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: passwordMatchValidator, // Apply the custom validator
      }
    );
  }

  ngOnInit(): void {}

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        country: ['', [Validators.required]],
        dayOfBirth: ['', [Validators.required]],
        monthOfBirth: ['', [Validators.required]],
        yearOfBirth: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: passwordMatchValidator, // Apply the custom validator
      }
    );
  }

  ngOnInit(): void {}

  signUp() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      const birthDate = new Date(
        `${formData.yearOfBirth}-${formData.monthOfBirth}-${formData.dayOfBirth}`
      ).toISOString();

      const requestBody: user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        birthDate: birthDate, // Pass the formatted birthDate
      };

      this.authService.register(requestBody).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
        },
        error: (err) => {
          console.error('Registration failed:', err);
        },
        complete: () => {
          console.log('Registration process completed');
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmit() {
    console.log(this.loginForm);
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.signUp();
      console.log('Form Submitted Successfully:', this.loginForm.value);
    } else {
      console.log('Form not valid');
    }
  }
}
