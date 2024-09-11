import { Component, Input } from '@angular/core';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/services/auth.service';
import * as constants from './constants';
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
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}
  countries = constants.countries;
  months = constants.months;
  years = constants.years;

  signUp() {
    this.authService.register().subscribe((response) => {
      console.log(response);
    });
  }
}
