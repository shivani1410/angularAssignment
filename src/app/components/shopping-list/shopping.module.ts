import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ShoppingListComponent, ShoppingEditComponent, RouterModule],
})
export class ShoppingModule {}
