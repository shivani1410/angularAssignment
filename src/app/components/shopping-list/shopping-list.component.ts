import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
ingredients:Ingredient[]
private ingredientsSubs:Subscription;
constructor(private shoppingListService:ShoppingListService){}
 
  ngOnInit(): void {
  this.ingredients= this.shoppingListService.getIngredients()
  this.ingredientsSubs=this.shoppingListService.ingredientsChanged.subscribe((ingredientList:Ingredient[])=>{
    this.ingredients=ingredientList
  })
  }
  onEditItem(index:number){
    console.log(index)
    this.shoppingListService.startedEditing.next(index)
  }
  ngOnDestroy(): void {
    this.ingredientsSubs.unsubscribe()
     
   }
}
