import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trips',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss'
})
export class TripsComponent {
   isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
