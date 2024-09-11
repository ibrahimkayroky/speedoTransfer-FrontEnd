import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, InputComponent, ButtonComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
