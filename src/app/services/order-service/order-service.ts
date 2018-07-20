import {Injectable} from "@angular/core";
import {OrderServiceEndpoint} from "./order-service.endpoint";
import {OrderModel} from "../../model/order.model";

@Injectable()
export class OrderService{
    constructor(
        private orderServiceEndpoint: OrderServiceEndpoint
    ) {}
    
    public orderPashmina<T>(order: OrderModel) {
        return this.orderServiceEndpoint.orderPashmina<OrderModel>(order);
    }
    
    public cancelOrder<T>(orderId: number) {
        return this.orderServiceEndpoint.cancelOrder<OrderModel>(orderId);
    }
    
    public updateOrder<T>(order: OrderModel) {
        return this.orderServiceEndpoint.updateOrder<OrderModel>(order);
    }
    
    public getOrderByUserId<T>(userId: number) {
        return this.orderServiceEndpoint.getOrderByUserId<OrderModel>(userId);
    }
    
    public getOrderCount<T>() {
        return this.orderServiceEndpoint.getOrderCount<OrderModel>();
    }
    
    public getAllOrders<T>() {
        return this.orderServiceEndpoint.getAllOrders<OrderModel>();
    }
    
    public getOrderByOrderId<T>(orderId: number) {
        return this.orderServiceEndpoint.getOrderByOrderId<OrderModel>(orderId);
    }
    
    public confirmOrder<T>(orderId: number) {
        return this.orderServiceEndpoint.confirmOrder<OrderModel>(orderId);
    }
    
    public confirmedOrders<T>() {
        return this.orderServiceEndpoint.confirmedOrders<OrderModel>();
    }
    
    public history<T>() {
        return this.orderServiceEndpoint.history<OrderModel>();
    }
    
    public orderShipped<T>(orderId: number) {
        return this.orderServiceEndpoint.orderShipped<OrderModel>(orderId);
    }
    
    public deleteHistory<T>(orderId: number) {
        return this.orderServiceEndpoint.deleteHistory<OrderModel>(orderId);
    }
}