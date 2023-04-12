import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/components/recipes/recipe.model';
import { RecipeService } from 'src/app/components/recipes/recipe.service';
import { map ,tap,take, exhaustMap} from 'rxjs/operators';
import { AuthService } from 'src/app/components/auth/auth.service';
import { User } from 'src/app/components/auth/users.model';
@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  constructor(private http: HttpClient, private recipeService: RecipeService,private authService:AuthService) {}
  saveData() {
    let recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://angular-assignment-337f5-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
  fetchData() {
   return this.authService.userLoggedIn.pipe(take(1),
    exhaustMap(user=>{
      return this.http
      .get<Recipe[]>(
        'https://angular-assignment-337f5-default-rtdb.firebaseio.com/recipes.json?auth='+user?.token
        
      )
    }), map((recipes) => {
      return recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        };
      });
    }),tap(recipes=>{
      return   this.recipeService.loadRecipe(recipes);
    })
    )
    
     
     
  }
}
