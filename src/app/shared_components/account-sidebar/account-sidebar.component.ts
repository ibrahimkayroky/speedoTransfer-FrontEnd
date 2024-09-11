import { Component } from '@angular/core';
import { MyAccountComponent } from '../../pages/my-account/my-account.component';
import { PaymentHistoryComponent } from '../../pages/payment-history/payment-history.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-account-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MyAccountComponent,
    PaymentHistoryComponent,
    SettingsComponent,
    ChangePasswordComponent,
  ],
  templateUrl: './account-sidebar.component.html',
  styleUrl: './account-sidebar.component.scss',
})
export class AccountSidebarComponent {}
