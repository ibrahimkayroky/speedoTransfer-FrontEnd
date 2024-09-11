import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss',
})
export class PaymentCardComponent {
  copied = false;

  copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.copied = true;
        // Reset copied status after 2 seconds
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      })
      .catch((err) => {
        console.error('failed to copy!', err);
      });
  }
}
