import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/Header/header/header.component';
import { HomeComponent } from './main-components/Home/home/home.component';
import { FooterComponent } from './main-components/Footer/footer/footer.component';
import { SearchComponent } from './main-components/search/search.component';
import { FoodService } from '../services/food.service';
import { TagsComponent } from './main-components/tags/tags.component';
import { FoodpageComponent } from './main-components/foodpage/foodpage.component';
import { CartpageComponent } from './main-components/cartpage/cartpage.component';
import { TitleComponent } from './main-components/title/title.component';
import { NotfoundComponent } from './main-components/notfound/notfound.component';
import { CheckoutPageComponent } from './main-components/checkout-page/checkout-page.component';
import { OrderlistComponent } from './main-components/orderlist/orderlist.component';
import { MapComponent } from './main-components/map/map.component';
import { PaymentComponent } from './main-components/payment/payment.component';



@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    TagsComponent,
    FoodpageComponent,
    CartpageComponent,
    TitleComponent,
    NotfoundComponent,
    CheckoutPageComponent,
    OrderlistComponent,
    MapComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
