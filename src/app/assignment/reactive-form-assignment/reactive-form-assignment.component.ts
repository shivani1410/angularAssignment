import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit{

projectForm:FormGroup;
projectStatus=['Stable','Critical','Finished'];
ngOnInit(): void {
  this.projectForm=new FormGroup({
    prjName:new FormControl(null,[Validators.required],this.forbiddenNameAsync),
    email:new FormControl(null,[Validators.required,Validators.email]),
    prjStatus:new FormControl(null)
  })
}
onSubmit(){
 console.log( this.projectForm)
}
forbiddenName(control:FormControl):{[s:string]:boolean}|null{
  if(control.value==='test'){
    return {'isForbiddenName':true}
  }
  return null;
}
forbiddenNameAsync(control:AbstractControl):Promise<any>|Observable<any>{
  const obs=new Promise<any>((resolve,rejct)=>{
    setTimeout(()=>{
      if(control.value==='test'){
        resolve({'isForbiddenName':true})
      }else{
        resolve(null)
      }
    },1500)
  })
  return obs
}
}
