import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{

  constructor(
    public status:string,
  ) {}
}

export class JwtResponse{

  constructor(
    public jwttoken:string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private corsHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2021 00:00:00 GMT',
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, HEAD, OPTIONS'

    });
   }

     authenticate(username, password) {

      const options = {
        headers: this.corsHeaders
      };

      return this.httpClient.post<any>('ehealth/authenticate',{username,password}, options).pipe(

       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+ userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
      );
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
