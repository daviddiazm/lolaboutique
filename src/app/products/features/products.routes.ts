import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./product-list/product-list.component')
  },
  {
    path: 'upload',
    loadComponent: () => import('./upload-product/upload-product.component')
  },
  {
    path: '**',
    redirectTo: 'upload'
  }
]

export default routes
