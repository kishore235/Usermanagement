import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addUser', ()=>{
    spyOn(component.registrationForm, 'reset' )
    component.addUser();
    expect(component.registrationForm.reset).toHaveBeenCalled()
  })

  it('submitUserData', ()=>{
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      domain: 'example.com',
    };
    spyOn(component['userService'], 'postUser').and.returnValue(of (mockUser));
    component.submitUserData();
  })


  it('getAllUsers', () => {
    const mockUsers = [
      { id: 1, name: 'User1', email: 'user1@example.com', domain: 'example.com' },
      { id: 2, name: 'User2', email: 'user2@example.com', domain: 'example.com' },
    ];
    spyOn( component['userService'], 'getUser').and.returnValue(of(mockUsers));
    component.getAllUsers();
    expect(component.allUsers).toEqual(mockUsers);
  });

  it('editData', () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      domain: 'example.com',
    };
    spyOn(component['userService'], 'getUserToUpdate').and.returnValue(of (mockUser));
    component.editData(mockUser);
    expect(component.registrationForm.value).toEqual({
      name: mockUser.name,
      email: mockUser.email,
      domain: mockUser.domain,
    });
})
})
