import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { products } from './catalog'

describe('eBay listing catalog', () => {
  it('gives every part its own live eBay listing URL', () => {
    expect(products.length).toBeGreaterThan(0)
    for (const product of products) {
      expect(product.url).toBe(`https://www.ebay.com/itm/${product.id}`)
    }
  })

  it('does not reuse a listing URL across parts', () => {
    const urls = products.map((product) => product.url)
    expect(new Set(urls).size).toBe(urls.length)
  })
})

describe('storefront without an eBay API key', () => {
  const app = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8')

  it('sends each part to its eBay listing instead of an on-site cart', () => {
    expect(app).toContain('View on eBay')
    expect(app).toContain('product.url')
    expect(app).not.toContain('Add to cart')
    expect(app).not.toContain('cart-button')
    expect(app).not.toContain('checkoutOpen')
    expect(app).not.toContain('./checkout')
  })
})
