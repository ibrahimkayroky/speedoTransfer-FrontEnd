import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';
import { AccountSidebarComponent } from '../../shared_components/account-sidebar/account-sidebar.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    MobileApplicationComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    AccountSidebarComponent,
    ChangePasswordComponent,
    PaymentHistoryComponent,
    SettingsComponent,
  ],

  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
