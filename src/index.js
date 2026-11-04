import { calculateTotal } from './budget.js';

const unitPrice = 19.90;
const quantity = 3;
const total = calculateTotal(unitPrice, quantity);

console.log('Budget Calculator');
console.log(`Unit price: ${unitPrice.toFixed(2)}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ${total.toFixed(2)}`);
