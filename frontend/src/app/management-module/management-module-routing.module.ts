import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModuleComponent } from './management-module.component';
import { UserLoginComponent } from './user-login-signup/user-login/user-login.component';
import { UserSignupComponent } from './user-login-signup/user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: ManagementModuleComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserSignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
