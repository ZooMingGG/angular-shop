import { AdminRoutingModue } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreateComponent,
    DashboardComponent,
    EditPageComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModue
  ]
})
export class AdminModule { }
