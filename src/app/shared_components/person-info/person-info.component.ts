import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-info',
  standalone: true,
  imports: [],
  templateUrl: './person-info.component.html',
  styleUrl: './person-info.component.scss',
})
export class PersonInfoComponent {
  @Input() name: string = 'Full Name';
  @Input() number: string = 'Account Number';
}
