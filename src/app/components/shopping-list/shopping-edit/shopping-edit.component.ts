import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // shoppingName:string
  constructor(private shoppingListService: ShoppingListService) {}
  subscription: Subscription;
  editMode: boolean = false;
  itemIndex: number;
  @ViewChild('f')  ingredientForm:NgForm
  editItem:Ingredient
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.itemIndex = index;
        this.editMode = true;
       this.editItem= this.shoppingListService.getIngredient(index)
       this.ingredientForm.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
       })
      }
    );
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
  onSubmit(shoppingForm: NgForm) {
    console.log('inside');
    console.log(shoppingForm);
    if(this.editMode){
      this.shoppingListService.editIngredient( this.itemIndex,new Ingredient(shoppingForm.value.name, shoppingForm.value.amount))
    }else{
    this.shoppingListService.itemAddedToList(
      new Ingredient(shoppingForm.value.name, shoppingForm.value.amount)
    );}
    this.editMode=false
    shoppingForm.reset()
  }
  onClear(){
    this.ingredientForm.reset()
    this.editMode=false
  }
  onDelete(){
    
    this.shoppingListService.deleteIngredient(this.itemIndex)
    this.onClear()
  }
}
