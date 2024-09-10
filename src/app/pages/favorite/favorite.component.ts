import { Component } from '@angular/core';
import { PersonInfoComponent } from '../../shared_components/person-info/person-info.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [PersonInfoComponent, RouterLink],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {}
