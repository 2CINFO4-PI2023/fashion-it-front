import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../services/auth.service";
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  user: any = {
    username: '',
    email: '',
    password: '',
    age: null,
    gender: '',
    address: '',
    acceptTerms: false
  };
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  focus3: boolean = false;
  focus4: boolean = false;
  focus5: boolean = false;





  constructor(private authService: AuthService,private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      age: null,
      gender: '',
      address: '',
      acceptTerms: false
    });
  }
  
  register(): void {
   

    this.authService.register(this.user).subscribe(
      response => {
        // Handle successful registration
        console.log('Registration successful:', response);
      },
      error => {
        // Handle registration error
        console.error('Registration error:', error);
      }
    );
  }

}
