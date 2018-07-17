import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {OrderService} from '../../../services/order-service/order-service';
import {OrderModel} from '../../../model/order.model';
import swal from 'sweetalert2';

@Component({
    selector: 'app-confirmed-order',
    templateUrl: './confirmed-order.component.html',
    styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {

    public orderModel: OrderModel[] = [];

    constructor(
        private footer: FooterService,
        private nav: NavbarService,
        private orderService: OrderService
    ) {}

    ngOnInit() {
        this.footer.hide();
        this.nav.hide();

        this.getAllConfirmedOrders();
    }

    private getAllConfirmedOrders() {
        this.orderService.confirmedOrders().subscribe(
            (result: any) => {
                this.orderModel = result;
            }, error => {
                console.log(error);
            }
        )
    }

    public markAsShipped(orderId: number) {
        swal("Requesting Process");
        swal.showLoading();
        this.orderService.orderShipped(orderId).subscribe(
            result => {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Marked as shipped',
                    showConfirmButton: false,
                    timer: 2000
                })
                
                this.getAllConfirmedOrders();
            }, error => {
                console.log(error);
            }
        )
    }

}
