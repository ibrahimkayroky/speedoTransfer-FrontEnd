import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, InputComponent, ButtonComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {}
