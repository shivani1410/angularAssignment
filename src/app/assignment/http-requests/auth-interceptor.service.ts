import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Interceptor Added')
    console.log(req.url)
    const modifiedReq=req.clone({
      // headers:req.headers.append('Auth','myungmie')
      //commented because it was throwing error with firebase
    });
    return next.handle(modifiedReq).pipe(
      /**    intercepting the response here   */
      tap(event=>{
        if(event.type===HttpEventType.Response){
          console.log('response here')
          console.log(event.body)
        }
      })
    );
  }
}
