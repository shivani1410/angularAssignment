import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private expiresInDuration: any;
  userLoggedIn = new BehaviorSubject<User | undefined | null>(undefined);
  constructor(private http: HttpClient, private router: Router) {}
  signup(email: string, password: string) {
    console.log(email);
    console.log(password);
    return this.http
      .post<AuthReponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF_cMA0ryyfTBp_3_mTjcOUPQabYx-fTQ',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthReponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF_cMA0ryyfTBp_3_mTjcOUPQabYx-fTQ',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }
  handleError(errRes: HttpErrorResponse) {
    let errorResponse = 'An error ocurred';
    if (!errRes.error || !errRes.error.error) {
      return throwError(() => errorResponse);
    }
    switch (errRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorResponse = 'Email not found!';
        break;
      case 'EMAIL_EXISTS':
        errorResponse = 'Email already exists!';
        break;
      case 'INVALID_PASSWORD':
        errorResponse = 'Incorrect Password';
        break;
    }
    return throwError(() => errorResponse);
  }
  handleAuthentication(
    email: string,
    id: string,
    token: string,
    expiresIn: number
  ) {
    let tokenExpiration = new Date(new Date().getTime() + expiresIn * 1000);
    let user = new User(email, id, token, tokenExpiration);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(expiresIn*1000)
    return this.userLoggedIn.next(user);
  }
  logout() {
    this.userLoggedIn.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.expiresInDuration) {
      clearTimeout(this.expiresInDuration);
    }
    this.expiresInDuration = null;
  }
  autoLogin() {
    let userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    }

    const user: {
      email: string;
      id: string;
      _token: string;
      _tokenExpiration: string;
    } = JSON.parse(userData);

    let userLogged = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpiration)
    );
    if (userLogged.token) {
      this.userLoggedIn.next(userLogged);
      const remainingTime =
        new Date(user._tokenExpiration).getTime() - new Date().getTime();
      this.autoLogout(remainingTime);
      this.expiresInDuration = null;
    }
  }
  autoLogout(expirationDuration: number) {
    this.expiresInDuration = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
export interface AuthReponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
