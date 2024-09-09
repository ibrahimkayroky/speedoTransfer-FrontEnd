import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showWarning: boolean = false;
  showLoginMessage: boolean = false;
  hideCreateAccount: boolean = false;

  ngOnInit(): void {
    this.startInactivityTimer();
  }

  startInactivityTimer(): void {
    setTimeout(() => {
      this.showWarning = true;
      this.showLoginMessage = true;
      this.hideCreateAccount = true;
    }, 12000);
  }

  closeWarning(): void {
    this.showWarning = false;
  }
}
