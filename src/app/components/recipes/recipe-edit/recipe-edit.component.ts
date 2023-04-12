import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id:number;
  editMode:boolean=false
  recipeForm:FormGroup
  constructor(private activatedRoute:ActivatedRoute,private recipeService:RecipeService,private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param:Params)=>{
        this.id=+param['id']
        this.editMode=param['id']!=null
        console.log(this.editMode)
        this.onInitForm()
      }
    )
   
  }
  onInitForm(){
    let recipeName='';
    let imgPath='';
    let recipeDesc='';
    let ingredientsArray=new FormArray<any>([])
    if(this.editMode){
      const recipe=this.recipeService.getRecipeItem(this.id+'')
      recipeName=recipe.name;
      imgPath=recipe.imgPath;
      recipeDesc=recipe.desc;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
         ingredientsArray.push(new FormGroup({
          'name':new FormControl(ingredient.name,[Validators.required]),
          'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
         }))
        }
      }

    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,[Validators.required]),
      'imgPath':new FormControl(imgPath,[Validators.required]),
      'desc':new FormControl(recipeDesc,[Validators.required]),
      'ingredients':ingredientsArray
    })
  }
  onAddIngredients(){
   const ing=new FormGroup({
      'name':new FormControl(null,[Validators.required]),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray> this.recipeForm.get('ingredients')).push(ing)
    console.log((this.recipeForm.get('ingredients') as FormArray).controls)
  }
getIngredientControls(){
  return (this.recipeForm.get('ingredients') as FormArray).controls
}
onSubmit(){
  console.log(this.recipeForm.value)
  if(this.editMode)
  {
    this.recipeService.updateRecipe(this.id,this.recipeForm.value)
  }else{
    this.recipeService.addRecipe(this.recipeForm.value)
    
  }
  this.onCancel()
}
onCancel(){
  this.clearForm()
this.router.navigate(['../'],{relativeTo:this.activatedRoute})
}
clearForm(){
  // (this.recipeForm.get('ingredients') as FormArray).reset();
  // while((this.recipeForm.get('ingredients') as FormArray).length!=0){
  //   (this.recipeForm.get('ingredients') as FormArray).removeAt(0)
  // }
  (this.recipeForm.get('ingredients') as FormArray).clear()
  this.recipeForm.reset();
}
deleteIngredient(index:number){
  (this.recipeForm.get('ingredients') as FormArray).removeAt(index)

}
}
