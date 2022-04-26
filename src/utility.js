const calculateTax = (price, tax = 1.10) => Math.floor(price * tax)

export { calculateTax };
