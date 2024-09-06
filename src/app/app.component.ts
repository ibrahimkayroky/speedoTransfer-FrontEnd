import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared_components/button/button.component';
import { InputComponent } from './shared_components/input/input.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { NavBarComponent } from './shared_components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HelpComponent } from './pages/help/help.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    NavBarComponent,
    HomeComponent,
    MoneyTransferComponent,
    MyAccountComponent,
    HelpComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'speedoTransfer';
}
