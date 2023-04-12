import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService,AuthReponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  constructor(private authService:AuthService, private router:Router){}
  loginForm: FormGroup;
  isLogged=true
  isLoading=false
  errorMessage:string|null
  ngOnInit(): void {
  this.loginForm=new FormGroup({
    'email':new FormControl('',[Validators.required,Validators.email]),
    'pwd':new FormControl('',[Validators.minLength(6),Validators.required])
  })
  }
switchContext(){
  this.isLogged=!this.isLogged
}

onSubmit(){
  console.log(this.loginForm)
  let emailAdd=this.loginForm.value.email;
  let pwd=this.loginForm.value.pwd;
  let authObs:Observable<AuthReponse>;
  if(!this.isLogged){
    this.isLoading=true
    authObs= this.authService.signup(emailAdd,pwd)
  }else{
    authObs=  this.authService.login(emailAdd,pwd)
  }
authObs.subscribe({
  next:response=>{
    console.log(response)
    
    this.isLoading=false
    this.router.navigate(['/recipes'])
  },error:err=>{
    console.log(err)
    this.errorMessage=err
    this.isLoading=false
  }
})
}
onClearError(){
  this.errorMessage=null
}
}
