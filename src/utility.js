// const price = 1000
const tax = 1.10

const withTax = (price) => Math.floor(price * tax) + 'yen'

export default withTax
