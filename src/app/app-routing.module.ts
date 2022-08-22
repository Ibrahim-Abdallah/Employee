import { AuthGuardService } from './services/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AnonGuardService } from './services/guards/anon-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/registeration/registeration.module').then(m => m.RegisterationModule),
    canLoad: [AnonGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canLoad: [AnonGuardService]
  },
  {
    path: 'department',
    loadChildren: () => import('./modules/department/department.module').then(m => m.DepartmentModule),
    canLoad: [AnonGuardService]
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule),
    canLoad: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
