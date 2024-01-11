export function shipment(order) {
    
    const amount = order.amount;

    let shippingToPay = 0;
    if(amount < 100) {
        shippingToPay = 20;
    } else if(amount > 100 && amount < 200) {
        shippingToPay = 12;
    }
    return shippingToPay;
}