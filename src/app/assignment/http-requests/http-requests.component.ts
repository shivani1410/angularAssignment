import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { RequestService } from './request.service';
@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css'],
})
export class HttpRequestsComponent implements OnInit {
  constructor(private http: HttpClient,private requestService:RequestService) {}
  requestForm: FormGroup;
  postList:PostData[]
  isFetching=false
  error=null
  errSub:Subscription
  ngOnInit(): void {
    this.requestService.errSub.subscribe(err=>{
      this.error=err
    })
    this.onInit();
    this.onFetchData();
  }

  onInit() {
    this.requestForm = new FormGroup({
      prjName: new FormControl(null),
      prjDesc: new FormControl(null),
    });
  }
  onSubmit() {
    let post:PostData=this.requestForm.value
    // let postData:{title:string,content:string}
    // postData={
    //   title:this.requestForm.prjName
    // }
    // this.http
    //   .post(
    //     'https://angular-assignment-337f5-default-rtdb.firebaseio.com/post.json',
    //     this.requestForm.value
    //   )
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
    this.requestService.onCreatePost(post);

  }
  onFetchData() {
    this.isFetching=true
  this.requestService.onFetch().subscribe({
    next:(response)=>{
    this.postList=response;
    this.isFetching=false},
    error:err=>{
      this.error=err.message
    }
  })
//     this.http
//       .get<{ [key: string]: PostData }>(
//         'https://angular-assignment-337f5-default-rtdb.firebaseio.com/post.json'
//       )
//       .pipe(
//         map((responseData) => {
//           let projectArray: PostData[] = [];
//           /**  -------------One way of handling reposnse-----
//        * let keyValues:any[];
//       keyValues=Object.entries(responseData)
//       for(let key of keyValues){
//         projectArray.push({... key[1],id:key[0]})
//       }
// */
//           for (const key in responseData) {
//             if (responseData.hasOwnProperty(key)) {
//               projectArray.push({ ...responseData[key], id: key });
//             }
//           }
//           return projectArray;
//         })
//       )
//       .subscribe((data) => {
//         console.log(
//           '----------------------------subscribe-------------------------------'
//         );
//         console.log(data);
//         this.postList=data
//         this.isFetching=false
//       });
  }
  onClear(){
    this.requestForm.reset();
    this.requestService.onClearData().subscribe(
     {
      next:(response)=>{
        this.postList=[]
      },
      error:error=>{
        console.log(error)
        this.error=error.message
              }
     } 
    )

  }
}

export interface PostData {
  prjName: string;
  prjDesc: string;
  id?: string;
}
