import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';


export default [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: "dashboard"
  }
] as Routes
