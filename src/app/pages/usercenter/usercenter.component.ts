import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.scss']
})
export class UsercenterComponent {

  userForm: FormGroup;
  sentPass:boolean=false;
  user: User = new User(); // Initialize the user object
  currentuser: User = new User(); // Initialize the user object
  username:string;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router
  ) { }

  ngOnInit() {

    this.initForm();
    this.username = localStorage.getItem('username')!;
    this.userService.findUserByUsername(this.username).subscribe(user => {
      this.currentuser = user;
      console.log(this.currentuser);

    });
  }



  initForm(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      adresse: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  submit(){
    console.log('here');
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.userService.editUser(this.currentuser._id,this.userForm.value).subscribe(
        response => {
          console.log('Registration successful:', response);
          this.toastr.success('Update successfully', 'Welcome');
            this.authService.logout();
        },
        error => {
          console.error('Registration error:', error);
          this.toastr.error('Registration failed', 'Please Try Again');
        }
      );
    }
  }

  handleChangePassword(){
    this.authService.changePassword(this.currentuser._id).subscribe(
      response => {
        console.log('Password changed successfully:', response);
        this.toastr.success('A new password has been sent to your email successfully', 'Password Change request');
        this.router.navigate(['/userlanding']);
        this.sentPass=true;
      },
      error => {
        console.error('Failed to change password:', error);
        this.toastr.error('An error has occured', 'Password Change request');
      }
    );
  }
}
