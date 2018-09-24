import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { AuthorizationComponent } from "../../components/authorization.component";
import { OrderModel } from "../../model/order.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderServiceEndpoint {

    private readonly orderPashminaUrl: string = "/api/order-pashmina";
    private readonly guestOrderUrl: string = "/guest-order";
    private readonly cancelOrderUrl: string = "/api/cancel-order/";
    private readonly updateOrderUrl: string = "/api/update-order";
    private readonly orderByUserIdUrl: string = "/api/get-order-by-user/";
    private readonly orderCountUrl: string = "/admin-api/get-order-count";
    private readonly allOrderUrl: string = "/admin-api/get-all-order";
    private readonly orderByOrderIdUrl: string = "/admin-api/get-order-by-order-id/";
    private readonly confirmOrderUrl: string = "/admin-api/confirm-order/";
    // private readonly confirmedOrdresUrl: string = "/admin-api/confirmed-order";
    // private readonly historyUrl: string = "/admin-api/history";
    private readonly shippedOrdersUrl: string = "/admin-api/shipped-order/";
    private readonly deleteHistoryUrl: string = "/admin-api/delete-history/";

    constructor(private http: HttpClient, private auth: AuthorizationComponent) {

    }

    private get getOrderPashminaUrl() { return this.auth.getBaseUrl + this.orderPashminaUrl }
    private get getGuestOrderUrl() { return this.auth.getBaseUrl + this.guestOrderUrl }
    private get getCancelOrderUrl() { return this.auth.getBaseUrl + this.cancelOrderUrl }
    private get getUpdateOrderUrl() { return this.auth.getBaseUrl + this.updateOrderUrl }
    private get getOrderByUserUrl() { return this.auth.getBaseUrl + this.orderByUserIdUrl }
    private get getOrderCountUrl() { return this.auth.getBaseUrl + this.orderCountUrl }
    private get getAllOrderUrl() { return this.auth.getBaseUrl + this.allOrderUrl }
    private get getOrderByOrderIdUrl() { return this.auth.getBaseUrl + this.orderByOrderIdUrl }
    private get getOrderConfirmUrl() { return this.auth.getBaseUrl + this.confirmOrderUrl }
    // private get getConfirmedOrdersUrl() { return this.auth.getBaseUrl + this.confirmedOrdresUrl }
    // private get getHistoryUrl() { return this.auth.getBaseUrl + this.historyUrl }
    private get getShippedOrdersUrl() { return this.auth.getBaseUrl + this.shippedOrdersUrl }
    private get getDeleteHistoryUrl() { return this.auth.getBaseUrl + this.deleteHistoryUrl }

    public orderPashmina<T>(order: OrderModel) {
        return this.http.post<T>(this.getOrderPashminaUrl, order, {
            params: {
                access_token: JSON.parse(localStorage.getItem("userToken"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    public orderAsGuest(order: OrderModel) {
        return this.http.post(this.getGuestOrderUrl, order).catch(error => {
            throw new Observable(error);
        })
    }

    public cancelOrder<T>(orderId: number) {
        return this.http.delete<T>(this.getCancelOrderUrl + "" + orderId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("userToken"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    public updateOrder<T>(order: OrderModel) {
        return this.http.put<T>(this.getUpdateOrderUrl, order, {
            params: {
                access_token: JSON.parse(localStorage.getItem("userToken"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    public getOrderByUserId<T>(userId: number) {
        return this.http.get<T>(this.getOrderByUserUrl + "" + userId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("userToken"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    public getOrderCount<T>() {
        return this.http.get<T>(this.getOrderCountUrl, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    public getAllOrders<T>() {
        // let headers = new HttpHeaders({
        //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))["value"]
        // });

        return this.http.get<T>(this.getAllOrderUrl, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);
        })
    }

    public getOrderByOrderId<T>(orderId: number) {
        return this.http.get<T>(this.getOrderByOrderIdUrl + "" + orderId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);
        })
    }

    public confirmOrder<T>(orderId: number) {
        return this.http.get<T>(this.getOrderConfirmUrl + "" + orderId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

    // public confirmedOrders<T>() {
    //     return this.http.get<T>(this.getConfirmedOrdersUrl, {
    //         params: {
    //             access_token: JSON.parse(localStorage.getItem("token"))["value"]
    //         }
    //     }).catch(error => {
    //         throw new Observable(error);
    //     })
    // }

    // public history<T>() {
    //     return this.http.get<T>(this.getHistoryUrl, {
    //         params: {
    //             access_token: JSON.parse(localStorage.getItem("token"))["value"]
    //         }
    //     }).catch(error => {
    //         throw new Observable(error);
    //     })
    // }

    public orderShipped<T>(orderId: number) {
        return this.http.get<T>(this.getShippedOrdersUrl + "" + orderId + "?access_token=" + JSON.parse(localStorage.getItem("token"))["value"]
        ).catch(error => {
            throw new Observable(error);
        })
    }

    public deleteHistory<T>(orderId: number) {
        return this.http.delete<T>(this.getDeleteHistoryUrl + orderId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

}