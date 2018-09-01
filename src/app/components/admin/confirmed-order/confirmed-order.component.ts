import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterService } from '../../../services/footer/footer.service';
import { NavbarService } from '../../../services/navbar/navbar.service';
import { OrderService } from '../../../services/order-service/order-service';
import { OrderModel } from '../../../model/order.model';
import swal from 'sweetalert2';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmed-order',
    templateUrl: './confirmed-order.component.html',
    styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {

    // public orderModel: OrderModel[] = [];
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


    //#region grid
    source: any = {
        datafields: [
            { name: 'orderDate', type: 'date' },
            { name: 'pashminaId', type: 'string', map: 'pashminaId>pashminaName' },
            { name: 'orderBy', type: 'string', map: 'userId>fullName' }
        ],
        id: 'orderId',
        datatype: 'json',
        url: 'http://localhost:8080/mshandloom/admin-api/confirmed-order?access_token=' + JSON.parse(localStorage.getItem("token"))["value"]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Order Date', datafield: 'orderDate', columntype: 'date', filtertype: 'range', cellsformat: 'yyyy-MM-dd', align: 'center' },
        { text: 'Pashmina Name', datafield: 'pashminaId', align: 'center' },
        { text: 'Order By', datafield: 'orderBy', align: 'center' },
        {
            text: 'Action', columntype: 'button', align: 'center', filterable: false, sortable: false, cellsrenderer: (): string => {
                return "Mark As Shipped";
            }, buttonClick: (row: number): void => {
                let data = this.myGrid.getrowdata(row);
                var orderId = data.uid;

                this.markAsShipped(orderId);
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

    // private getAllConfirmedOrders() {
    //     this.orderService.confirmedOrders().subscribe(
    //         (result: any) => {
    //             this.orderModel = result;
    //         }, error => {
    //             console.log(error);
    //         }
    //     )
    // }

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
                this.myGrid.updatebounddata();
                //this.getAllConfirmedOrders();
            }, error => {
                console.log(error);
            }
        )
    }

}
