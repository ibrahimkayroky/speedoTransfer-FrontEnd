import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared_components/header/header.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared_components/footer/footer.component';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    CommonModule,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {}
