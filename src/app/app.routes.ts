import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorComponent } from './pages/error/error.component';
import { PaymentHistoryComponent } from './pages/payment-history/payment-history/payment-history.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { ChangePasswordComponent } from './pages/change-password/change-password/change-password.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AmountComponent } from './pages/amount/amount.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'money-transfer',
    component: MoneyTransferComponent,
    children: [
      { path: 'amount', component: AmountComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'favorite', component: FavoriteComponent },
    ],
  },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'payment-history', component: PaymentHistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '**', component: ErrorComponent },
];
