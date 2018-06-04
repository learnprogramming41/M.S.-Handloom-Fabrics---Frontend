import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthorizationComponent } from "./../../components/authorization.component";
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()

export class LoginServiceEndpoint {
    
    //defining url
    private readonly loginUrl = "/authorization/admin/login";

    constructor(private http: HttpClient, private auth: AuthorizationComponent) {  }
    
    //getter method for url
    private get getLoginUrl() { return this.auth.getBaseUrl+this.loginUrl }

    //methods
    public login<T>(username: string, password: string) {
        return this.http.get<T>(this.getLoginUrl, {
            params: {
                username: username,
                password: password
            }
        })
            .catch(error => {
                throw new Observable(error);
            })
    }
}