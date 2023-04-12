import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSourceService } from 'src/app/shared/service/data-source.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  constructor(private dataSource:DataSourceService,private authService:AuthService){}
  isAuthenticated=false
  subscription:Subscription
  ngOnDestroy(): void {
this.subscription.unsubscribe()
  }
  ngOnInit(): void {
   this.subscription=this.authService.userLoggedIn.subscribe(
    user=>{this.isAuthenticated=!!user
    console.log(user)}
   )
  }
 
  saveData(){
    this.dataSource.saveData();
  }
  fetchData(){
    this.dataSource.fetchData().subscribe();
  }
  onLogout(){
    this.authService.logout()
  }
}
