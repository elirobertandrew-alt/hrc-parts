import { describe, expect, it } from 'vitest'
import vercel from '../vercel.json'
import { securityHeaders } from './securityHeaders'

describe('browser security headers', () => {
  const configured = Object.fromEntries(vercel.headers[0].headers.map((header) => [header.key, header.value]))

  it('covers every production path', () => {
    expect(vercel.headers[0].source).toBe('/(.*)')
  })

  it('matches the local preview header set', () => {
    expect(configured).toEqual(securityHeaders)
  })

  it('forces HTTPS and blocks common browser attacks without changing page assets', () => {
    expect(configured['Strict-Transport-Security']).toBe('max-age=63072000; includeSubDomains; preload')
    expect(configured['X-Content-Type-Options']).toBe('nosniff')
    expect(configured['X-Frame-Options']).toBe('DENY')
    expect(configured['Referrer-Policy']).toBe('strict-origin-when-cross-origin')
    expect(configured['Cross-Origin-Opener-Policy']).toBe('same-origin')
    expect(configured['Content-Security-Policy']).toContain("script-src 'self'")
    expect(configured['Content-Security-Policy']).toContain("frame-ancestors 'none'")
    expect(configured['Content-Security-Policy']).toContain('upgrade-insecure-requests')
    expect(configured['Content-Security-Policy']).toContain('https://fonts.googleapis.com')
    expect(configured['Content-Security-Policy']).toContain('https://fonts.gstatic.com')
  })
})
