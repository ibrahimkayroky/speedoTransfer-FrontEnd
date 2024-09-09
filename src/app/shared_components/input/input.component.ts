import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
})
export class InputComponent {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'placeholder';
  @Input() name: string = 'name';
  @Input() for: string = 'for';
  @Input() type: string = 'text';
  @Input() options: string[] = [];
  selectValue: string = '';
  value: string = '';
  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    if (this.type === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.type = this.isPasswordVisible ? 'password' : 'text';
    }
  }
}
