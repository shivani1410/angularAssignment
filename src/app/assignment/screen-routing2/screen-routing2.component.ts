import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../service/can-deactivate.service';

@Component({
  selector: 'app-screen-routing2',
  templateUrl: './screen-routing2.component.html',
  styleUrls: ['./screen-routing2.component.css']
})
export class ScreenRouting2Component implements OnInit,CanComponentDeactivate{
constructor(private routee:ActivatedRoute){}
 
  ngOnInit(): void {
   console.log(this.routee.snapshot.queryParams)
   console.log('fragment'+ this.routee.snapshot.fragment)
   this.routee.queryParams.subscribe(
    (val:Params)=>{
      console.log(val)
    }
   )
   this.routee.fragment.subscribe(
    (val:any)=>{
      console.log("frag:"+val)
    }
   )
  }
  allowDeactivate:boolean=false
  checkDeactivate(){
    this.allowDeactivate=true
  }
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean>{
   if(!this.allowDeactivate){
    return confirm('Do you want to discard the changes?')
   }else{
    return true
   }
  }
}
