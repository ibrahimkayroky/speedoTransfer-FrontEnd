import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
})
export class InputComponent implements OnInit {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'placeholder';
  @Input() name: string = 'name';
  @Input() for: string = 'for';
  @Input() type: string = 'text';
  @Input() options: string[] = [];
  @Input() controlName: string = '';
  @Input() form!: FormGroup;
  selectValue: string = '';
  value: string = '';
  isPasswordVisible: boolean = false;
  control!: FormControl;

  ngOnInit(): void {
    this.control = this.form.get(this.controlName) as FormControl;
  }

  togglePasswordVisibility() {
    if (this.type === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.type = this.isPasswordVisible ? 'password' : 'text';
    }
  }
}
