import * as shippingService from './shipping-service.js';

export function total(order) {

    const shipping = shippingService.shipment(order);

    return order.basic + shipping - order.discount ;
}