export type CartLine = { productId: string; quantity: number }
export type PricedProduct = { id: string; price: string }

export function parsePriceCents(price: string): number {
  if (!/^\$\d+(?:,\d{3})*(?:\.\d{2})$/.test(price)) throw new Error(`Invalid catalog price: ${price}`)
  return Math.round(Number(price.replace(/[$,]/g, '')) * 100)
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100)
}

export function addCartItem(cart: CartLine[], product: PricedProduct): CartLine[] {
  const existing = cart.find((line) => line.productId === product.id)
  if (!existing) return [...cart, { productId: product.id, quantity: 1 }]
  return cart.map((line) => line.productId === product.id ? { ...line, quantity: line.quantity + 1 } : line)
}

export function updateCartQuantity(cart: CartLine[], productId: string, quantity: number): CartLine[] {
  if (quantity <= 0) return removeCartItem(cart, productId)
  return cart.map((line) => line.productId === productId ? { ...line, quantity } : line)
}

export function removeCartItem(cart: CartLine[], productId: string): CartLine[] {
  return cart.filter((line) => line.productId !== productId)
}

export function cartCount(cart: CartLine[]): number {
  return cart.reduce((sum, line) => sum + line.quantity, 0)
}

export function cartSubtotalCents(cart: CartLine[], catalog: PricedProduct[]): number {
  const trustedPrices = new Map(catalog.map((product) => [product.id, parsePriceCents(product.price)]))
  return cart.reduce((sum, line) => {
    const unitPrice = trustedPrices.get(line.productId)
    if (unitPrice === undefined) throw new Error(`Unknown catalog product: ${line.productId}`)
    return sum + unitPrice * line.quantity
  }, 0)
}
