const calculateTax = (price, tax = 1.10) => Math.floor(price * tax)

const formatDate = (date) => {
  return [date.getFullYear(),
    (date.getMonth() + 1),
    date.getDate()].join('-') + " " +
    [("0" + date.getHours()).slice(-1),
    ("0" + date.getMinutes()).slice(-2),
    ("0" + date.getSeconds()).slice(-2)].join(':');
}


export { calculateTax, formatDate };
