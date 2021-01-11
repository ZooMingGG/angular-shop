import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'create', component: CreateComponent},
      {path: 'orders', component: OrdersPageComponent},
      {path: 'product/:id/edit', component: EditPageComponent}
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
