import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AuthService, user } from '../../services/services/auth.service';
import { InitialNamesPipe } from '../../pipes/initial-names.pipe';
import { AmountComponent } from '../../pages/amount/amount.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    CommonModule,
    RouterLinkActive,
    InitialNamesPipe,
    AmountComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavBarComponent implements OnInit {
  user: any = null;
  isDropdownOpen = false;

  constructor(
    private authService: AuthService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((userData: user) => {
      this.user = userData;
      console.log('User data fetched', this.user);
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Detect clicks anywhere on the document
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    // Check if the clicked element is outside the dropdown
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isDropdownOpen = false; // Close the dropdown if the click was outside
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.user = null;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
