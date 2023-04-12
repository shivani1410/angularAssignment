import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit , OnDestroy{
  recipes: Recipe[]
  subscription:Subscription
  constructor(private recipeService:RecipeService,private router:Router){}
  
recipeDetails(index:number){

      this.router.navigate(['/recipes',index])
}
  ngOnInit() {
    this.subscription=this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>{
        this.recipes=recipe
      }
    )
   this.recipes= this.recipeService.getRecipes()
   console.log(this.recipes)
  }
  newRecipe(){
    this.router.navigate(['/recipes','new'])
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
}
