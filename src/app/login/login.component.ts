import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * 
   */

  ngOnInit(): void {}

  /**
   * 
   */
    
get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}
  login() {

    if(this.loginForm.value.email === 'sai@gmail.com' && this.loginForm.value.password === 'sai@123'){
      this.router.navigate(['dashboard'])
    }else{
      alert('Invalid Credentials')
    }
  
  }
}
