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
        console.log('Login successful:', response);
        this.toastr.success(response, 'Welcome');
        this.router.navigate(['/userlanding']);

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
