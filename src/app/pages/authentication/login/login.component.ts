import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[]
})
export class AppSideLoginComponent {

  email: string;
   password: string;
  constructor(private authService:AuthService,
              private toastr: ToastrService,
              private router: Router
    ) {}

  login() {
    this.authService.login( this.email, this.password ).subscribe(
      response => {
        console.log(localStorage.getItem('username'))
        if (localStorage.getItem('username')==='admin'){
          const newWindowUrl = 'http://localhost:60531/#/userlist';
          window.open(newWindowUrl, '_blank');
        } else {
          this.router.navigate(['/userlanding']);

        }
        console.log('Login successful:', response);
        this.toastr.success(response, 'Welcome');

      },
      error => {
        console.error('Login failed:', error);
        this.toastr.error(error, 'Please Try Again');

      }
    );
    console.log(localStorage)
  }
  loginWithGoogle() {
    this.authService.googleLogin();
  }
}
