import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {LoginService} from '../../../services/login-service/login-service';
import {Observable} from 'rxjs/Observable';
import swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    
    public username: string;
    public info: string;
    public password: string;
    public conPassword: string;
    public showInfo: boolean = false;
    public working: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavbarService,
    private foot: FooterService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
      this.route.queryParams.subscribe((params: Params) => {
        this.username = params.username;
      });
      
      this.nav.hide();
      this.foot.hide();
  }

    private changePassword() {
        this.working = true;
        if (this.password === this.conPassword) {
            this.showInfo = false;
            this.updatePassword();
        } else {
            this.info = "Password mismatch";
            this.showInfo = true;
        }
        
    }
    
    private close() {
        this.showInfo = false;
    }
    
    private updatePassword() {
        this.loginService.changePassword(this.password, this.username).subscribe(
            result => {
                this.working = false;
                swal(
                    'Success!',
                    'Password Updated',
                    'success'
                )
            }, error => {
                this.working = false;
                console.log(new Observable(error));
            }
        )
    }

}
