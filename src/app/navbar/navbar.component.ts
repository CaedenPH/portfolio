import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  active(page: string): string {
    const currentPage = this.router.url;
    return currentPage.includes(page) ? 'active' : '';
  }
}
