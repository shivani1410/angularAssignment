import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit{
  constructor(private route:Router,private activeRoute :ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.queryParams['allowEdit'])}
  onRoute2(){
    this.route.navigate(['edit'],{relativeTo:this.activeRoute,queryParamsHandling:'preserve'})
  }
}
