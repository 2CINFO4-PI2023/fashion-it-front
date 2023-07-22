import { Component, OnInit, OnDestroy } from "@angular/core";
import {AuthService} from "../../services/auth.service"
import {Router} from "@angular/router";
@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  focus = false;
  focus1 = false;

  constructor(private authService:AuthService,
              private router:Router) {}

  login() {
    console.log(this.email)
    console.log(this.password)

    this.authService.login( this.email, this.password ).subscribe(
      response => {
        console.log('Login successful:', response);
        this.router.navigate(['/userlist'])
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
  loginWithGoogle() {
    // Perform login with Google
    this.authService.googleLogin();
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

