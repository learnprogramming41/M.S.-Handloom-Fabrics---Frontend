import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {FooterService} from '../../../services/footer/footer.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
    }

}
