import { existsSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CATALOG_PAGE_COUNT, paginateCatalog, products } from './catalog'

describe('eBay listing catalog', () => {
  it('gives every part its own live eBay listing URL', () => {
    expect(products.length).toBeGreaterThan(48)
    for (const product of products) {
      expect(product.url).toBe(`https://www.ebay.com/itm/${product.id}`)
    }
  })

  it('does not reuse a listing URL, id, or title across parts', () => {
    const urls = products.map((product) => product.url)
    const ids = products.map((product) => product.id)
    const titles = products.map((product) => product.title.trim().toLowerCase())
    expect(new Set(urls).size).toBe(urls.length)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(titles).size).toBe(titles.length)
  })

  it('keeps every product image on this site', () => {
    for (const product of products) {
      expect(product.image).toBe(`/products/${product.id}.webp`)
      expect(existsSync(new URL(`../public${product.image}`, import.meta.url))).toBe(true)
    }
  })

  it('splits the live inventory across three pages without dropping or repeating a part', () => {
    expect(CATALOG_PAGE_COUNT).toBe(3)
    const pages = [1, 2, 3].map((page) => paginateCatalog(products, page))
    const ids = pages.flatMap((page) => page.items.map((product) => product.id))
    expect(pages.every((page) => page.pageCount === 3)).toBe(true)
    expect(ids).toEqual(products.map((product) => product.id))
    expect(new Set(ids).size).toBe(products.length)
    expect(pages[0].items.length).toBe(Math.ceil(products.length / 3))
    expect(pages[2].items.length).toBeGreaterThan(0)
    expect(paginateCatalog(products, 99).page).toBe(3)
    expect(paginateCatalog(products, 0).page).toBe(1)
  })
})

describe('storefront without an eBay API key', () => {
  const app = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8')

  it('sends each part to its eBay listing instead of an on-site cart', () => {
    expect(app).toContain('{products.length}')
    expect(app).not.toContain('<dt>48</dt>')
    expect(app).toContain('catalog-pager')
    expect(app).toContain('paginateCatalog')
    expect(app).toContain('View on eBay')
    expect(app).toContain('product.url')
    expect(app).not.toContain('Add to cart')
    expect(app).not.toContain('cart-button')
    expect(app).not.toContain('checkoutOpen')
    expect(app).not.toContain('./checkout')
  })
})
