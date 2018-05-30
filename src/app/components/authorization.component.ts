import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorizationComponent {
    private readonly baseUrl: string = "http://localhost:8080/M.S.-Handloom-Fabrics";
    private readonly accessTokenUrl = "/oauth/token"

    // /oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username=admin&password=admin
    
    constructor(private http: HttpClient) {

    }
    
    public get getBaseUrl() {
        return this.baseUrl;
    }

    public getAccessToken(userName: string, pass: string) {
        var url = this.baseUrl+this.accessTokenUrl;
        return this.http.get(url, {params: {
            grant_type: "password",
            client_id: "restapp",
            client_secret: "restapp",
            username: userName,
            password: pass
        }})
    }
}