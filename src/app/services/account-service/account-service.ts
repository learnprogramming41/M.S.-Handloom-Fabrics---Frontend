import {Injectable} from "@angular/core";
import {AccountServiceEndpoint} from "./account-service.endpoint";
import {UserModel} from "../../model/user.model";
import {LoginModel} from "../../model/login.model";

@Injectable()
export class AccountService {
    constructor(
        private accountServiceEndpoint: AccountServiceEndpoint,
    ) {  }
    
    public createAccount<T>(user: UserModel) {
        return this.accountServiceEndpoint.createAccount(user);
    }
    
    public login<T>(login: LoginModel) {
        return this.accountServiceEndpoint.login(login);
    }
}

