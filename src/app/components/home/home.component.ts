import {Component, OnInit} from '@angular/core';
import {PashminaModel} from '../../model/pashmina.model';
import {HomeService} from '../../services/home-service/home-service';
import {Category} from "../../enum/Enum";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public pashmina: PashminaModel[] = [];
    public category: any[] = [];
    public loading: boolean = false;
    private page: number = 0;
    public girlImage: string;

    constructor(
        private homeService: HomeService,
    ) {
    }

    ngOnInit() {
        this.girlImage = "../../../assets/images/girl1.jpg";

        this.getAllPashmina(12, 0);

        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }

        let a: number = 1;
        setInterval(() => {
            a++;
            if (a === 4) {
                a = 1;
            }
            if (a === 1) {
                this.girlImage = "../../../assets/images/girl1.jpg";
            } else if (a === 2) {
                this.girlImage = "../../../assets/images/girl2.jpg";
            } else if (a === 3) {
                this.girlImage = "../../../assets/images/girl3.jpg";
            }
        }, 7000);
    }

    private getAllPashmina(pageSize: number, pageNumber: number) {
        this.loading = true;
        this.homeService.getPashmina(pageSize, pageNumber).subscribe(
            (result: any) => {
                this.pashmina = result;
                this.loading = false;
            }, error => {
                console.log(error);
            }
        )
    }

    public getPashminaByCategory(category: string) {
        this.pashmina = null;
        this.loading = true;
        this.homeService.getPashminaByCategory(category, 12, 0).subscribe(
            (result: any) => {
                this.pashmina = result;
                this.loading = false;
            }, error => {
                console.log(error);
            }
        )
    }

    public next() {
        this.page++;
        this.getAllPashmina(12, this.page * 12);
    }

    public previous() {
        if (this.page != 0 || this.page > 0) {
            this.page--;
            this.getAllPashmina(12, this.page * 12);
        }
    }


}
