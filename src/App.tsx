import { useMemo, useState } from 'react'
import { categories, products, type Category } from './catalog'
import './App.css'

const ebayStore = 'https://www.ebay.com/usr/hondapartscencoast'
const instagram = 'https://www.instagram.com/honda_parts_centralcoast'

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'All parts' | Category>('All parts')
  const [menuOpen, setMenuOpen] = useState(false)

  const visible = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All parts' || product.category === category
    const haystack = `${product.title} ${product.fitment} ${product.category}`.toLowerCase()
    return matchesCategory && haystack.includes(query.trim().toLowerCase())
  }), [category, query])

  const jumpToCatalog = (next: 'All parts' | Category) => {
    setCategory(next)
    setMenuOpen(false)
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <div className="topbar">Genuine OEM & hard-to-find Honda / Acura parts <span>•</span> Every item ships through eBay <span>•</span> <a href={instagram} target="_blank" rel="noreferrer">honda_parts_centralcoast</a></div>
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
        <a className="ebay-link" href={ebayStore} target="_blank" rel="noreferrer">Shop on eBay <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">HONDA RACING CULTURE</p>
            <h1>Keep the icons <em>on the road.</em></h1>
            <p className="hero-lede">Curated OEM, rare, and performance parts for the Honda and Acura chassis that built the scene.</p>
            <div className="hero-actions"><button className="primary" onClick={() => jumpToCatalog('All parts')}>Browse all parts</button><a className="secondary" href="#fitment">How fitment works</a></div>
            <dl className="trust-row"><div><dt>48</dt><dd>live listings</dd></div><div><dt>100%</dt><dd>positive feedback</dd></div><div><dt>eBay</dt><dd>secure checkout</dd></div></dl>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="speed-lines" /><span className="hero-number">90s</span><div className="part-collage"><img src={products[0].image} alt="" /><img src={products[8].image} alt="" /><img src={products[1].image} alt="" /></div><span className="stamp">OEM • RARE • REAL</span></div>
        </section>

        <section className="chassis-strip" aria-labelledby="shop-chassis">
          <div><p className="section-kicker">START WITH WHAT YOU DRIVE</p><h2 id="shop-chassis">Shop by chassis</h2></div>
          <div className="chassis-list">{[['Civic','EG · EK · EM1 · 8th Gen'],['Integra','DA · DC2 · DC4 · DB8'],['TSX','CL9 · CU2'],['CR-V','RD1 · RD2'],['Other','Prelude · Del Sol · Miata']].map(([name, detail]) => <button key={name} onClick={() => { setQuery(name); jumpToCatalog('All parts') }}><strong>{name}</strong><span>{detail}</span><b aria-hidden="true">→</b></button>)}</div>
        </section>

        <section className="catalog" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading"><div><p className="section-kicker">CURRENT INVENTORY</p><h2 id="catalog-title">Parts with a past.<br/>Ready for the next build.</h2></div><p>Real inventory from the HRC eBay store. Availability, condition details, shipping, and final checkout are handled on eBay.</p></div>
          <div className="catalog-tools"><label className="search"><span className="sr-only">Search inventory</span><SearchIcon/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chassis, engine, or part…"/><kbd>{visible.length}</kbd></label><div className="filters" aria-label="Filter by category">{(['All parts', ...categories] as const).map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
          {visible.length ? <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.id}>
            <a className="product-image" href={product.url} target="_blank" rel="noreferrer" aria-label={`View ${product.condition}: ${product.title} on eBay`}><img src={product.image} alt="" width="720" height="720" /><span>{product.condition}</span></a>
            <div className="product-content"><p className="product-category">{product.category}</p><h3><a href={product.url} target="_blank" rel="noreferrer">{product.title}</a></h3><div className="fitment"><b>Fits</b><span>{product.fitment}</span></div><div className="product-footer"><strong>{product.price}</strong><a href={product.url} target="_blank" rel="noreferrer">View on eBay <span aria-hidden="true">↗</span></a></div></div>
          </article>)}</div> : <div className="empty"><h3>No exact matches.</h3><p>Try a chassis such as Civic, Integra, TSX, or CR-V.</p><button onClick={() => { setQuery(''); setCategory('All parts') }}>Reset inventory</button></div>}
        </section>

        <section className="fitment-section" id="fitment">
          <div><p className="section-kicker">BUY ONCE. FIT ONCE.</p><h2>Fitment is not a guessing game.</h2></div>
          <div className="fitment-steps"><article><span>01</span><h3>Read the fitment line</h3><p>Every card surfaces the vehicle, chassis, engine, or years found in the live listing.</p></article><article><span>02</span><h3>Check the full listing</h3><p>Confirm trim, transmission, body style, condition, and included hardware on eBay.</p></article><article><span>03</span><h3>Ask before ordering</h3><p>Not certain? Contact HRC through eBay with your year, model, trim, and engine.</p></article></div>
          <a className="primary" href={`${ebayStore}#contact`} target="_blank" rel="noreferrer">Contact HRC on eBay ↗</a>
        </section>
      </main>

      <footer>
        <p>Honda & Acura OEM, rare, and performance parts.<br/>Independent seller. Not affiliated with Honda Motor Co.</p>
        <div><a href={ebayStore} target="_blank" rel="noreferrer">eBay store ↗</a><a href="#fitment">Fitment help</a><a href="#catalog">Inventory</a></div>
        <a className="footer-mark" href="#top" aria-label="Honda Parts Central Coast home"><img src="/hpcc-footer.png" alt="HPCC" width="1400" height="467" /></a>
        <small>© 2026 HRC Parts. Purchases, payments, shipping, and returns are completed on eBay.</small>
      </footer>
    </div>
  )
}

export default App
