import * as shippingService from './shipping-service.js';

export function total(order) {

    const shipping = shippingService.shipment(order);
    const totalOrder = order.basic + shipping - (order.basic * (order.discount/100));

    return totalOrder;
}