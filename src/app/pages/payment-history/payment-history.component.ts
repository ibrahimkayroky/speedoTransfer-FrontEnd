import { Component } from '@angular/core';
import { PaymentCardComponent } from '../../shared_components/payment-card/payment-card.component';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [PaymentCardComponent],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.scss',
})
export class PaymentHistoryComponent {}
