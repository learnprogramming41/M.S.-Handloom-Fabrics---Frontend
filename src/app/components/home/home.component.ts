import {Component, OnInit} from '@angular/core';
import {PashminaModel} from '../../model/pashmina.model';
import {HomeService} from '../../services/home-service/home-service';
import {Category} from "../../enum/Enum";
import {FooterService} from "../../services/footer/footer.service";
import {NavbarService} from "../../services/navbar/navbar.service";
import {DataService} from '../../services/data-service/data.service';

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
    public imageUrlArray: Array<string> = new Array();
    public showPrevious: boolean = true;
    public showNext: boolean = true;

    constructor(
        private homeService: HomeService,
        private navService: NavbarService,
        private footerService: FooterService,
        private data: DataService
    ) {
        this.imageUrlArray.push("../../../assets/images/girl1.jpg");
        this.imageUrlArray.push("../../../assets/images/girl2.jpg");
        this.imageUrlArray.push("../../../assets/images/girl3.jpg");
        this.imageUrlArray.push("../../../assets/images/girl4.jpg");
        this.imageUrlArray.push("../../../assets/images/girl5.jpg");
    }

    ngOnInit() {
        this.navService.show();
        this.footerService.show();
        this.showPrevious = false;

        this.getAllPashmina(12, 0);

        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }
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
        if (category === "All") {
            this.getAllPashmina(12, 0);
        } else {
            this.homeService.getPashminaByCategory(category, 12, 0).subscribe(
                (result: any) => {
                    this.pashmina = result;
                    this.loading = false;
                }, error => {
                    console.log(error);
                }
            )
        }
    }

    public next() {
        this.showPrevious = true;
        this.page++;

        if(this.pashmina.length <= 12) {
            this.showNext = false;
        }

        this.getAllPashmina(12, this.page * 12);
    }

    public previous() {
        this.showNext = true;
        if(this.page == 1) {
            this.showPrevious = false;
        }
        console.log(this.page);
        if (this.page != 0 || this.page > 0) {
            this.page--;
            this.getAllPashmina(12, this.page * 12);
        }
    }

    public scrollDown() {
        window.scrollTo(0, 700);
    }

}
