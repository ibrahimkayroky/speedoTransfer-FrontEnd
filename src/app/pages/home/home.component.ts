import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { InputComponent } from '../../shared_components/input/input.component';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    RouterLink,
    MobileApplicationComponent,
    InputComponent,
    NavBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
