import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'help', component: HelpComponent },
];
