import { Component, OnInit } from '@angular/core';
import {NavbarService} from './../../../services/navbar/navbar.service';
import {FooterService} from './../../../services/footer/footer.service';
import { LoginService } from '../../../services/login-service/login-service';
import { LoginModel } from '../../../model/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginModel = new LoginModel();

  constructor(
    private nav: NavbarService, 
    private foot: FooterService, 
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.nav.hide();
    this.foot.hide();
  }

  userLogin() {
    this.loginService.login(this.loginModel.username, this.loginModel.password).subscribe(
      result => {
        console.log("logged in");
      }, error => {
        console.log(error);
      }
    )
  }

}
