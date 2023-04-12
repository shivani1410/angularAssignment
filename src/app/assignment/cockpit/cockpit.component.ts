import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //default is emulated, none is used to remove view encapsulation Video 71
})
export class CockpitComponent {
  @Output() onServerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() onBlueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef
  // serverName: string;
  // serverContent: string;
  serverCheck:boolean=true
  addServer(serverNameRefer: HTMLInputElement) {
    this.onServerCreated.emit({
      serverName: serverNameRefer.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    this.serverCheck=false
    // this.serverElements.push({
    //   name: this.serverName,
    //   type: 'server',
    //   content: this.serverContent,
    // });
  }
  addBlueprint(serverNameRefer: HTMLInputElement) {
    this.onBlueprintCreated.emit({
      serverName: serverNameRefer.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    // this.serverElements.push({
    //   name: this.serverName,
    //   type: 'blueprint',
    //   content: this.serverContent,
    // });
  }

  value:number=1
}
