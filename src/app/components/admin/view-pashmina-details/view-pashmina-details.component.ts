import {Component, OnInit} from '@angular/core';
import {Category} from '../../../enum/Enum';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';

@Component({
    selector: 'app-view-pashmina-details',
    templateUrl: './view-pashmina-details.component.html',
    styleUrls: ['./view-pashmina-details.component.scss']
})
export class ViewPashminaDetailsComponent implements OnInit {

    public category: any[] = [];

    constructor(
        private pashminaService: PashminaService
    ) {}

    ngOnInit() {
        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }
        
        this.getAllPashmina();
        
    }

    private getAllPashmina() {
        this.pashminaService.getAllPashmina().subscribe(
            result => {
                console.log(result);
            }, error => {
                console.log(error);
            }
        )
    }
}
