import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  reactiveForm:FormGroup
  genders=['Male','Female','Others']
ngOnInit(): void {
  this.initializeForm()
  // throw new Error('Method not implemented.');
}
initializeForm(){
  this.reactiveForm=new FormGroup({
    'userData':new FormGroup({
      'username':new FormControl(null,[Validators.required,this.forbiddenUserName.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],[this.forbiddenEmail])
    })
    ,
    // 'secretQuest':new FormControl(''),
    'gender':new FormControl('Male'),
    'hobbies':new FormArray([])
  })
}
onSubmit(){
  console.log(this.reactiveForm)
}

onAddHobbies(){
  const control=new FormControl(null,Validators.required);
  (<FormArray> this.reactiveForm.get('hobbies')).push(control);
}
getControls(){
  return (this.reactiveForm.get('hobbies') as FormArray).controls;
}
forbidderName=['Voldermote','Bellatrix']
forbiddenUserName(control:FormControl):{[s:string]:boolean}|null{
  if(this.forbidderName.indexOf(control.value)!==-1){
    return {'nameIsForbidden':true};
  }
  return null;
}
errorValue:string=''
forbiddenEmail(control:AbstractControl):Promise<any>|Observable<any>{
  const obs=new Promise<any>((resolve,reject)=>{
    setTimeout(()=>{
      if(control.value==='test@test.com'){
        resolve({'isForbiddenEmail':true})
      }else{
        resolve(null)
      }
    },1500)
  })
  return obs;
}
}
