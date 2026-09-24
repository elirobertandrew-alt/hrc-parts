import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { categories, products, type Category, type Product } from './catalog'
import { addCartItem, cartCount, cartSubtotalCents, formatMoney, parsePriceCents, removeCartItem, updateCartQuantity, type CartLine } from './checkout'
import './App.css'
import './checkout.css'

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'All parts' | Category>('All parts')
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState<CartLine[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const visible = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All parts' || product.category === category
    const haystack = `${product.title} ${product.fitment} ${product.category}`.toLowerCase()
    return matchesCategory && haystack.includes(query.trim().toLowerCase())
  }), [category, query])

  const cartItems = useMemo(() => cart.map((line) => ({
    ...line,
    product: products.find((product) => product.id === line.productId),
  })).filter((line): line is CartLine & { product: Product } => Boolean(line.product)), [cart])
  const itemCount = cartCount(cart)
  const subtotal = cartSubtotalCents(cart, products)

  useEffect(() => {
    if (!cartOpen && !checkoutOpen) return
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const dialog = document.querySelector<HTMLElement>(checkoutOpen ? '.checkout-modal' : '.cart-drawer')
    const page = Array.from(document.querySelectorAll<HTMLElement>('.topbar, .header, main, footer'))
    page.forEach((element) => element.setAttribute('inert', ''))
    document.body.style.overflow = 'hidden'
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled])') ?? [])
    focusable()[0]?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (checkoutOpen) setCheckoutOpen(false)
        else setCartOpen(false)
      }
      if (event.key === 'Tab') {
        const controls = focusable()
        const first = controls[0]
        const last = controls.at(-1)
        if (!first || !last) return
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      page.forEach((element) => element.removeAttribute('inert'))
      document.body.style.overflow = ''
      opener?.focus()
    }
  }, [cartOpen, checkoutOpen])

  const jumpToCatalog = (next: 'All parts' | Category) => {
    setCategory(next)
    setMenuOpen(false)
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  const addToCart = (product: Product) => {
    setCart((current) => addCartItem(current, product))
    setCartOpen(true)
  }

  const finishMockOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setOrderComplete(true)
    setCart([])
  }

  return (
    <div className="site-shell">
      <div className="topbar">Genuine OEM & hard-to-find Honda / Acura parts <span>•</span> Secure checkout preview</div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Honda Parts Central Coast home"><img src="/hpcc-logo.png" alt="Honda Parts Central Coast" /></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <button onClick={() => jumpToCatalog('All parts')}>All parts</button>
          <button onClick={() => jumpToCatalog('Engine & Performance')}>Performance</button>
          <button onClick={() => jumpToCatalog('Interior & Trim')}>Interior</button>
          <button onClick={() => jumpToCatalog('Exterior & Lighting')}>Exterior</button>
          <a href="#fitment">Fitment help</a>
        </nav>
        <button className="cart-button" type="button" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${itemCount} items`}>Cart <span>{itemCount}</span></button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">HONDA RACING CULTURE</p>
            <h1>Keep the icons <em>on the road.</em></h1>
            <p className="hero-lede">Curated OEM, rare, and performance parts for the Honda and Acura chassis that built the scene.</p>
            <div className="hero-actions"><button className="primary" onClick={() => jumpToCatalog('All parts')}>Browse all parts</button><a className="secondary" href="#fitment">How fitment works</a></div>
            <dl className="trust-row"><div><dt>48</dt><dd>live listings</dd></div><div><dt>100%</dt><dd>positive feedback</dd></div><div><dt>Mock</dt><dd>checkout ready</dd></div></dl>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="speed-lines" /><span className="hero-number">90s</span><div className="part-collage"><img src={products[0].image} alt="" /><img src={products[8].image} alt="" /><img src={products[1].image} alt="" /></div><span className="stamp">OEM • RARE • REAL</span></div>
        </section>

        <section className="chassis-strip" aria-labelledby="shop-chassis">
          <div><p className="section-kicker">START WITH WHAT YOU DRIVE</p><h2 id="shop-chassis">Shop by chassis</h2></div>
          <div className="chassis-list">{[['Civic','EG · EK · EM1 · 8th Gen'],['Integra','DA · DC2 · DC4 · DB8'],['TSX','CL9 · CU2'],['CR-V','RD1 · RD2'],['Other','Prelude · Del Sol · Miata']].map(([name, detail]) => <button key={name} onClick={() => { setQuery(name); jumpToCatalog('All parts') }}><strong>{name}</strong><span>{detail}</span><b aria-hidden="true">→</b></button>)}</div>
        </section>

        <section className="catalog" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading"><div><p className="section-kicker">CURRENT INVENTORY</p><h2 id="catalog-title">Parts with a past.<br/>Ready for the next build.</h2></div><p>Real HRC inventory organized by category and fitment. Add parts to your cart and walk through the built-in checkout preview.</p></div>
          <div className="catalog-tools"><label className="search"><span className="sr-only">Search inventory</span><SearchIcon/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chassis, engine, or part…"/><kbd>{visible.length}</kbd></label><div className="filters" aria-label="Filter by category">{(['All parts', ...categories] as const).map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
          {visible.length ? <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.id}>
            <div className="product-image"><img src={product.image} alt="" width="720" height="720" /><span>{product.condition}</span></div>
            <div className="product-content"><p className="product-category">{product.category}</p><h3>{product.title}</h3><div className="fitment"><b>Fits</b><span>{product.fitment}</span></div><div className="product-footer"><strong>{product.price}</strong><button type="button" onClick={() => addToCart(product)}>Add to cart</button></div></div>
          </article>)}</div> : <div className="empty"><h3>No exact matches.</h3><p>Try a chassis such as Civic, Integra, TSX, or CR-V.</p><button onClick={() => { setQuery(''); setCategory('All parts') }}>Reset inventory</button></div>}
        </section>

        <section className="fitment-section" id="fitment">
          <div><p className="section-kicker">BUY ONCE. FIT ONCE.</p><h2>Fitment is not a guessing game.</h2></div>
          <div className="fitment-steps"><article><span>01</span><h3>Read the fitment line</h3><p>Every card surfaces the vehicle, chassis, engine, or years found in the live listing.</p></article><article><span>02</span><h3>Review the details</h3><p>Confirm trim, transmission, body style, condition, and included hardware before checkout.</p></article><article><span>03</span><h3>Ask before ordering</h3><p>Not certain? Contact HRC with your year, model, trim, and engine before placing an order.</p></article></div>
          <button className="primary" type="button" onClick={() => jumpToCatalog('All parts')}>Browse fitment-listed parts</button>
        </section>
      </main>

      <footer>
        <img className="footer-watermark" src="/hpcc-logo-watermark.png" alt="" aria-hidden="true" />
        <p>Honda & Acura OEM, rare, and performance parts.<br/>Independent seller. Not affiliated with Honda Motor Co.</p>
        <div><a href="#top">Home</a><a href="#fitment">Fitment help</a><a href="#catalog">Inventory</a></div>
        <small>© 2026 HRC Parts. Checkout is a non-charging preview until a payment processor is connected.</small>
      </footer>

      {cartOpen && <div className="drawer-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false) }}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-header"><div><p className="section-kicker">YOUR BUILD LIST</p><h2 id="cart-title">Cart <span>{itemCount}</span></h2></div><button className="close-button" type="button" onClick={() => setCartOpen(false)} aria-label="Close cart">×</button></div>
        {cartItems.length ? <><div className="cart-lines">{cartItems.map(({ product, quantity }) => <article className="cart-line" key={product.id}><img src={product.image} alt="" width="90" height="90" /><div><h3>{product.title}</h3><p>{product.fitment}</p><div className="quantity"><button type="button" onClick={() => setCart((current) => updateCartQuantity(current, product.id, quantity - 1))} aria-label={`Decrease ${product.title} quantity`}>−</button><span>{quantity}</span><button type="button" onClick={() => setCart((current) => updateCartQuantity(current, product.id, quantity + 1))} aria-label={`Increase ${product.title} quantity`}>+</button></div></div><div className="line-price"><strong>{formatMoney(parsePriceCents(product.price) * quantity)}</strong><button type="button" onClick={() => setCart((current) => removeCartItem(current, product.id))}>Remove</button></div></article>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div><p>Shipping and tax are calculated in checkout.</p><button className="primary" type="button" onClick={() => { setCartOpen(false); setCheckoutOpen(true); setOrderComplete(false) }}>Checkout</button><small>Preview mode — no payment processor connected</small></div></> : <div className="cart-empty"><span>0</span><h3>Your cart is ready for a build.</h3><p>Add a part from the inventory to begin.</p><button className="primary" type="button" onClick={() => { setCartOpen(false); jumpToCatalog('All parts') }}>Browse parts</button></div>}
      </aside></div>}

      {checkoutOpen && <div className="checkout-layer" role="presentation"><section className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><button className="close-button" type="button" onClick={() => setCheckoutOpen(false)} aria-label="Close checkout">×</button>
        {orderComplete ? <div className="order-complete"><span>✓</span><p className="section-kicker">PREVIEW COMPLETE</p><h2 id="checkout-title">Checkout flow is ready.</h2><p>No order was created and no payment was processed. Stripe can be connected to this final step later.</p><button className="primary" type="button" onClick={() => setCheckoutOpen(false)}>Return to store</button></div> : <form onSubmit={finishMockOrder}><div className="checkout-heading"><p className="section-kicker">SECURE CHECKOUT PREVIEW</p><h2 id="checkout-title">Complete your build.</h2><p className="mock-notice"><b>Mock mode</b> No card will be charged and no order will be submitted.</p></div><div className="checkout-grid"><div className="checkout-fields">
          <fieldset><legend>Contact</legend><label>Email<input required type="email" placeholder="driver@example.com" autoComplete="email" /></label></fieldset>
          <fieldset><legend>Shipping</legend><div className="field-pair"><label>First name<input required autoComplete="given-name" /></label><label>Last name<input required autoComplete="family-name" /></label></div><label>Address<input required autoComplete="street-address" /></label><div className="field-pair three"><label>City<input required autoComplete="address-level2" /></label><label>State<input required autoComplete="address-level1" maxLength={2} /></label><label>ZIP<input required inputMode="numeric" autoComplete="postal-code" /></label></div></fieldset>
          <fieldset className="mock-payment"><legend>Payment</legend><p>Stripe-ready visual placeholder — test values only</p><label>Name on card<input disabled value="TEST CHECKOUT ONLY" aria-label="Mock cardholder name" /></label><label>Card number<input disabled value="•••• •••• •••• 4242" aria-label="Mock card number ending in 4242" /></label><div className="field-pair"><label>Expiration<input disabled value="12 / 30" aria-label="Mock expiration date" /></label><label>CVC<input disabled value="•••" aria-label="Mock security code" /></label></div></fieldset>
        </div><aside className="checkout-order"><h3>Order summary</h3>{cartItems.map(({ product, quantity }) => <div className="checkout-line" key={product.id}><div><img src={product.image} alt="" /><span>{quantity}</span></div><p>{product.title}</p><strong>{formatMoney(parsePriceCents(product.price) * quantity)}</strong></div>)}<dl><div><dt>Subtotal</dt><dd>{formatMoney(subtotal)}</dd></div><div><dt>Shipping</dt><dd>Calculated later</dd></div><div><dt>Tax</dt><dd>Calculated later</dd></div><div className="total"><dt>Preview total</dt><dd>{formatMoney(subtotal)}</dd></div></dl><button className="primary pay-button" type="submit">Complete mock order</button><small>Demonstration only. Nothing is charged or stored.</small></aside></div></form>}
      </section></div>}
    </div>
  )
}

export default App
