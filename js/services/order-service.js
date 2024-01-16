import * as shippingService from "./shipping-service.js";

export function total (order){
    
    const descount = order.basic * order.discount / 100.00;
    const ship = shippingService.shipment(order);
    return (order.basic - descount) + ship;
}