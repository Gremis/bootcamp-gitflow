import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotal } from '../src/budget.js';

const validCases = [
  { name: 'calculates the example total', unitPrice: 19.90, quantity: 3, expected: 59.70 },
  { name: 'accepts zero price', unitPrice: 0, quantity: 3, expected: 0 },
  { name: 'accepts zero quantity', unitPrice: 19.90, quantity: 0, expected: 0 },
  { name: 'rounds floating point multiplication', unitPrice: 0.1, quantity: 3, expected: 0.3 },
  { name: 'rounds the total to two decimal places', unitPrice: 1.234, quantity: 2, expected: 2.47 }
];

for (const { name, unitPrice, quantity, expected } of validCases) {
  test(name, () => {
    assert.equal(calculateTotal(unitPrice, quantity), expected);
  });
}

const invalidTypes = ['19.90', null, undefined, true, {}, [], 1n, Symbol('value')];

for (const value of invalidTypes) {
  test(`rejects unit price of type ${typeof value}: ${String(value)}`, () => {
    assert.throws(() => calculateTotal(value, 3), TypeError);
  });

  test(`rejects quantity of type ${typeof value}: ${String(value)}`, () => {
    assert.throws(() => calculateTotal(19.90, value), TypeError);
  });
}

for (const unitPrice of [-1, NaN, Infinity, -Infinity]) {
  test(`rejects invalid numeric unit price: ${unitPrice}`, () => {
    assert.throws(() => calculateTotal(unitPrice, 3), RangeError);
  });
}

for (const quantity of [-1, 1.5, NaN, Infinity, -Infinity]) {
  test(`rejects invalid numeric quantity: ${quantity}`, () => {
    assert.throws(() => calculateTotal(19.90, quantity), RangeError);
  });
}
