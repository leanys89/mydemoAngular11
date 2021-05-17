import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'AuhtToken';
const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private jwtHelper: JwtHelperService) { }

  public login(user:User):Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
    const payload = new HttpParams()
    .set('username', user.username)
    .set('pwd', user.pwd);

    return this.http.post(environment.ApiBaseUrl + 'login', payload, {headers} );
  }

  public logOut():void{
    sessionStorage.clear();
  }

  public isAuthenticated(): boolean{
      let token  = this.getToken();
      const ok = token !== null && !this.jwtHelper.isTokenExpired(token);
      return ok;
  }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsername(username:string):void{
    sessionStorage.removeItem(USERNAME_KEY);
    sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername():string | null{
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public getAuthHeaders(): HttpHeaders {
    var headers = new HttpHeaders()
        .append('Authorization', 'Bearer ' + (this.getToken() ?? '') ); 
    return headers;
}


}
