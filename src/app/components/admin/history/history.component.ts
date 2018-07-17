import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {OrderService} from '../../../services/order-service/order-service';
import {OrderModel} from '../../../model/order.model';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    public orderModel: OrderModel[] = [];

    constructor(
        private footer: FooterService,
        private nav: NavbarService,
        private orderService: OrderService
    ) {}

    ngOnInit() {
        this.footer.hide();
        this.nav.hide();
        
        this.getAllHistory();
    }
    
    private getAllHistory() {
        this.orderService.history().subscribe(
            (result: any) => {
                this.orderModel = result;
            }, error => {
                console.log(error);
            }
        )
    }
    
    public deleteHistory() {
        alert("hahaha");
    }

}
