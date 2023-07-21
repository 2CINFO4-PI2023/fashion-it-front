import { Component, OnInit, OnDestroy } from "@angular/core";
import {AuthService} from "../../services/auth.service"
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})


export class UserLoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  focus = false;
  focus1 = false;

  constructor(private authService:AuthService) {}

  login() {
    console.log(this.email)
    console.log(this.password)

    this.authService.login( this.email, this.password ).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}

