import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthorizationComponent} from "../../components/authorization.component";
import {OrderModel} from "../../model/order.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderServiceEndpoint{
    
    private readonly orderPashminaUrl: string = "/api/order-pashmina";
    private readonly cancelOrderUrl: string = "/api/cancel-order/";
    private readonly updateOrderUrl: string = "/api/update-order";
    private readonly orderByUserIdUrl: string = "/api/get-order-by-user/";
    private readonly orderCountUrl: string = "/admin-api/get-order-count";
    private readonly allOrderUrl: string = "/admin-api/get-all-order";
    private readonly orderByOrderIdUrl: string = "/admin-api/get-order-by-order-id/";
    private readonly confirmOrderUrl: string = "/admin-api/confirm-order/";
    
    constructor(private http: HttpClient, private auth: AuthorizationComponent) {
        
    }
    
    private get getOrderPashminaUrl() {return this.auth.getBaseUrl + this.orderPashminaUrl}
    private get getCancelOrderUrl() {return this.auth.getBaseUrl + this.cancelOrderUrl}
    private get getUpdateOrderUrl() {return this.auth.getBaseUrl + this.updateOrderUrl}
    private get getOrderByUserUrl() {return this.auth.getBaseUrl + this.orderByUserIdUrl}
    private get getOrderCountUrl() {return this.auth.getBaseUrl + this.orderCountUrl}
    private get getAllOrderUrl() {return this.auth.getBaseUrl + this.allOrderUrl}
    private get getOrderByOrderIdUrl() {return this.auth.getBaseUrl + this.orderByOrderIdUrl}
    private get getOrderConfirmUrl() {return this.auth.getBaseUrl + this.confirmOrderUrl}
    
    public orderPashmina<T>(order: OrderModel) {
        return this.http.post<T>(this.getOrderPashminaUrl, order, {
            params: {
                access_token: JSON.parse(localStorage.getItem("userToken"))["value"]
            }
        }).catch(error => {
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
        return this.http.get<T>(this.getAllOrderUrl, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public getOrderByOrderId<T>(orderId: number) {
        return this.http.get<T>(this.getOrderByOrderIdUrl + "" + orderId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
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
}