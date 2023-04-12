import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
click:number=0;
  registerClick(){
this.click=this.click+1;
console.log('click: '+this.click)
  }
}
