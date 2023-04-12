import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  // serverName: string;
  // serverContent: string;
  serverElements: any[] = [{name:'test',type:'server',content:'content'}];
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      name: serverData.serverName,
      type: 'server',
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      name: blueprintData.serverName,
      type: 'blueprint',
      content: blueprintData.serverContent,
    });
  }
}
