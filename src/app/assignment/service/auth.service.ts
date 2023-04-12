import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn:boolean=true;
  isAuthenticated(){
    const promise=new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.isLoggedIn)
        },800)
      }
    )
    return promise;
  }
  login(){
    console.log('inside logi')
    this.isLoggedIn=true
  }
  logout(){
    this.isLoggedIn=false
  }
}
