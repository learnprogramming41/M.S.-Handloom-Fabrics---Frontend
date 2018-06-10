import {Component, OnInit} from '@angular/core';
import {NavbarService} from './../../../services/navbar/navbar.service';
import {FooterService} from './../../../services/footer/footer.service';
import {LoginService} from '../../../services/login-service/login-service';
import {LoginModel} from '../../../model/login.model';
import {AuthorizationComponent} from '../../authorization.component';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginModel: LoginModel = new LoginModel();
    public wrongCredential: boolean = false;
    public working: boolean = false;

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
        private loginService: LoginService,
        private auth: AuthorizationComponent,
        private router: Router
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
    }

    userLogin() {
        this.working = true;
        this.loginService.login(this.loginModel.username, this.loginModel.password).subscribe(
            result => {
                this.auth.getAccessToken(this.loginModel.username, this.loginModel.password).subscribe(
                    result => {
                        localStorage.setItem("token", JSON.stringify(result));
                        this.working = false;
                        this.router.navigate(['admin/home']);
                    }, error => {
                        this.working = false;
                        this.wrongCredential = true;
                    }
                )
                localStorage.setItem("adminDetails", JSON.stringify(result));
                this.wrongCredential = false;
                
            }, error => {
                this.wrongCredential = true;
                this.working = false;
            }
        )
    }

}
