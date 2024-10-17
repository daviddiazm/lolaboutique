import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes')
  },
  {
    path: 'products',
    loadChildren: () => import('./products/features/products.routes')
  },
  {
    path: 'home',
    loadChildren: () => import('./home/features/home.routes')
  },
  {
    path: '**',
    redirectTo: "products"
  }
];
