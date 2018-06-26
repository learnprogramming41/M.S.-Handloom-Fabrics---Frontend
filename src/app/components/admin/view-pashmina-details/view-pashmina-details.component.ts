import {Component, OnInit} from '@angular/core';
import {Category} from '../../../enum/Enum';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';
import {PashminaModel} from '../../../model/pashmina.model';
import swal from 'sweetalert2';

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

    constructor(
        private pashminaService: PashminaService
    ) {}

    ngOnInit() {
        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }

        this.getAllPashmina(3, 0);
        this.getPashminaCount();
    }

    private getAllPashmina(pageSize: number, pageNumber: number) {
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
                this.pageNo = Math.round(result / 3) + 1;
            }, error => {
                console.log(error);
            }
        )
    }

    public getNextPashmina(num?: number) {
        this.loading = true;
        let pageNo = num * 3;
        if (num) {
            this.getAllPashmina(3, pageNo);
        } else {
            pageNo = + 3;
            this.getAllPashmina(3, pageNo);
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.pashminaService.deletePashmina(pashminaId).subscribe(
                    result => {
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
}
