import { Routes } from '@angular/router';

export default  [
  {
    path:'login',
    loadComponent: () => import('./auth-login/auth-login.component'),
  },
  {
    path:'sign-up',
    loadComponent: () => import('./auth-sign-up/auth-sign-up.component'),
  },
  {
    path:'**',
    redirectTo: 'login'
  }

] as Routes

