import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
   isLoggedIn=false;
    constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuth();
  }
  

  

   checkAuth() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  
  logout() {
    this.auth.logOutTo();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  

  }
