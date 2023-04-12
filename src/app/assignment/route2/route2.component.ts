import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams['allowEdit'])
   this.route.queryParams.subscribe(
    (param:Params)=>{console.log(param['allowEdit'])}
   )
  }

}
