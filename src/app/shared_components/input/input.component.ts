import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
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
}
