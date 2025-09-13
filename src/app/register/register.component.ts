import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Router, RouterModule } from '@angular/router';
 
 
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  constructor(private http:ApiService,private router : Router,
              private auth :AuthService
  ) {}

form = {
  username: '',
  email: '',
  password: ''
};

trafficLightState = '';
message = '';
loading = false;

register() {
  if (!this.form.email || !this.form.password || !this.form.username) {
    this.trafficLightState = 'error';
    this.message = 'გთხოვ შეავსო ყველა ველი სწორად.';
    return;
  }

  this.loading = true;

  this.http.postData("https://rentcar.stepprojects.ge/api/Users/register", {
    phoneNumber: this.form.email, 
    password: this.form.password
  }).subscribe({
    next: (resp: any) => {
      console.log(resp);
      alert("რეგისტრაცია წარმატებით დასრულდა");
      localStorage.setItem("token", resp.token);
      this.auth.logIn();
      this.trafficLightState = 'success';
      this.message = 'რეგისტრაცია წარმატებით დასრულდა!';
      this.router.navigateByUrl("/trips");
    },
    error: (error) => {
      console.error(error);
      this.trafficLightState = 'error';
      this.message = 'რეგისტრაცია ვერ მოხერხდა. სცადე თავიდან.';
      this.loading = false;
    }
  });
}
}