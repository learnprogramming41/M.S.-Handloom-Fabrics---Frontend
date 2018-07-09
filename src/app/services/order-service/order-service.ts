import {Injectable} from "@angular/core";
import {OrderServiceEndpoint} from "./order-service.endpoint";
import {OrderModel} from "../../model/order.model";

@Injectable()
export class OrderService{
    constructor(
        private orderServiceEndpoint: OrderServiceEndpoint
    ) {}
    
    public orderPashmina<T>(order: OrderModel) {
        return this.orderServiceEndpoint.orderPashmina(order);
    }
    
    public cancelOrder<T>(orderId: number) {
        this.orderServiceEndpoint.cancelOrder(orderId);
    }
    
    public updateOrder<T>(order: OrderModel) {
        this.orderServiceEndpoint.updateOrder(order);
    }
}