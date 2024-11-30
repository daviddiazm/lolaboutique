import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validEmail = 'david@email.com';
  private validPassword = '123';

  login(email: string, password: string): boolean {
    if (email === this.validEmail && password === this.validPassword) {
      localStorage.setItem('authenticated','true')
      return true;
    }
    return false;
  }

  isLoggedIn(): any {
    return localStorage.getItem('authenticated') === "true"
  }

  // logout(): void {
  //   this.authenticated = false;
  // }
}
