import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../services/navbar/navbar.service';
import {FooterService} from '../../services/footer/footer.service';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
    }

}
