import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginRoutingModule } from './login-routing.module'

@NgModule({
  declarations: [
    ViewComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
