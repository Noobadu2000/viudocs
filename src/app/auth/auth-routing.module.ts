import { VerfierloginComponent } from './verfierlogin/verfierlogin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path: 'Registration', component: RegistrationComponent},
  {path: 'user_login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'verfier_login', component: VerfierloginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
