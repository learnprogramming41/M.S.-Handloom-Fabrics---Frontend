import {Component, OnInit} from '@angular/core';
import {Category} from '../../../enum/Enum';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';
import {PashminaModel} from '../../../model/pashmina.model';

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

    private getAllPashmina(pageSize:number, pageNumber:number) {
        this.pashminaService.getAllPashmina(pageSize, pageNumber).subscribe(
            (result: any) => {
                this.pashmina = result;
            }, error => {
                console.log(error);
            }
        )
    }
    
    private getPashminaCount() {
        this.pashminaService.getAllPashminaCount().subscribe(
            (result:number) => {
                this.pageNo = Math.round(result/3) + 1;
            }, error => {
                console.log(error);
            }
        )
    }
    
    public getNextPashmina(num: number) {
        let pageNo = num * 3;
        this.getAllPashmina(3, pageNo);
    }
}
