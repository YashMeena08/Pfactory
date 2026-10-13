export function formatAmount(price) {
  return `₹${new Intl.NumberFormat('en-IN').format(price)}`
}

export function formatPrice(product) {
  const amount = formatAmount(product.price)
  return product.pricingType === 'starting'
    ? `Starting from ${amount}`
    : amount
}