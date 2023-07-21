import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(private router: Router,private authService: AuthService,
              private toastr: ToastrService) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    addresse: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe(
        response => {
          console.log('Registration successful:', response);
          this.toastr.success(response, 'Welcome');
          this.router.navigate(['/userpage']);
        },
        error => {
          console.error('Registration error:', error);
          this.toastr.error('Registration failed', 'Please Try Again');
        }
      );
    }
  }

}
