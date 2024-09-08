import { Component } from '@angular/core';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [MobileApplicationComponent, FooterComponent, HeaderComponent],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
