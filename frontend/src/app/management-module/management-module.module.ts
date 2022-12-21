import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { UserLoginComponent } from './user-login-signup/user-login/user-login.component';
import { UserSignupComponent } from './user-login-signup/user-signup/user-signup.component';
import { MainModuleModule } from "../main-module/main-module.module";
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './components/input-container/input-container.component';


@NgModule({
    declarations: [
        ManagementModuleComponent,
        UserLoginComponent,
        UserSignupComponent,
        InputContainerComponent,
        InputContainerComponent,
    ],
    imports: [
        CommonModule,
        ManagementModuleRoutingModule,
        MainModuleModule,
        ReactiveFormsModule
    ]
})
export class ManagementModuleModule { }
