import {Injectable} from "@angular/core";
import {AuthorizationComponent} from "../../components/authorization.component";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Observable} from "rxjs/Observable";
import {LoginModel} from "../../model/login.model";
import {GetInTouch} from "../../model/get-in-touch";

@Injectable()
export class AccountServiceEndpoint {

    private readonly createAccountUrl: string = "/pashmina/user/create-account";
    private readonly loginUrl: string = "/pashmina/user/login";
    private readonly getInTouchUrl: string = "/mail/get-in-touch";

    private get getCreateAccountUrl() {return this.auth.getBaseUrl + this.createAccountUrl}
    private get getLoginUrl() {return this.auth.getBaseUrl + this.loginUrl}
    private get getGetInTouchUrl() {return this.auth.getBaseUrl + this.getInTouchUrl}

    constructor(
        private http: HttpClient,
        private auth: AuthorizationComponent
    ) {}

    public createAccount<T>(user: UserModel) {
        return this.http.post<T>(this.getCreateAccountUrl, user).catch(
            error => {
              return this.auth.handleError(error);
            }
        )
    }

    public login<T>(loginModel: LoginModel) {
        return this.http.get<T>(this.getLoginUrl, {
            params: {
                username: loginModel.username,
                password: loginModel.password,
            }
        }).catch(
            error => {
                return this.auth.handleError(error);
            }
        )
    }

    public getInTouch<T>(getInTouch: GetInTouch) {
        return this.http.post<T>(this.getGetInTouchUrl, getInTouch)
            .catch(error => {
                return this.auth.handleError(error);
            })
    }
}
