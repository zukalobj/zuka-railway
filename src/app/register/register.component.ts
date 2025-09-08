import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    form = {
    username: '',
    email: '',
    password: ''

};
  message: string = '';
  trafficLightState = 'warning'; // default: yellow
  loading = false;

  register() {
    this.message = '';
    this.trafficLightState = 'warning'; // ყვითლად – აგზავნის

    this.loading = true;

    setTimeout(() => {
      if (this.form.username && this.form.email && this.form.password) {
        this.trafficLightState = 'success'; // მწვანე – წარმატება
        this.message = 'რეგისტრაცია წარმატებით დასრულდა!';
      } else {
        this.trafficLightState = 'error'; // წითელი – შეცდომა
        this.message = 'გთხოვ შეავსო ყველა ველი სწორად.';
      }
      this.loading = false;
    }, 1500);
  }
}
