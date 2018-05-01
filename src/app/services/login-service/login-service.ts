import { Injectable } from "@angular/core";
import { LoginServiceEndpoint } from "./login-service.endpoint";

@Injectable()
export class LoginService {
    constructor(private loginServiceEndpoint: LoginServiceEndpoint) {  }

    public login<T>(username: string, password: string) {
        return this.loginServiceEndpoint.login(username, password);
    }
}