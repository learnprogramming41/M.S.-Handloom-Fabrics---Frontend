import {Component, OnInit} from '@angular/core';
import {Category} from '../../../enum/Enum';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';
import {PashminaModel} from '../../../model/pashmina.model';
import swal from 'sweetalert2';
import {HomeService} from '../../../services/home-service/home-service';

@Component({
    selector: 'app-view-pashmina-details',
    templateUrl: './view-pashmina-details.component.html',
    styleUrls: ['./view-pashmina-details.component.scss']
})
export class ViewPashminaDetailsComponent implements OnInit {

    public category: any[] = [];
    public pashmina: PashminaModel[] = [];
    public pageNo: number = 0;
    public arr = Array;
    public loading: boolean = true;
    public top: boolean = false;
    public searchText: string;
    public searchButton: boolean;
    public noResult: boolean = false;

    constructor(
        private pashminaService: PashminaService,
        private homeService: HomeService
    ) {}

    ngOnInit() {
        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }

        this.getAllPashmina(12, 0);
        this.getPashminaCount();
    }

    private getAllPashmina(pageSize: number, pageNumber: number) {
        this.noResult = false;
        this.pashminaService.getAllPashmina(pageSize, pageNumber).subscribe(
            (result: any) => {
                this.pashmina = result;
                this.loading = false;
            }, error => {
                console.log(error);
            }
        )
    }

    private getPashminaCount() {
        this.pashminaService.getAllPashminaCount().subscribe(
            (result: number) => {
                this.pageNo = Math.round(result / 12) + 1;
            }, error => {
                console.log(error);
            }
        )
    }

    public getNextPashmina(num?: number) {
        this.loading = true;
        let pageNo = num * 12;
        if (num) {
            this.getAllPashmina(12, pageNo);
        } else {
            pageNo = + 12;
            this.getAllPashmina(12, 0);
        }
    }

    public getPreviousPashmina() {

    }

    public deletePashmina(pashminaId: number) {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#12085d6',
            cancelButtonColor: '#d1212',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                swal("Please wait deleting pashmina");
                swal.showLoading();
                this.pashminaService.deletePashmina(pashminaId).subscribe(
                    result => {
                        this.getAllPashmina(12, 0);
                        swal(
                            'Deleted!',
                            'Pashmina has been deleted.',
                            'success'
                        )
                    }, error => {
                        console.log(error)
                    }
                )
            }
        })
    }

    onChange(category: string) {
        this.loading = true;
        this.noResult = false;
        if(category === "All") {
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
    
    searchPashmina() {
        this.searchButton = false;
        this.loading = true;
        this.noResult = false;
        this.pashminaService.searchPashmina(this.searchText).subscribe(
            (result: any) => {
                this.pashmina = result;
                if(!result.length) {
                    this.noResult = true;
                }
                this.loading = false;
            }, error => {
                console.log(error);
            }
        )
    }
    
    cancelSearch() {
        this.searchButton = true;
        this.loading = true;
        this.searchText = "";
        this.getAllPashmina(12, 0);
    }
    
    searchTextChanged() {
        this.searchButton = true;
        if (!this.searchText) {
            this.loading = true;
            this.getAllPashmina(12, 0);
        }
    }
}
