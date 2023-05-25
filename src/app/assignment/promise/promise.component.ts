import { Component } from '@angular/core';
import { PromiseService, RequestData } from './promise.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
constructor(private promsise:PromiseService){

}
dataRequest
promisePipe:Promise<RequestData>;
async getData():Promise<RequestData>{

 const promise=await new Promise<RequestData>((resolve,reject)=>{
    this.promsise.getRequest().toPromise().then(res=>{
      this.dataRequest=res;
      resolve(this.dataRequest);
    }
    , msg=>{
      reject(msg);
    }).finally(()=>{
      console.log("dinally")
    })
  })
  this.forPipe()
  return promise;

}

forPipe():Promise<RequestData>{

   this.promisePipe= new Promise<RequestData>((resolve,reject)=>{
    // this.promsise.getRequest().toPromise().then(res=>{
      // this.dataRequest=res;
      resolve(this.dataRequest);
    // }
    // , msg=>{
    //   reject(msg);
    // }).finally(()=>{
    //   console.log("dinally")
    // })
  })
  return this.promisePipe;
}
}
