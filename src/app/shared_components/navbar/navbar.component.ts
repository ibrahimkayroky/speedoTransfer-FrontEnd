import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //
import { ButtonComponent } from '@shared_components/button/button.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {}
