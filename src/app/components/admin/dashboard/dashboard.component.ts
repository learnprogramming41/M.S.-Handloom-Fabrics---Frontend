import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {FooterService} from '../../../services/footer/footer.service';
import {OrderService} from '../../../services/order-service/order-service';
import {OrderModel} from '../../../model/order.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public orderCount: number;
    public orderModel: OrderModel[] = [];

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
        private orderService: OrderService
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
        this.getOrderCount();
        this.getAllOrders();
    }

    private getOrderCount() {
        this.orderService.getOrderCount().subscribe(
            (result: any) => {
                this.orderCount = result;
            }, error => {
                console.log(error);
            }
        )
    }
    
    private getAllOrders() {
        this.orderService.getAllOrders().subscribe(
            (result: any) => {
                this.orderModel = result;
            }, error => {
                console.log(error);
            }
        )
    }

}
