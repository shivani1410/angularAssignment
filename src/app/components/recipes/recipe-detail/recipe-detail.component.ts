import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id:number
  constructor(private recipeService: RecipeService,private activeRoute:ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    // this.recipeDetail=this.recipeService.getRecipeItem(this.activeRoute.snapshot.params['id'])
 
    this.activeRoute.params.subscribe(
      (param:Params)=>{
        this.recipeDetail=this.recipeService.getRecipeItem(param['id'])
        this.id=+param['id']
      }
    )
  }
  addToShoppingList() {
    console.log('inside shop')
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetail.ingredients
    );
  }
  editRecipe(){
this.router.navigate(['edit'],{relativeTo:this.activeRoute})
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'],{relativeTo:this.activeRoute})
  }
}
