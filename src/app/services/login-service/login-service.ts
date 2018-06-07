import { Injectable } from "@angular/core";
import { LoginServiceEndpoint } from "./login-service.endpoint";
import {ForgotPasswordModel} from "../../model/forgot-password.model";

@Injectable()
export class LoginService {
    constructor(private loginServiceEndpoint: LoginServiceEndpoint) {  }

    public login<T>(username: string, password: string) {
        return this.loginServiceEndpoint.login(username, password);
    }
    
    public checkEmail<T>(email: string) {
        return this.loginServiceEndpoint.checkEmail(email);
    }
    
    public sendEmail<T>(email: String) {
        return this.loginServiceEndpoint.sendEmail(email);
    }
}