import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fromDate: string = '';
  toDate: string = '';

  onFromDateChange() {
    if (this.toDate && this.toDate < this.fromDate) {
      this.toDate = '';
}
  }
}