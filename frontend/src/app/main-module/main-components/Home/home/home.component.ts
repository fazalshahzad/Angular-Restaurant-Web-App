import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Shared/Models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  foods:Food[]=[];

  constructor(private foodservice:FoodService, activatedRoute:ActivatedRoute) {
    let foodsobservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodsobservable = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
      foodsobservable = this.foodservice.getAllFoodsByTag(params.tag);
      else
      foodsobservable = foodservice.getAll();

      foodsobservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
    })
  }

  ngOnInit(): void {
  }

}
