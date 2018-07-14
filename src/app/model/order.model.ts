import {PashminaModel} from "./pashmina.model";
import {UserModel} from "./user.model";

export class OrderModel {
    constructor(
        public orderId?: number,
        public orderDate?: Date,
        public soldOutStatus?: boolean,
        public shippedDate?: Date,
        public quantity?: number,
        public pashminaId?: PashminaModel,
        public userId?: UserModel[],
        public shippingAddress?: string,
        public contact?: string
    ) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.soldOutStatus = soldOutStatus;
        this.shippedDate = shippedDate;
        this.quantity = quantity;
        this.pashminaId = pashminaId;
        if (userId) {
            this.userId = userId;
        } else {
            this.userId = new Array<UserModel>();
        }

        this.shippingAddress = shippingAddress;
        this.contact = contact;
    }
}
