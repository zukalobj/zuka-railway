import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   isOpen = false;
    isMobile = false;
   isLoggedIn=false;
    constructor(protected auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuth();
    this.checkScreenSize();
  }
  

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.isOpen = !this.isMobile;  
  }
  

   checkAuth() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  
  logout() {
    this.auth.logOutTo();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    localStorage.removeItem('token')
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  

  }
