import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared_components/button/button.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { NavBarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ButtonComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'speedoTransfer';
}
