export type Category = 'Engine & Performance' | 'Electronics & Controls' | 'Interior & Trim' | 'Exterior & Lighting' | 'Mounts & Hardware'

export type Product = {
  id: string
  title: string
  price: string
  url: string
  image: string
  category: Category
  fitment: string
  condition: 'New' | 'Used' | 'See listing'
}

const source = [
  {
    "id": "820099436184",
    "title": "1996-2000 Honda Civic SI Cluster Em1 Speedometer Ek OEM 99-00 Used HPCC",
    "price": "$390.00",
    "url": "https://www.ebay.com/itm/820099436184",
    "image": "/products/820099436184.webp"
  },
  {
    "id": "820076823748",
    "title": "EDM RARE Honda Civic EK4 Steering Wheel 3 Spokes dark grey Non Srs HPCC",
    "price": "$249.00",
    "url": "https://www.ebay.com/itm/820076823748",
    "image": "/products/820076823748.webp"
  },
  {
    "id": "820076689563",
    "title": "GENUINE OEM HONDA DEL SOL 92-95 SPLASH GUARDS SET NEW HPCC",
    "price": "$298.00",
    "url": "https://www.ebay.com/itm/820076689563",
    "image": "/products/820076689563.webp"
  },
  {
    "id": "820132739175",
    "title": "Skunk2 Secondary High Volume Fuel Rail B-series Ultra Race Intake Manifold USED",
    "price": "$130.00",
    "url": "https://www.ebay.com/itm/820132739175",
    "image": "/products/820132739175.webp"
  },
  {
    "id": "820132763580",
    "title": "92-95 Civic 94-01 Integra NRG Innovation Quick Release Kit. USED HPCC",
    "price": "$200.00",
    "url": "https://www.ebay.com/itm/820132763580",
    "image": "/products/820132763580.webp"
  },
  {
    "id": "820113144863",
    "title": "92-95 Civic EG B Series T Bracket OEM/mounts & A/C Bracket Integra 94-01 Used",
    "price": "$200.00",
    "url": "https://www.ebay.com/itm/820113144863",
    "image": "/products/820113144863.webp"
  },
  {
    "id": "357912597169",
    "title": "90-93 ACURA INTEGRA 2 DOOR HATCHBACK CARGO COVER BLACK W/ MOUNTING PLASTIC TRIM",
    "price": "$220.00",
    "url": "https://www.ebay.com/itm/357912597169",
    "image": "/products/357912597169.webp"
  },
  {
    "id": "358584566633",
    "title": "2009 2010 ACURA TSX Engine Wire Harness AUTOMATIC  2.4L 32110-RL5-A50 OEM",
    "price": "$220.00",
    "url": "https://www.ebay.com/itm/358584566633",
    "image": "/products/358584566633.webp"
  },
  {
    "id": "357797871740",
    "title": "Honda K20 K24 K-series Custom Vented Valve Cover -10AN",
    "price": "$215.00",
    "url": "https://www.ebay.com/itm/357797871740",
    "image": "/products/357797871740.webp"
  },
  {
    "id": "820076845390",
    "title": "HONDA ACURA Genuine OEM INTEGRA TYPE-R DC2 94-01 Red Stitched Shift Boot HPCC",
    "price": "$89.00",
    "url": "https://www.ebay.com/itm/820076845390",
    "image": "/products/820076845390.webp"
  },
  {
    "id": "820132710645",
    "title": "94-01 USDM Acura Integra DC DC2 DC4 DB8 engine bay fuse box lid HPCC",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/820132710645",
    "image": "/products/820132710645.webp"
  },
  {
    "id": "357949227845",
    "title": "80-83 Honda Civic Mud Flap Splash Guard OEM Complete Set",
    "price": "$169.00",
    "url": "https://www.ebay.com/itm/357949227845",
    "image": "/products/357949227845.webp"
  },
  {
    "id": "358393029856",
    "title": "92-95 Honda Civic Si RHD Floor mats Blk/Gray Eg Coupe/Hatch RHD RARE",
    "price": "$290.00",
    "url": "https://www.ebay.com/itm/358393029856",
    "image": "/products/358393029856.webp"
  },
  {
    "id": "357104658512",
    "title": "1994-97 ACURA INTEGRA GSR 1.8L B18C1 DC2 OEM INSTRUMENT GAUGE CLUSTER ASSY",
    "price": "$170.00",
    "url": "https://www.ebay.com/itm/357104658512",
    "image": "/products/357104658512.webp"
  },
  {
    "id": "358546220648",
    "title": "2009-2010 Acura TSX Dome Light Tan OEM Sun Roof Overhead Console HomeLink",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/358546220648",
    "image": "/products/358546220648.webp"
  },
  {
    "id": "820132721119",
    "title": "94-01 ACURA HONDA  B Series B16 B18 B20 Upper and Lower Alternator Bracket OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/820132721119",
    "image": "/products/820132721119.webp"
  },
  {
    "id": "820132744795",
    "title": "Honda B Series engine OEM Fuel Rail/ Regulator",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/820132744795",
    "image": "/products/820132744795.webp"
  },
  {
    "id": "358393007602",
    "title": "97-01 HONDA CR-V CRV - B20B B20Z EXHAUST MANIFOLD HEADER W/HEATSHIELD OEM",
    "price": "$198.00",
    "url": "https://www.ebay.com/itm/358393007602",
    "image": "/products/358393007602.webp"
  },
  {
    "id": "354857421717",
    "title": "Fog Light Assembly-EX-L, Hatchback Left & Right TYC 19-6043-00, 19-6044-00",
    "price": "$59.00",
    "url": "https://www.ebay.com/itm/354857421717",
    "image": "/products/354857421717.webp"
  },
  {
    "id": "820132782379",
    "title": "92-95 Honda Civic Center Defrost Vent Dash Cover Assembly OEM HPCC",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/820132782379",
    "image": "/products/820132782379.webp"
  },
  {
    "id": "358020861797",
    "title": "06-11 HONDA CIVIC SI 2D COUPE FLOOR MAT SET BLACK LEFT RIGHT FRONT REAR OEM",
    "price": "$125.00",
    "url": "https://www.ebay.com/itm/358020861797",
    "image": "/products/358020861797.webp"
  },
  {
    "id": "356523686439",
    "title": "04-08 ACURA TSX - GASOLINE GAS FUEL LID COVER - BLUE/SILVER - OEM FACTORY",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/356523686439",
    "image": "/products/356523686439.webp"
  },
  {
    "id": "358020850425",
    "title": "94-01 ACURA INTEGRA OEM FLOOR MAT SET - LEFT RIGHT FRONT OEM 1994-2001",
    "price": "$79.00",
    "url": "https://www.ebay.com/itm/358020850425",
    "image": "/products/358020850425.webp"
  },
  {
    "id": "358121309887",
    "title": "97 Acura Integra GSR ECU M/T 37820-P72-A03 OBD2 B18C1 P72 OEM",
    "price": "$285.00",
    "url": "https://www.ebay.com/itm/358121309887",
    "image": "/products/358121309887.webp"
  },
  {
    "id": "356933877287",
    "title": "96-00 Civic EK Neo Chrome kit. Subframe. Hardware Kit Center Cap. Accessories",
    "price": "$298.00",
    "url": "https://www.ebay.com/itm/356933877287",
    "image": "/products/356933877287.webp"
  },
  {
    "id": "357850390176",
    "title": "06-11 HONDA CIVIC 2D COUPE REAR TRUNK CARDBOARD INSERT SPARE TIRE COVER BOARD",
    "price": "$60.00",
    "url": "https://www.ebay.com/itm/357850390176",
    "image": "/products/357850390176.webp"
  },
  {
    "id": "358590523174",
    "title": "09-14 Acura TSX Transmission 2.4 Mounting Bracket UPPER 2010 2011 2012 2013 OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/358590523174",
    "image": "/products/358590523174.webp"
  },
  {
    "id": "820076788871",
    "title": "1998-2001 Acura Integra Sedan Taillights OEM HPCC",
    "price": "$175.00",
    "url": "https://www.ebay.com/itm/820076788871",
    "image": "/products/820076788871.webp"
  },
  {
    "id": "820076826936",
    "title": "96-97 HONDA CIVIC ECU ECM COMPUTER 37820-P2P-A02 HPCC",
    "price": "$125.00",
    "url": "https://www.ebay.com/itm/820076826936",
    "image": "/products/820076826936.webp"
  },
  {
    "id": "358311786837",
    "title": "1997-2001 Honda CR-V CRV Dash Center Console Cup Holder Ash Tray OEM COMPLET",
    "price": "$105.00",
    "url": "https://www.ebay.com/itm/358311786837",
    "image": "/products/358311786837.webp"
  },
  {
    "id": "358541197370",
    "title": "2010 Acura TSX Dash Information Navigation Display Screen OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/358541197370",
    "image": "/products/358541197370.webp"
  },
  {
    "id": "358553884489",
    "title": "2009 2010 Acura TSX OEM Bluetooth Communication Control Module 39770-TL2-A010-M1",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/358553884489",
    "image": "/products/358553884489.webp"
  },
  {
    "id": "357995485021",
    "title": "94-01 ACURA INTEGRA b18b1 STOCK AIR INTAKE HOSE TUBE BOX  RS LS GS OEM",
    "price": "$139.00",
    "url": "https://www.ebay.com/itm/357995485021",
    "image": "/products/357995485021.webp"
  },
  {
    "id": "358464647189",
    "title": "NEO CHROME Engine Spark Plug Wire Valve Cover Honda Acura B Series Vtec HPCC",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358464647189",
    "image": "/products/358464647189.webp"
  },
  {
    "id": "357440347783",
    "title": "94-01 ACURA INTEGRA GS-R VTEC 1.8L B18C1 OEM ENGINE A/C LINES PUMP BRACKET",
    "price": "$420.00",
    "url": "https://www.ebay.com/itm/357440347783",
    "image": "/products/357440347783.webp"
  },
  {
    "id": "358546292080",
    "title": "2009-2014 Acura TSX CU2 Tail Lights Lamps OEM Taillights Set 4PCS Honda OEM",
    "price": "$198.00",
    "url": "https://www.ebay.com/itm/358546292080",
    "image": "/products/358546292080.webp"
  },
  {
    "id": "358542328314",
    "title": "09-10 ACURA TSX OEM Audio Equipment Radio Receiver Assembly 4 Cylinder Fits",
    "price": "$95.00",
    "url": "https://www.ebay.com/itm/358542328314",
    "image": "/products/358542328314.webp"
  },
  {
    "id": "357741007379",
    "title": "2009 Honda Civic OEM steering column headlight wiper turn signal switch Si",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/357741007379",
    "image": "/products/357741007379.webp"
  },
  {
    "id": "358291618086",
    "title": "97-01 Honda CR-V Driver Left Door Main Master Power Window Switch OEM",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358291618086",
    "image": "/products/358291618086.webp"
  },
  {
    "id": "358464696027",
    "title": "Engine Spark Plug Wire Valve Cover Honda Acura B Series Vtec Silver HPCC",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358464696027",
    "image": "/products/358464696027.webp"
  },
  {
    "id": "357967775341",
    "title": "94 - 01 Acura Integra Lh Rh Pair of Sun Visor Tan Sunvisors with both Clips OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/357967775341",
    "image": "/products/357967775341.webp"
  },
  {
    "id": "357712303574",
    "title": "Driver Left Tail Light Coupe Fits 09-11 CIVIC 1355881",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/357712303574",
    "image": "/products/357712303574.webp"
  },
  {
    "id": "356908401088",
    "title": "90-97 Mazda Miata Floor Mats Driver & Passenger Mat Set Black OEM",
    "price": "$89.00",
    "url": "https://www.ebay.com/itm/356908401088",
    "image": "/products/356908401088.webp"
  },
  {
    "id": "358846305888",
    "title": "88-1991  Honda PRELUDE  Parking Brake COVER   BLACK Console OEM HPCC",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/358846305888",
    "image": "/products/358846305888.webp"
  },
  {
    "id": "356749510024",
    "title": "1990 - 1991 Honda Civic 4 Door Front Mud Flaps OEM",
    "price": "$52.00",
    "url": "https://www.ebay.com/itm/356749510024",
    "image": "/products/356749510024.webp"
  },
  {
    "id": "358553876392",
    "title": "2009-2014 Acura Tsx Engine Control Computer Ecu Pcm Ecm 37820-RL5-A51 OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/358553876392",
    "image": "/products/358553876392.webp"
  },
  {
    "id": "354809107377",
    "title": "92-95 OEM USDM Honda Civic EG6 EG9 EJ1 DASH POWER MIRROR SWITCH OEM",
    "price": "$15.00",
    "url": "https://www.ebay.com/itm/354809107377",
    "image": "/products/354809107377.webp"
  },
  {
    "id": "358308129643",
    "title": "99-01 Honda CR-V Rear Door Trim Panel Left Driver Side Charcoal Genuine OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/358308129643",
    "image": "/products/358308129643.webp"
  }
] as const

function categorize(title: string): Category {
  const value = title.toLowerCase()
  if (/ecu|ecm|computer|wire harness|bluetooth|radio|display|switch/.test(value)) return 'Electronics & Controls'
  if (/floor mat|steering wheel|shift boot|cargo cover|console|sun visor|dome light|dash|trunk.*board|defrost vent/.test(value)) return 'Interior & Trim'
  if (/tail light|fog light|mud flap|splash guard|grille|fuel lid|door trim/.test(value)) return 'Exterior & Lighting'
  if (/bracket|mount|subframe|hardware|fuse box lid/.test(value)) return 'Mounts & Hardware'
  return 'Engine & Performance'
}

function fitment(title: string): string {
  const cleaned = title.replace(/\s+/g, ' ').trim()
  const year = cleaned.match(/(?:19|20)?\d{2}\s*[-–]\s*(?:19|20)?\d{2}|(?:19|20)\d{2}/)?.[0]
  const vehicle = cleaned.match(/(?:Honda|Acura|Mazda)\s+(?:Civic|Integra|CR-?V|TSX|Prelude|Del Sol|Miata)/i)?.[0]
  const platform = cleaned.match(/\b(?:B16|B18|B20|B Series|K20|K24|K-series|DC2|DC4|DB8|EG6|EG9|EJ1|EK4|EM1)\b/i)?.[0]
  return [year, vehicle, platform].filter(Boolean).join(' · ') || 'Verify exact vehicle and configuration in the eBay listing'
}

export const products: Product[] = source.map((item) => ({
  ...item,
  category: categorize(item.title),
  fitment: fitment(item.title),
  condition: /\bnew\b/i.test(item.title) ? 'New' : /\bused\b/i.test(item.title) ? 'Used' : 'See listing',
}))

export const categories: Category[] = [
  'Engine & Performance',
  'Electronics & Controls',
  'Interior & Trim',
  'Exterior & Lighting',
  'Mounts & Hardware',
]
