import { siteConfig } from '../config/site'
import { formatAmount } from './formatPrice'

export function buildWhatsAppLink(product) {
  const productUrl = `${window.location.origin}/products/${product.slug}`
  const priceLabel =
    product.pricingType === 'starting' ? 'Starting price' : 'Listed price'

  const message = [
    `Hello! I am interested in the ${product.name}.`,
    '',
    `Product: ${product.name}`,
    `${priceLabel}: ${formatAmount(product.price)}`,
    `Product link: ${productUrl}`,
    '',
    'I would like to know more about customization options, available materials, manufacturing time and delivery charges.',
    '',
    'Please share the details.',
  ].join('\n')

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}