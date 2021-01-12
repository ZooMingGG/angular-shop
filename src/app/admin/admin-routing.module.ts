import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
      {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]},
      {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModue { }
