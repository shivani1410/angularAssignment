import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
  user:{id:number,name:string};
  constructor(private router:ActivatedRoute){}
ngOnInit() {
  this.user={
    id:this.router.snapshot.params['id'],
    name:this.router.snapshot.params['name']
  }

  this.router.params.subscribe(
    (params:Params)=>{
      console.log(params['id'])
      this.user.id=params['id'],
      this.user.name=params['name']
    }
  )
}

}
