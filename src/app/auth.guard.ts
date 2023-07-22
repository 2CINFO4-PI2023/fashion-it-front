import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private router:Router,
            private authService: AuthService) {
}
  canActivate(): boolean {
    const code = this.authService.getAuthorizationCode();
    console.log(code);
    if (localStorage.getItem('username')!=null || code) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
