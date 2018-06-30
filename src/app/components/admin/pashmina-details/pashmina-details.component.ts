import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-pashmina-details',
    templateUrl: './pashmina-details.component.html',
    styleUrls: ['./pashmina-details.component.scss']
})
export class PashminaDetailsComponent implements OnInit {

    constructor(
        private nav: NavbarService,
        private footer: FooterService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.footer.hide();


        this.activatedRoute.queryParams.subscribe(params => {
            let date = params['id'];
            console.log(date); // Print the parameter to the console. 
        });


    }

}
