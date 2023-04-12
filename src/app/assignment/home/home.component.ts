import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, interval, map, Observable, Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
constructor(private router:Router,private authService:AuthService){}
private firstSubs:Subscription
private customSubs:Subscription
  ngOnInit(): void {
  //  this.firstSubs=interval(1000).subscribe(count=>{
  //   console.log(count)
  //  })
const customObs=new Observable(observer=>{
  let count=0;
  setInterval(()=>{
    observer.next(count)
    if(count===1){
      observer.complete()
    }
    if(count>3){
      observer.error(new Error('Error occured'))
    }
    count++
  },1000) 
})
this.customSubs=customObs.pipe(filter((data:any)=>{return data%2===0}),
  map((data:any)=>{return 'Round: '+(data+1)})) .subscribe({
  next:(data)=>{
    console.log(data)
  },
  error:(err)=>{
    console.log(err)
  },complete:()=>{
    console.log('complete')
  }
})
  }
  ngOnDestroy(): void {
   this.firstSubs.unsubscribe()
   this.customSubs.unsubscribe()
  }
onLoad(id:number){
  this.router.navigate(['/route',id,'new'],{queryParams:{pause:2},fragment:'load'})
}
login(){
  this.authService.login()
}
logout(){
  this.authService.logout()
}

}
