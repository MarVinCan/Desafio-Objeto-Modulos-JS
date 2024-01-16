import Order from "./models/orders.js";
import * as orderService from './services/order-service.js';

const obj1 = [1034, 150.00, 20.0];
const obj2 = [2282, 800.00, 10.0];
const obj3 = [1309, 95.90,  0.0];

const o1 = new Order (obj1[0], obj1[1], obj1[2]);

const total1 = orderService.total(o1);

console.log(`Pedido código ${o1.code}`);
console.log(`Valor total: R$ ${total1.toFixed(2)}`);
console.log(`\n`);

const o2 = new Order (obj2[0], obj2[1], obj2[2]);

const total2 = orderService.total(o2);

console.log(`Pedido código ${o2.code}`);
console.log(`Valor total: R$ ${total2.toFixed(2)}`);
console.log(`\n`);

const o3 = new Order (obj3[0], obj3[1], obj3[2]);

const total3 = orderService.total(o3);

console.log(`Pedido código ${o3.code}`);
console.log(`Valor total: R$ ${total3.toFixed(2)}`);
console.log(`\n`);