import { Component, OnInit, Input } from '@angular/core';
import { NavBarComponent } from '../../shared_components/navbar/navbar.component';
import { MobileApplicationComponent } from '../../shared_components/mobile-application/mobile-application.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';
import { HeaderComponent } from '../../shared_components/header/header.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonInfoComponent } from '../../shared_components/person-info/person-info.component';

@Component({
  selector: 'app-confirmation',
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
  ],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  @Input() amount: string = 'Amount';
}
