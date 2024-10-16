import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./home/home.component')
  },
  {
    path: "**",
    redirectTo: ""
  }
]

export default routes
