import { Component, OnInit } from '@angular/core';
import {NavbarService} from './../../../services/navbar/navbar.service';
import {FooterService} from './../../../services/footer/footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private nav: NavbarService, private foot: FooterService) { }

  ngOnInit() {
    this.nav.hide();
    this.foot.hide();
  }

}
