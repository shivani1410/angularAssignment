import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{
authenticated:boolean=false
  constructor(private authService:AuthService,private router:Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean > | Promise<boolean > {
  return this.authService.isAuthenticated().then(
    (authenticated:any)=>{
      if(authenticated){
        console.log('inside authenticated')
        return true;
      }else{
        this.router.navigate(['/'])
        return false;
  
      }
    }
   )
      
  }

}
