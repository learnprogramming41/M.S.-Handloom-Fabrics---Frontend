import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from '../../../services/navbar/navbar.service';
import { FooterService } from '../../../services/footer/footer.service';
import { OrderService } from '../../../services/order-service/order-service';
import { OrderModel } from '../../../model/order.model';
import { AuthorizationComponent } from '../../authorization.component';
import { HttpClient } from '@angular/common/http';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChild("myGrid") myGrid: jqxGridComponent;
    
    private apiUrl: string;

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
        private orderService: OrderService,
        private auth: AuthorizationComponent,
        private http: HttpClient,
        private router: Router           
    ) {

        this.apiUrl = this.auth.getBaseUrl;
    }

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();
    }

    //#region grid
  source: any = {
    datafields: [
      { name: 'orderDate', type: 'date' },
      { name: 'pashminaId', type: 'string', map: 'pashminaId>pashminaName' },
      { name: 'price', type: 'string', map:'pashminaId>price' },
      { name: 'quantity', type: 'number' },
      { name: 'shippingAddress', type: 'number'},
      { name: 'orderBy', type: 'string', map: 'userId>fullName'}
    ],
    id: 'orderId',
    datatype: 'json',
    url: 'http://localhost:8080/mshandloom/admin-api/get-all-order?access_token='+JSON.parse(localStorage.getItem("token"))["value"]
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: 'Order Date', datafield: 'orderDate', columntype: 'date',filtertype: 'range', cellsformat: 'yyyy-MM-dd', align: 'center' },
    { text: 'Pashmina Name', datafield: 'pashminaId', align: 'center' },
    { text: 'Order By', datafield: 'orderBy', align: 'center' },
    { text: 'Price', datafield: 'price', align: 'center', filterable: false },
    { text: 'Quantity', datafield: 'quantity', align: 'center', filterable: false },
    { text: 'Shipping Address', datafield: 'shippingAddress', align: 'center' },
    {
      text: 'Action', columntype: 'button', align: 'center', filterable: false, sortable: false, cellsrenderer: (): string => {
        return "View";
      }, buttonClick: (row: number): void => {
        let data = this.myGrid.getrowdata(row);
        var orderId = data.uid;
        this.router.navigate(['/admin/order-details'], { queryParams: { id: orderId } });
      }
    }
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
    let deleteButton = jqwidgets.createInstance('#buttonTwoContainer', 'jqxButton', { width: 105, value: 'REMOVE' })

    addButton.addEventHandler('click', () => {
      alert("add button clicked");
    })

    deleteButton.addEventHandler('click', () => {
      alert("delete button clicked");
    })

  }
  //#endregion

}
