import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { StartRecipesComponent } from './start-recipes/start-recipes.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeRouterModule } from './recipe/recipe-router.module';
import { DropdownDirective } from 'src/app/shared/directive/dropdown.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StartRecipesComponent,
    RecipeEditComponent,
    DropdownDirective
  ],
  imports: [CommonModule,RouterModule,ReactiveFormsModule,RecipeRouterModule],
  exports:[ RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StartRecipesComponent,
    RecipeEditComponent,
    DropdownDirective
  ]
})
export class RecipeModule {}
