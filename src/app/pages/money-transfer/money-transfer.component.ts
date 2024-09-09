import { Component } from '@angular/core';

import { NavBarComponent } from '../../shared_components/navbar/navbar.component';

import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    NavBarComponent,
    MobileApplicationComponent,
    FooterComponent,
    HeaderComponent,
  ],

  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
