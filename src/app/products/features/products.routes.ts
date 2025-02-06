import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./product-list/product-list.component')
  },
  {
    path: 'upload',
    loadComponent: () => import('./upload-product/upload-product.component'),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-detail/:id',
    loadComponent: () => import('./product-detail/product-detail.component')
  },
  {
    path: '**',
    redirectTo: 'list'
  }
]

export default routes
