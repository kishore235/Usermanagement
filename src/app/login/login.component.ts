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
    

  login() {
    this.router.navigate(['dashboard'])

     
  
  }
}
