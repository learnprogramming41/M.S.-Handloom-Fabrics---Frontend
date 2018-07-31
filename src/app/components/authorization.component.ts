import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationComponent {
    private readonly baseUrl: string = 'http://localhost:8080/M.S.-Handloom-Fabrics';
    private readonly accessTokenUrl = '/oauth/token';

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
}













