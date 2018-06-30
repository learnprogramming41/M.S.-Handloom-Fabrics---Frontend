import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {ActivatedRoute} from '@angular/router';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';
import {PashminaModel} from '../../../model/pashmina.model';

@Component({
    selector: 'app-pashmina-details',
    templateUrl: './pashmina-details.component.html',
    styleUrls: ['./pashmina-details.component.scss']
})
export class PashminaDetailsComponent implements OnInit {

    private pashminaId: number;
    public pashmina: PashminaModel[] = [];

    constructor(
        private nav: NavbarService,
        private footer: FooterService,
        private activatedRoute: ActivatedRoute,
        private pashminaService: PashminaService
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.footer.hide();


        this.activatedRoute.queryParams.subscribe(params => {
            this.pashminaId = params['id'];
        });

        this.getPashminaById(this.pashminaId);
    }
    
    public getPashminaById(pashminaId: number) {
        this.pashminaService.getPashminaById(pashminaId).subscribe(
            (result: any) => {
                this.pashmina = result;
                console.log(this.pashmina);
            }, error => {
                console.log(error);
            }
        )
    }

}
