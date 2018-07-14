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
    
    constructor(private http: HttpClient, private auth: AuthorizationComponent) {
        
    }
    
    private get getOrderPashminaUrl() {return this.auth.getBaseUrl + this.orderPashminaUrl}
    private get getCancelOrderUrl() {return this.auth.getBaseUrl + this.cancelOrderUrl}
    private get getUpdateOrderUrl() {return this.auth.getBaseUrl + this.updateOrderUrl}
    private get getOrderByUserUrl() {return this.auth.getBaseUrl + this.orderByUserIdUrl}
    
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
}