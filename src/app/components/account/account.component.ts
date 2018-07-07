import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {AccountService} from '../../services/account-service/account-service';
import swal from 'sweetalert2';
import {LoginModel} from '../../model/login.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    public usreModel: UserModel = new UserModel();
    public loginModel: LoginModel = new LoginModel();

    constructor(
        private accountService: AccountService,
        private router: Router,
    ) {}

    ngOnInit() {
    }

    public createAccount() {
        this.accountService.createAccount(this.usreModel).subscribe(
            result => {
                swal(
                    'Success!',
                    'Account created',
                    'success'
                )
            }, error => {
                console.log(error);
            }
        )
    }
    
    public login() {
        this.accountService.login(this.loginModel).subscribe(
            result => {
                swal(
                    'Success!',
                    'Login Successfull',
                    'success'
                )
                this.router.navigate(['/home']);
            }, error => {
                console.log(error);
            }
        )
    }

}
