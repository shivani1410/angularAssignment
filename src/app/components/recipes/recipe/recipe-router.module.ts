import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../auth/auth.guard";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "../recipe-resolver.service";
import { RecipesComponent } from "../recipes.component";
import { StartRecipesComponent } from "../start-recipes/start-recipes.component";
const route:Routes=[{path:'',component:RecipesComponent,canActivate:[AuthGuard],children:[
    {path:'',component:StartRecipesComponent},
    {path:'new',component:RecipeEditComponent,resolve:[RecipeResolverService]},
    {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolverService]},
    {path:':id/edit',component:RecipeEditComponent},
  ]}]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class RecipeRouterModule{}