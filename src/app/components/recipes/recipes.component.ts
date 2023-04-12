import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  
})
export class RecipesComponent implements OnInit{
  recipeDetail:Recipe;
  itemExist:boolean=false
  constructor(){}
  ngOnInit() {
    this.itemExist=true
  
  }

}
