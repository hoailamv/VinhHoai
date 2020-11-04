import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginRoutingModule]
})
export class LoginModule { }
