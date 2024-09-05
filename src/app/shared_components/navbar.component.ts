import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavBarComponent {}
