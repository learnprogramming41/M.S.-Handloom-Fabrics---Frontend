import {Injectable} from "@angular/core";
import {AuthorizationComponent} from "../../components/authorization.component";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Observable} from "rxjs/Observable";
import {LoginModel} from "../../model/login.model";

@Injectable()
export class AccountServiceEndpoint {
    
    private readonly createAccountUrl: string = "/pashmina/user/create-account";
    private readonly loginUrl: string = "/pashmina/user/login";
    
    private get getCreateAccountUrl() {return this.auth.getBaseUrl + this.createAccountUrl}
    private get getLoginUrl() {return this.auth.getBaseUrl + this.loginUrl}
    
    constructor(
        private http: HttpClient,
        private auth: AuthorizationComponent
    ) {}
    
    public createAccount<T>(user: UserModel) {
        return this.http.post<T>(this.getCreateAccountUrl, user).catch(
            error => {
                throw new Observable(error);
            }
        )
    }
    
    public login<T>(loginModel: LoginModel) {
        return this.http.get<T>(this.getLoginUrl, {params: {
            username: loginModel.username,
            password: loginModel.password,
        }}).catch(
            error => {
                throw new Observable(error);
            }
        )
    }
}