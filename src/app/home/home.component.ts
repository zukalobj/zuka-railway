import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fromDate: string = '';
  toDate: string = '';
  constructor(
    private easy:CommonfunctionService,
    private http :ApiService
  ) {}



  onFromDateChange() {
    if (this.toDate && this.toDate < this.fromDate) {
      this.toDate = '';
}
  }
}