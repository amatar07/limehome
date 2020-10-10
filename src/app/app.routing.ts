import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './core/components/dashboard-layout/dashboard-layout.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ],
  },
  {
    path: '**', redirectTo: '',
  },
];
