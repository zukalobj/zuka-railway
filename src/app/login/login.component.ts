import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {  
  constructor(private http:ApiService,private router : Router,
              private auth :AuthService
  ) {}
  phone!:string;
  password!:string;
  

  // onLogin() {
  //   const { username, password } = this.loginForm.value;

  //   // რეალური ავტორიზაცია ჩასვი აქ
  //   if (username === 'admin' && password === '1234') {
  //     this.loginFailed = false;
  //     // გადამისამართება ან localStorage
  //     alert('შესვლა წარმატებულია ✅');
  //   } else {
  //     this.loginFailed = true;
  //   }
  // }


  
  logIn(){
      this.http.postData("https://rentcar.stepprojects.ge/api/Users/login", {
        phoneNumber : this.phone,
        password : this.password
      }).subscribe((resp :any) => {
           console.log(resp)
           alert("Loged In Succesfully")
           localStorage.setItem("token", resp.token)
           this.auth.logIn()
           this.router.navigateByUrl("/trips")

      })

  }
  }
     

