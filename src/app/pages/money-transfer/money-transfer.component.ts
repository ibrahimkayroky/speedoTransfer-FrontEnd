import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonInfoComponent } from '../../shared_components/person-info/person-info.component';
import { AmountComponent } from '../amount/amount.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    NavBarComponent,
    MobileApplicationComponent,
    FooterComponent,
    HeaderComponent,
    FormsModule,
    InputComponent,
    ButtonComponent,
    FavoriteComponent,
    RouterLink,
    CommonModule,
    PersonInfoComponent,
    AmountComponent,
    ConfirmationComponent,
    PaymentComponent,
    RouterOutlet,
  ],

  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent implements OnInit {
  showFavoriteList: boolean = false;
  hideMoneyTransfer: boolean = false;
  isDropdownOpen = false;

  ngOnInit(): void {
    this.startInactivityTimer();
  }

  toggleDropdown(): boolean {
    return (this.isDropdownOpen = !this.isDropdownOpen);
  }
  startInactivityTimer(): void {
    if (this.toggleDropdown() == true) {
      this.showFavoriteList = true;
      this.hideMoneyTransfer = true;
    }
  }
}
