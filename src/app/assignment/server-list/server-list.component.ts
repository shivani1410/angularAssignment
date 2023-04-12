import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {
@Input() element:{name:string,type:string,content:string}
}
