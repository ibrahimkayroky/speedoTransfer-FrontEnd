import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared_components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HelpComponent } from './pages/help/help.component';
import { PaymentHistoryComponent } from './pages/payment-history/payment-history.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MobileApplicationComponent } from './shared_components/mobile-application/mobile-application.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonInfoComponent } from './shared_components/person-info/person-info.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    HomeComponent,
    MoneyTransferComponent,
    MyAccountComponent,
    HelpComponent,
    PaymentHistoryComponent,
    SettingsComponent,
    ChangePasswordComponent,
    MobileApplicationComponent,
    LoginComponent,
    PersonInfoComponent,
    FavoriteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'speedoTransfer';
}
