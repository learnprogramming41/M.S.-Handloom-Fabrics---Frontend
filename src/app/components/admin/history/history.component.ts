import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterService } from '../../../services/footer/footer.service';
import { NavbarService } from '../../../services/navbar/navbar.service';
import { OrderService } from '../../../services/order-service/order-service';
import { OrderModel } from '../../../model/order.model';
import swal from 'sweetalert2';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { Router } from '@angular/router';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    public orderModel: OrderModel[] = [];
    @ViewChild("myGrid") myGrid: jqxGridComponent;

    constructor(
        private footer: FooterService,
        private nav: NavbarService,
        private orderService: OrderService,
        private router: Router
    ) { }

    ngOnInit() {
        this.footer.hide();
        this.nav.hide();
    }

    // private getAllHistory() {
    //     this.orderService.history().subscribe(
    //         (result: any) => {
    //             this.orderModel = result;
    //             console.log(this.orderModel);
    //         }, error => {
    //             console.log(error);
    //         }
    //     )
    // }


    //#region grid
    source: any = {
        datafields: [
            { name: 'orderDate', type: 'date' },
            { name: 'shippedDate', type: 'date' },
            { name: 'pashminaId', type: 'string', map: 'pashminaId>pashminaName' },
            { name: 'price', type: 'string', map: 'pashminaId>price' },
            { name: 'quantity', type: 'number' },
            { name: 'shippingAddress', type: 'number' },
            { name: 'orderBy', type: 'string', map: 'userId>fullName' }
        ],
        id: 'orderId',
        datatype: 'json',
        url: 'http://localhost:8080/mshandloom/admin-api/history?access_token=' + JSON.parse(localStorage.getItem("token"))["value"]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Order Date', datafield: 'orderDate', columntype: 'date', filtertype: 'range', cellsformat: 'yyyy-MM-dd', align: 'center' },
        { text: 'Shipped Date', datafield: 'shippedDate', columntype: 'date', filtertype: 'range', cellsformat: 'yyyy-MM-dd', align: 'center' },
        { text: 'Pashmina Name', datafield: 'pashminaId', align: 'center' },
        { text: 'Order By', datafield: 'orderBy', align: 'center' },
        { text: 'Price', datafield: 'price', align: 'center', filterable: false },
        { text: 'Quantity', datafield: 'quantity', align: 'center', filterable: false },
        { text: 'Shipping Address', datafield: 'shippingAddress', align: 'center' },
        {
            text: 'Action', columntype: 'button', align: 'center', filterable: false, sortable: false, cellsrenderer: (): string => {
                return "Delete";
            }, buttonClick: (row: number): void => {
                let data = this.myGrid.getrowdata(row);
                var orderId = data.uid;
                this.deleteHistory(orderId);
            }
        },
        {
            text: 'Action', columntype: 'button', align: 'center', filterable: false, sortable: false, cellsrenderer: (): string => {
                return "View";
            }, buttonClick: (row: number): void => {
                let data = this.myGrid.getrowdata(row);
                var orderId = data.uid;
                this.router.navigate(['/admin/order-details'], { queryParams: { id: orderId } });
            }
        },
    ]

    //#region buttons of first grid
    rendertoolbar = (toolbar: any): void => {
        let container = document.createElement('div');
        container.style.margin = '5px';

        let buttonOneContainer = document.createElement('div');
        let buttonTwoContainer = document.createElement('div');

        buttonOneContainer.id = 'buttonOneContainer';
        buttonTwoContainer.id = 'buttonTwoContainer';

        buttonOneContainer.style.cssText = 'float: left';
        buttonTwoContainer.style.cssText = 'float: left; margin-left: 5px';

        container.appendChild(buttonOneContainer);
        container.appendChild(buttonTwoContainer);

        toolbar[0].appendChild(container);

        let addButton = jqwidgets.createInstance('#buttonOneContainer', 'jqxButton', { width: 105, value: 'ADD' });
        let deleteButton = jqwidgets.createInstance('#buttonTwoContainer', 'jqxButton', { width: 105, value: 'Reload' })

        addButton.addEventHandler('click', () => {
            alert("add button clicked");
        })

        deleteButton.addEventHandler('click', () => {
            this.myGrid.updatebounddata();
        })

    }
    //#endregion

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
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'The history has been removed successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.myGrid.updatebounddata();
                    }, error => {
                        console.log(error);
                    }
                )
            }
        })
    }

}
