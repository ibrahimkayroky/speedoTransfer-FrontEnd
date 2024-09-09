import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared_components/header/header.component';

import { NavBarComponent } from '../../shared_components/navbar/navbar.component';
import { FooterComponent } from '../../shared_components/footer/footer.component';


@Component({
  selector: 'app-help',
  standalone: true,

  imports: [HeaderComponent, NavBarComponent,  FooterComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {}
