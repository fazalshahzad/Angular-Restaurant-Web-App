import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/userservice.service';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  user!:User;

  constructor(cartService:CartService, private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) =>{
this.user = newUser;
    })

   }

   logout(){
    this.userService.logout();
   }


  get isAuth(){
    return this.user.token;
  }

  ngOnInit(): void {
  }


}
