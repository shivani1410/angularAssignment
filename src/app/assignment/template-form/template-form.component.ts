import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('f') signupForm:NgForm
  genders=['Male','Female','Others']
  secretQuest='pet'
formData={
  username:'',
  email:'',
  secretQuest:'',
  gender:''
}
submitted=false
/*-------when passing form from template------*/
  // onSubmit(form:NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted=true
    this.formData.username=this.signupForm.value.userData.username
    this.formData.email=this.signupForm.value.userData.email
    this.formData.secretQuest=this.signupForm.value.userData.secretQuest
    this.formData.gender=this.signupForm.value.userData.gender
    
  }
  reset(){
    this.submitted=false
    this.signupForm.reset()
  }
  suggestedUserName(){
let suggestedUsername='Myungsoo';
/*---Setting values for entire form-----*/
// this.signupForm.setValue({
//   userData:{
//     username:suggestedUsername,
//     email:'',
//     secret:this.secretQuest,
//     gender:'Male'
//   }
// })
this.signupForm.form.patchValue({
  userData:{
    username:suggestedUsername
  }
})
  }
}
