import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {AccountService} from '../../services/account-service/account-service';
import swal from 'sweetalert2';
import {LoginModel} from '../../model/login.model';
import {Router} from '@angular/router';
import {AuthorizationComponent} from '../authorization.component';
import {DataService} from '../../services/data-service/data.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    public userModel: UserModel = new UserModel();
    public loginModel: LoginModel = new LoginModel();

    constructor(
        private accountService: AccountService,
        private router: Router,
        private auth: AuthorizationComponent,
        private data: DataService
    ) {
    }

    ngOnInit() {
    }

    public createAccount() {
        if (this.userModel.fullName || this.userModel.username || this.userModel.email || this.userModel.password) {
            this.accountService.createAccount(this.userModel).subscribe(
                result => {
                    swal(
                        'Success!',
                        'Account created',
                        'success'
                    )
                }, error => {
                    swal({
                        type: 'error',
                        title: 'Error...',
                        text: error
                    })
                }
            )
        } else {
            swal({
                type: 'error',
                title: 'Error...',
                text: 'All fields are required!'
            })
        }
    }

    public login() {
        if (this.loginModel.password || this.loginModel.password) {
            this.accountService.login(this.loginModel).subscribe(
                (result: UserModel) => {
                    swal(
                        'Success!',
                        'Login Successfull',
                        'success'
                    )
                    this.auth.getAccessToken(result.username, result.password).subscribe(
                        results => {
                            localStorage.setItem("userToken", JSON.stringify(results));
                            localStorage.setItem("userDetails", JSON.stringify(result));
                            this.router.navigate(['/home']);
                            this.data.changeMessage(JSON.parse(localStorage.getItem("userDetails")).fullName);
                        }, error => {
                            console.log(error);
                        }
                    )
                }, error => {
                    swal({
                        title: 'Invalid credentials',
                        animation: true,
                        customClass: 'animated tada',
                        type: 'error'
                    })
                }
            )
        } else {
            swal({
                title: 'All fields are required',
                animation: true,
                customClass: 'animated tada',
                type: 'error'
            })
        }
    }

}
