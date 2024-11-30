// import { inject } from "@angular/core";
// import { CanActivate, CanActivateFn, Route, Router } from "@angular/router";
// import { AuthService } from '../services/auth.service';

// export const authGuard:CanActivateFn = (route, state) => {
//   const authservice = inject(AuthService)
//   const router = inject(Router)

//   if(authservice.isAuth) {
//     router.navigateByUrl('/admin')
//     return true
//   } else {
//     router.navigateByUrl('/login')
//     return false
//   }
// }


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
