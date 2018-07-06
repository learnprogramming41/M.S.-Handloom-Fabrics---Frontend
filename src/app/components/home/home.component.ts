import {Component, OnInit} from '@angular/core';
import {PashminaModel} from '../../model/pashmina.model';
import {HomeService} from '../../services/home-service/home-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public pashmina: PashminaModel[] = [];

    constructor(
        private homeService: HomeService,
    ) {}

    ngOnInit() {
        this.getAllPashmina(12, 0);
    }

    private getAllPashmina(pageSize: number, pageNumber: number) {
        this.homeService.getPashmina(pageSize, pageNumber).subscribe(
            (result: any) => {
                this.pashmina = result;
            }, error => {
                console.log(error);
            }
        )
    }

}
