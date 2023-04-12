import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit{
constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
    // console.log(this.router.qu)
  }
reloadPage(){
  this.router.navigate(['screen1'],{relativeTo:this.route})
}
}
