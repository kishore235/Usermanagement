import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  registrationForm! : FormGroup ;
  allUsers: any;
  currentId: any[] = [];
  showUpdateUserForm : boolean = false;

  constructor(private userService: UsersService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      domain: ['', Validators.required],
    });
  }

  /**
   * 
   */
  ngOnInit(): void {
    this.getAllUsers()
  }

  /**
   * 
   */
  getAllUsers() {
    this.userService.getUser().subscribe((users: any) => {
      this.allUsers = users
    })
  }

  addUser(){
    this.showUpdateUserForm = false;
    this.registrationForm.reset();
   
  }

  submitUserData(){
    this.userService.postUser(this.registrationForm.value).subscribe((value: any) => {
      this.getAllUsers();
    });
  }
  /**
   * 
   * @param user 
   */
  editData(user: any) {
    this.showUpdateUserForm = true;
      this.currentId = user.id;
      this.userService.getUserToUpdate(this.currentId).subscribe((value: any) => {
        this.registrationForm.setValue({
          name: value.name,
          email: value.email,
          domain: value.domain,
        });
      });
  }

  /**
   * 
   * @param id - it is id argument to delete
   */
  deleteData(id: number) {
    this.userService.userDelete(id).subscribe((x) => {
      this.getAllUsers()
    })
  }

  /**
   * 
   */
  updateData() {
    this.userService
      .updateData(this.currentId, this.registrationForm.value)
      .subscribe((v) => {
        this.getAllUsers()
      });
  }
}
