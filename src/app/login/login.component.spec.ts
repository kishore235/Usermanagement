import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get email', ()=> {
    component.loginForm = new FormGroup({
      email: new FormControl('sai@gmail.com'),
      password: new FormControl('sai@123'),
    });
    spyOn(component.loginForm, 'get');
    component.email;
    expect(component.loginForm.get).toHaveBeenCalledWith('email')
  })

  it('get password', ()=> {
    component.loginForm = new FormGroup({
      email: new FormControl('sai@gmail.com'),
      password: new FormControl('sai@123'),
    });
    spyOn(component.loginForm, 'get');
    component.password;
    expect(component.loginForm.get).toHaveBeenCalledWith('password')
  })

  it('login, if condition', ()=>{
    component.loginForm = new FormGroup({
      email: new FormControl('sai@gmail.com'),
      password: new FormControl('sai@123'),
    });
    spyOn(component['router'], 'navigate')
    component.login();
    expect(component.loginForm.value.email).toEqual('sai@gmail.com');
    expect(component.loginForm.value.password).toEqual('sai@123');
    expect(component['router'].navigate).toHaveBeenCalledWith(['dashboard']);

  })

  it('login, else condition', ()=>{
    component.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    spyOn(component['router'], 'navigate')
    component.login();
    expect(component.loginForm.value.email).not.toEqual('sai@gmail.com');
    expect(component.loginForm.value.password).not.toEqual('sai@123');

  })

});