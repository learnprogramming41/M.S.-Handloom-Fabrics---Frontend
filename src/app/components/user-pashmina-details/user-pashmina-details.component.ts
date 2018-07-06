import {Component, OnInit} from '@angular/core';
import {PashminaModel} from '../../model/pashmina.model';
import {HomeService} from '../../services/home-service/home-service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-pashmina-details',
    templateUrl: './user-pashmina-details.component.html',
    styleUrls: ['./user-pashmina-details.component.scss']
})
export class UserPashminaDetailsComponent implements OnInit {

    public pashmina: PashminaModel = new PashminaModel();
    private pashminaId = 0;
    public pashminaName: string;

    constructor(
        private homeService: HomeService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.pashminaId = params['id'];
        });
        
        this.getPashminaById();
    }
    
    private getPashminaById() {
        this.homeService.getPashminaById(this.pashminaId).subscribe(
            result => {
                this.pashmina = result;
                this.pashminaName = this.pashmina.images[0].imageName;
            }, error => {
                console.log(error);
            }
        )
    }

}
