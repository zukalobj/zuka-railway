import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {  
 loginForm: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    // რეალური ავტორიზაცია ჩასვი აქ
    if (username === 'admin' && password === '1234') {
      this.loginFailed = false;
      // გადამისამართება ან localStorage
      alert('შესვლა წარმატებულია ✅');
    } else {
      this.loginFailed = true;
    }
  }
}