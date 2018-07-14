import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order-service/order-service';
import {ActivatedRoute} from '@angular/router';
import {OrderModel} from '../../model/order.model';
import swal from 'sweetalert2';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    private userId: number;
    public orderModel: OrderModel[] = [];
    public imageUrl: string;
    public pashminaName: string;

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.userId = params['userId'];
        });

        this.getOrderByUserId();
    }

    private getOrderByUserId() {
        this.orderService.getOrderByUserId(this.userId).subscribe(
            (result: any) => {
                this.orderModel = result;
            }, error => {
                console.log(error);
            }
        )
    }

    private deleteOrder(orderId: number) {
        this.orderService.cancelOrder(orderId).subscribe(
            resul => {
                this.getOrderByUserId();
                swal(
                    'Success!',
                    'Card removed successfully',
                    'success'
                )
            }, error => {
                console.log(error)
            }
        )
    }

    public removeCart(orderId: number) {
        swal({
            title: 'Are you sure?',
            text: "Are you sure want to remove this item from cart?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.value) {
                this.deleteOrder(orderId);
            }
        })
    }

}
