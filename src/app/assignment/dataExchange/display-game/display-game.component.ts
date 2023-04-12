import { Component } from '@angular/core';

@Component({
  selector: 'app-display-game',
  templateUrl: './display-game.component.html',
  styleUrls: ['./display-game.component.css']
})
export class DisplayGameComponent {
  counterList:number[]=[]
  counterStarted(num:number){
    console.log(num)
    this.counterList.push(num)
  }
  counterStopped(){
   this.counterList=[]
  }
}
