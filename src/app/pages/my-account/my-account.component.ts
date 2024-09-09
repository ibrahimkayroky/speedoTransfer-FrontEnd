import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
