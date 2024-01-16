export function shipment(order){
    if(order.basic < 100){
        return 20.00;
    } else if (order.basic < 200){
        return 12.00;

    }else {
        return 0.00;
    }
}