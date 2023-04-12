import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged=new Subject<Recipe[]>();
  recipes: Recipe[] 
  // = [
  //   new Recipe(
  //     'Kimbab',
  //     'Myungsoo Loves Kimbab',
  //     'https://www.seriouseats.com/thmb/WtcBGMWbdUcAIVe8zg4VCm2aqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg',
  //     [new Ingredient('Rice', '3'), new Ingredient('Kim', '12')]
  //   ),
  //   new Recipe(
  //     'Jajjangmyeon',
  //     'Myungsoo hates Kimbab',
  //     'https://christieathome.com/wp-content/uploads/2022/07/Jajangmyeon-4.jpg',
  //     [new Ingredient('Black bean', '50')]
  //   ),
  // ];
  getRecipes() {
    
    return this.recipes?this.recipes.slice():this.recipes;
  }
loadRecipe(recipe:Recipe[]){
this.recipes=recipe;
this.recipeChanged.next(this.recipes.slice())
}
  constructor(private slService: ShoppingListService) {}
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipeItem(id:string):Recipe|any{
    return this.recipes.at(+id)
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe(id:number){
    this.recipes.splice(id,1);
    this.recipeChanged.next(this.recipes.slice())
  }
}
