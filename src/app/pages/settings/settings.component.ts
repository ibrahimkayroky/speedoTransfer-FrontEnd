import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    InputComponent,
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settingForm: FormGroup;
  formSubmitted = false;

  constructor() {
    this.settingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get f() {
    return this.settingForm.controls;
  }

  onSubmit() {
    console.log(this.settingForm);
    this.formSubmitted = true;
    if (this.settingForm.valid) {
      console.log('Form Submitted Successfully:', this.settingForm.value);
    } else {
      console.log('Form not valid');
    }
  }
}
