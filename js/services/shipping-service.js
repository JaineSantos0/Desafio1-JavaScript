export function shipment(order) {

    let shippingToPay = 0;
    if(order.basic < 100) {
        shippingToPay = 20;
    } else if(order.basic > 100 && order.basic < 200) {
        shippingToPay = 12;
    }
    return shippingToPay;
}