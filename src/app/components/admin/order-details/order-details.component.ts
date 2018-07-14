import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order-service/order-service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderModel} from '../../../model/order.model';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

    private orderId: number;
    public orderModel: OrderModel = new OrderModel();

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute,
        private foot: FooterService,
        private nav: NavbarService,
        private router: Router
    ) {}

    ngOnInit() {
        this.foot.hide();
        this.nav.hide();
        
        this.activatedRoute.queryParams.subscribe(params => {
            this.orderId = params['id'];
        });
        
        this.getOrderByOrderId();
    }
    
    private getOrderByOrderId() {
        this.orderService.getOrderByOrderId(this.orderId).subscribe(
            result => {
                this.orderModel = result;
            }, error => {
                console.log(error);
            }
        )
    }
    
    public logout() {
        localStorage.clear();
        this.router.navigate(['admin/login']);
    }

}
