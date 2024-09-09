import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
