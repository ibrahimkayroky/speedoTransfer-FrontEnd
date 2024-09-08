import { Component } from '@angular/core';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [MobileApplicationComponent, FooterComponent, HeaderComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
