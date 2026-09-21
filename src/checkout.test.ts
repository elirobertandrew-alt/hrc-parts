import { describe, expect, it } from 'vitest'
import { addCartItem, cartCount, cartSubtotalCents, formatMoney, parsePriceCents, removeCartItem, updateCartQuantity } from './checkout'

const cluster = { id: 'cluster', price: '$390.00' }
const rail = { id: 'rail', price: '$130.00' }

describe('mock checkout cart', () => {
  it('adds a product once and then increments its quantity', () => {
    const once = addCartItem([], cluster)
    const twice = addCartItem(once, cluster)
    expect(twice).toEqual([{ productId: 'cluster', quantity: 2 }])
  })

  it('updates quantity and removes a line when quantity reaches zero', () => {
    const cart = [{ productId: 'cluster', quantity: 2 }, { productId: 'rail', quantity: 1 }]
    expect(updateCartQuantity(cart, 'cluster', 1)).toEqual([{ productId: 'cluster', quantity: 1 }, { productId: 'rail', quantity: 1 }])
    expect(updateCartQuantity(cart, 'cluster', 0)).toEqual([{ productId: 'rail', quantity: 1 }])
    expect(removeCartItem(cart, 'rail')).toEqual([{ productId: 'cluster', quantity: 2 }])
  })

  it('computes count and subtotal from trusted catalog prices', () => {
    const cart = [{ productId: 'cluster', quantity: 2 }, { productId: 'rail', quantity: 1 }]
    expect(cartCount(cart)).toBe(3)
    expect(cartSubtotalCents(cart, [cluster, rail])).toBe(91_000)
    expect(formatMoney(91_000)).toBe('$910.00')
  })

  it('parses catalog currency safely and rejects malformed prices', () => {
    expect(parsePriceCents('$45.89')).toBe(4_589)
    expect(() => parsePriceCents('call for price')).toThrow('Invalid catalog price')
  })
})
