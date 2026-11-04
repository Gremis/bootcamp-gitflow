export function calculateTotal(unitPrice, quantity) {
  if (typeof unitPrice !== 'number') {
    throw new TypeError('Unit price must be a number');
  }

  if (typeof quantity !== 'number') {
    throw new TypeError('Quantity must be a number');
  }

  if (!Number.isFinite(unitPrice) || unitPrice < 0) {
    throw new RangeError('Unit price must be finite and nonnegative');
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new RangeError('Quantity must be a nonnegative integer');
  }

  return Math.round(unitPrice * quantity * 100) / 100;
}
