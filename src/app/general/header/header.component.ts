import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isNavbarCollapsed = false;
  constructor() {}

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    console.log('event clicked!' + this.isNavbarCollapsed);
  }
}
