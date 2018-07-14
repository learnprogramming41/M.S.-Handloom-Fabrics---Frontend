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
        return this.orderServiceEndpoint.cancelOrder(orderId);
    }
    
    public updateOrder<T>(order: OrderModel) {
        return this.orderServiceEndpoint.updateOrder(order);
    }
    
    public getOrderByUserId<T>(userId: number) {
        return this.orderServiceEndpoint.getOrderByUserId(userId);
    }
    
    public getOrderCount<T>() {
        return this.orderServiceEndpoint.getOrderCount();
    }
    
    public getAllOrders<T>() {
        return this.orderServiceEndpoint.getAllOrders();
    }
    
    public getOrderByOrderId<T>(orderId: number) {
        return this.orderServiceEndpoint.getOrderByOrderId(orderId);
    }
}