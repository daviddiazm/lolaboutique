import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes')
  },
  {
    path: 'home',
    loadChildren: () => import('./home/features/home.routes')
  },
  {
    path: '**',
    redirectTo: "home"
  }
];
