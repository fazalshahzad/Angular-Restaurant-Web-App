import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserLoginComponent } from '../management-module/user-login-signup/user-login/user-login.component';
import { UserSignupComponent } from '../management-module/user-login-signup/user-signup/user-signup.component';
import { CartpageComponent } from './main-components/cartpage/cartpage.component';
import { CheckoutPageComponent } from './main-components/checkout-page/checkout-page.component';
import { FoodpageComponent } from './main-components/foodpage/foodpage.component';
import { HomeComponent } from './main-components/Home/home/home.component';
import { PaymentComponent } from './main-components/payment/payment.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
{path:'search/:searchTerm',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'tag/:tag', component:HomeComponent},
{path:'food/:id', component:FoodpageComponent},
{path:'cart-page', component:CartpageComponent},
{path:'login',component:UserLoginComponent},
{path:'register',component:UserSignupComponent},
{path:'payment',component:PaymentComponent},
{path:'checkout',component:CheckoutPageComponent, canActivate:[AuthGuard]},

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
