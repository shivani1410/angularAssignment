import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSourceService } from 'src/app/shared/service/data-source.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private dataSource:DataSourceService,private recipeService:RecipeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    let recipes=this.recipeService.getRecipes();
    console.log(recipes)
    if(recipes.length===0){
      
   return this.dataSource.fetchData();}
   else{
    return recipes
   }
  }
}
