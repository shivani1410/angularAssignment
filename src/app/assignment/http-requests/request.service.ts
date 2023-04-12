import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from './http-requests.component';
import {map,tap} from 'rxjs/operators'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  errSub=new Subject<string|any>()
  onCreatePost(post:PostData){
    this.http
    .post(
      'https://angular-assignment-337f5-default-rtdb.firebaseio.com/post.json',
      post,{
        observe:'response'
      }
    )
    .subscribe(
      {
        next:response=>{
          console.log(response);
        },
        error:response=>{
          this.errSub.next(response.message)
        }
      }
    //   (response) => {
    //   console.log(response);
    // },error=>{
    //   this.errSub.next(error.mess)
    // }
    );
  }
  onFetch(){
    let params=new HttpParams();
    params=params.append('print','pretty');
    params=params.append('custome','key')
   return this.http.get<{[key:string]:PostData}>( 'https://angular-assignment-337f5-default-rtdb.firebaseio.com/post.json'
    ,{headers:new HttpHeaders({'Custom-Header':'Hello'}),
    params:params,
    responseType:'json'
    // response type can be JSON, BLOB, text etc
  }
   ).
    pipe(map((responseData)=>{
      let postArray:PostData[]=[]
      for(let data in responseData){
        if(responseData.hasOwnProperty(data)){
          postArray.push({... responseData[data],id:data})
        }
      }
      return postArray
    }))
  }
  onClearData(){
   return this.http.delete('https://angular-assignment-337f5-default-rtdb.firebaseio.com/post.json',{
    observe:'events'
   }).pipe(tap(events=>{
console.log(events)
if(events.type===HttpEventType.DownloadProgress){
  console.log('download progress type==3')
}
if(events.type===HttpEventType.Sent){
  console.log('Sent type==0')
}
if(events.type===HttpEventType.UploadProgress){
  console.log('UploadProgress type==1')
}
   }))
  }
}
