import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {LoginService} from '../../../services/login-service/login-service';
import {Observable} from 'rxjs/Observable';
import {ForgotPasswordModel} from '../../../model/forgot-password.model';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    public email: string;
    public showAlert: boolean = false;
    public showSuccessAlert: boolean = false;
    public working: boolean = false;
    public forgotPasswordModel: ForgotPasswordModel = new ForgotPasswordModel();

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
        private login: LoginService,
        private router: Router
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
    }

    public checkEmail() {
        this.working = true;
        this.login.checkEmail(this.email).subscribe(
            result => {
                this.showAlert = false;
                this.sendEmail();
            }, error => {
                this.showAlert = true;
                this.working = false;
            }
        )
    }

    private close() {
        this.showAlert = false;
    }

    private closeSuccess() {
        this.showSuccessAlert = false;
    }

    private sendEmail() {
        this.login.sendEmail(this.email).subscribe(
            result => {
                this.showSuccessAlert = true;
                this.working = false;
                swal(
                    'Success!',
                    'The email has been send.<br> Please open your mail to recover password.',
                    'success'
                )
            }, error => {
                console.log(new Observable(error));
            }
        )
    }

}
