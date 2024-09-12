import { Component } from '@angular/core';
import { AuthService, user } from '../../services/services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  user: any | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (userData) => {
        this.user = userData;
      },
      (error) => {
        console.error('Failed to add user data', error);
      }
    );
  }
}
