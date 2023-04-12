import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
@Output() startCount=new EventEmitter<number>();
@Output() stopCount=new EventEmitter<void>();
 num=0;
 interval:any;
 ngOnInit(){

  
 }
onStartGame(){

 this.interval= setInterval(()=>{
    this.startCount.emit( this.num=this.num+1)
    // console.log(this.num)
  },500)
}
onStopGame(){
  // this.stopCount.
 clearInterval(this.interval)
//  this.stopCount.emit(0)
// this.num=0
this.stopCount.emit()
}
}
