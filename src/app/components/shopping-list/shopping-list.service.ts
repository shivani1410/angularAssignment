import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();
  constructor() {}
  private ingredients: Ingredient[] = [
    new Ingredient('Banana', '12'),
    new Ingredient('Cheese', '12'),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index:number){
return this.ingredients[index]
  }
  itemAddedToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
  editIngredient(index:number,ingredient:Ingredient){
    this.ingredients[index]=ingredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
