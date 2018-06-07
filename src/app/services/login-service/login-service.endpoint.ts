import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthorizationComponent } from "./../../components/authorization.component";
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {ForgotPasswordModel} from "../../model/forgot-password.model";

@Injectable()

export class LoginServiceEndpoint {
    
    //defining url
    private readonly loginUrl = "/authorization/admin/login";
    private readonly forgetPasswordUrl = '/user/check-email';
    private readonly emailUrl = "/mail/send-mail";

    constructor(private http: HttpClient, private auth: AuthorizationComponent) {  }
    
    //getter method for url
    private get getLoginUrl() { return this.auth.getBaseUrl+this.loginUrl }
    private get getForgetPasswordUrl() {return this.auth.getBaseUrl + this.forgetPasswordUrl }
    private get getEmailUrl() {return this.auth.getBaseUrl + this.emailUrl }

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
    
    public checkEmail<T>(userEmail: string) {
        return this.http.get<T>(this.getForgetPasswordUrl, {params: {
            email: userEmail
        }})
            .catch(error => {
                throw new Observable(error);
            })
    } 
    
    //sending email
    public sendEmail<T>(emailAddress: String) {
        return this.http.post<T>(this.getEmailUrl, emailAddress)
            .catch(error => {
                throw new Observable(error)
            })
    }
}