import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared_components/input/input.component';
import { ButtonComponent } from '../../shared_components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    InputComponent,
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule, // Import ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent implements OnInit {
  changeForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.changeForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.changeForm.controls;
  }

  onSubmit() {
    console.log(this.changeForm);
    this.formSubmitted = true;
    if (this.changeForm.valid) {
      console.log('Form Submitted Successfully:', this.changeForm.value);
    } else {
      console.log('Form not valid');
    }
  }
}
