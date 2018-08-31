import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationComponent {
  private readonly baseUrl: string = 'http://localhost:8080/mshandloom';
  private readonly accessTokenUrl = '/oauth/token';
  private errorList: string = '';

  // /oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username=admin&password=admin

  constructor(private http: HttpClient) {

  }

  public get getBaseUrl() {
    return this.baseUrl;
  }

  public getAccessToken(userName: string, pass: string) {
    const url = this.baseUrl + this.accessTokenUrl;
    return this.http.get(url, {
      params: {
        grant_type: 'password',
        client_id: 'restapp',
        client_secret: 'restapp',
        username: userName,
        password: pass
      }
    });
  }

  public getAccessTokenUsingRefreshToken(refreshToken: any) {
    // oauth/token?grant_type=refresh_token&client_id=restapp&client_secret=restapp
    // &refresh_token=7ac7940a-d29d-4a4c-9a47-25a2167c8c49

    const url = this.baseUrl + this.accessTokenUrl;
    return this.http.get(url, {
      params: {
        grant_type: 'refresh_token',
        client_id: 'restapp',
        client_secret: 'restapp',
        refresh_token: refreshToken
      }
    })
  }

//    public getRequestParam(): {params: HttpParams | {params: string}} {
//        const params = new HttpParams();
//        params.append('access_token', JSON.parse(localStorage.getItem('token'))['value']);
//
//        return {params: params};
//    }

  public handleError(error) {
    if (error.error) {
      if (error.error instanceof Array) {
        for (var i = 0; i < error.error.length; i++) {
          if (i === 0) {
            this.errorList = error.error[i].description;
          }
          else {
            this.errorList += " " + error.error[i].description;
          }
        }
        return Observable.throw(this.errorList);
      }
      else {
        return Observable.throw(error.error);
      }
    }
    else {
      return Observable.throw(error.message);
    }
  }
}













