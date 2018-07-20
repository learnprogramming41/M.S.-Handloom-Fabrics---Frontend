import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {OrderService} from '../../../services/order-service/order-service';
import {OrderModel} from '../../../model/order.model';
import swal from 'sweetalert2';

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
                console.log(this.orderModel);
            }, error => {
                console.log(error);
            }
        )
    }

    public deleteHistory(orderId: number) {
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
                swal("Deleting history");
                swal.showLoading();
                this.orderService.deleteHistory(orderId).subscribe(
                    result => {
                        this.getAllHistory();
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'The history has been removed successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }, error => {
                        console.log(error);
                    }
                )
            }
        })
    }

}
