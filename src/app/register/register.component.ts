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
    phone!:string;
    password!:string;
    form = {
    username: '',
    email: '',
 
};
  message: string = '';
  trafficLightState = 'warning'; // default: yellow
  loading = false;
 
 
    register(){
      this.http.postData("https://rentcar.stepprojects.ge/api/Users/register", {
        phoneNumber : this.phone,
        password : this.password
      }).subscribe((resp :any) => {
           console.log(resp)
           alert("Loged In Succesfully")
           localStorage.setItem("token", resp.token)
           this.auth.logIn()
           this.router.navigateByUrl("/trips")
 
      });
      setTimeout(()=>{
         if (this.phone && this.password) {
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