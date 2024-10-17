import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./product-list/product-list.component')
  },
  {
    path: '**',
    redirectTo: 'list'
  }
]

export default routes
