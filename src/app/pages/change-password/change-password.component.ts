import { Component } from '@angular/core';
import { AccountSidebarComponent } from '../../shared_components/account-sidebar/account-sidebar.component';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';
import { HeaderComponent } from '../../shared_components/header/header.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    AccountSidebarComponent,
    NavBarComponent,
    HeaderComponent,
    MyAccountComponent,
    MobileApplicationComponent,
    FooterComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {}
