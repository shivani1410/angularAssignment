import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class RequestData{
 constructor( public activity:string,
  public type:string,
  public participants:string,
  public price:number,
  public link:string,
  public key:string,
  public accessibility:number){}
}
@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private http:HttpClient) { }

  getRequest(){
    return  this.http.get<RequestData>('https://www.boredapi.com/api/activity');
// const promise=new Promise<void>((resolve,reject)=>{
//   this.http.get<RequestData>('https://www.boredapi.com/api/activity').subscribe(
//     {
//       next:(data:any)=>{
//         this.dataRequest=data.map((res:any)=>{
//           return new RequestData(res.activity,res.type,res.participants,res.price,res.link,res.key,res.accessibility)
//         }
//         )
//         resolve();
//       },
//       error:(err:any)=>{
//         reject(err);
//       }
  
//     }
//   )
// })
// return promise;
    
  }
  
}
