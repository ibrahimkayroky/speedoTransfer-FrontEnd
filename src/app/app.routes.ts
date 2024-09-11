import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorComponent } from './pages/error/error.component';
import { PaymentHistoryComponent } from './pages/payment-history/payment-history.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AmountComponent } from './pages/amount/amount.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

import { AmountComponent } from './pages/amount/amount.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'money-transfer',
    component: MoneyTransferComponent,
    children: [
      { path: 'amount', component: AmountComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'payment', component: PaymentHistoryComponent },
      { path: 'favorite', component: FavoriteComponent },
    ],
  },
  { path: 'my-account', component: MyAccountComponent,
    children: [
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: ErrorComponent },
];
