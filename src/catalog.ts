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
  },
  {
    "id": "358712021698",
    "title": "09-12 Acura TSX Rear Trunk Deck Lid Rod Hinge Torsion Set Honda Bar Opener OEM",
    "price": "$98.00",
    "url": "https://www.ebay.com/itm/358712021698",
    "image": "/products/358712021698.webp"
  },
  {
    "id": "820076802452",
    "title": "Genuine Honda OEM Rear Splash/Mud Guard Kit Fits: 1990-1991 CRX EF 08P09-SH2-100",
    "price": "$120.00",
    "url": "https://www.ebay.com/itm/820076802452",
    "image": "/products/820076802452.webp"
  },
  {
    "id": "358711741635",
    "title": "09-14 ACURA TSX - REAR SPEAKER COVER TRAY LINER TRIM GRAY COLOR OEM",
    "price": "$159.00",
    "url": "https://www.ebay.com/itm/358711741635",
    "image": "/products/358711741635.webp"
  },
  {
    "id": "357850401092",
    "title": "06-11 Honda Civic Si Coupe Steering Column Trim Cover Bezel Aa7233",
    "price": "$32.00",
    "url": "https://www.ebay.com/itm/357850401092",
    "image": "/products/357850401092.webp"
  },
  {
    "id": "358296601883",
    "title": "97-99 HONDA CRV CR-V DRIVER LEFT MASTER POWER WINDOW DIMMER CONTROL SWITCH GRAY",
    "price": "$45.89",
    "url": "https://www.ebay.com/itm/358296601883",
    "image": "/products/358296601883.webp"
  },
  {
    "id": "358519870160",
    "title": "ACURA TSX 2009/14 FWD FRONT STRUT BAR SUPPORT BRACE OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/358519870160",
    "image": "/products/358519870160.webp"
  },
  {
    "id": "358520047195",
    "title": "09-14 Acura TSX AC Line Hose Pipe LOWER Compressor TO Condenser 2010 2011 2012",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/358520047195",
    "image": "/products/358520047195.webp"
  },
  {
    "id": "358520061786",
    "title": "2009-12 Acura Tsx 2.4L Intake Cover OEM",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/358520061786",
    "image": "/products/358520061786.webp"
  },
  {
    "id": "358712028619",
    "title": "09 10 11 12 13 14 Acura TSX FRONT RIGHT PASSENGER SEAT BELT BUCKLE OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/358712028619",
    "image": "/products/358712028619.webp"
  },
  {
    "id": "358553889398",
    "title": "2009-2014 Acura TSX USB Network Adapter Control Module 39113-TL2-A01-M1 OEM",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/358553889398",
    "image": "/products/358553889398.webp"
  },
  {
    "id": "357889962649",
    "title": "2004-2008 Acura TSX Radiator Antifreeze Coolant Reservoir Bottle OEM",
    "price": "$32.00",
    "url": "https://www.ebay.com/itm/357889962649",
    "image": "/products/357889962649.webp"
  },
  {
    "id": "358584519651",
    "title": "09-14 ACURA TSX - WINDSHIELD WIPER ARM SET - LEFT AND RIGHT WITH BLADES OEM",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/358584519651",
    "image": "/products/358584519651.webp"
  },
  {
    "id": "358296704154",
    "title": "97-01 Honda CRV Front Console Map Dome Light OEM",
    "price": "$23.59",
    "url": "https://www.ebay.com/itm/358296704154",
    "image": "/products/358296704154.webp"
  },
  {
    "id": "357797738455",
    "title": "Genuine OEM EF EG EK Civic CRX Del Sol Shift Knob Manual 88-91 92-95 96-00",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/357797738455",
    "image": "/products/357797738455.webp"
  },
  {
    "id": "358316777409",
    "title": "97-01 CRV Center Table Console Arm Rest Folding Tray Cup Holder OEM Complete",
    "price": "$52.00",
    "url": "https://www.ebay.com/itm/358316777409",
    "image": "/products/358316777409.webp"
  },
  {
    "id": "358712051636",
    "title": "09 - 14 ACURA TSX LEFT DRIVER FRONT SEAT BELT BUCKLE",
    "price": "$69.00",
    "url": "https://www.ebay.com/itm/358712051636",
    "image": "/products/358712051636.webp"
  },
  {
    "id": "356345900009",
    "title": "2004-05 Acura Tsx Sedan Left Driver Lh Tail Light Inner Oem",
    "price": "$19.00",
    "url": "https://www.ebay.com/itm/356345900009",
    "image": "/products/356345900009.webp"
  },
  {
    "id": "357154985665",
    "title": "OEM 94-97 USDM Acura Integra DC DC2 DB8 driver & Pass. headlight head light",
    "price": "$169.00",
    "url": "https://www.ebay.com/itm/357154985665",
    "image": "/products/357154985665.webp"
  },
  {
    "id": "358584482549",
    "title": "2009-2014 ACURA TSX 2.4L SEDAN ENGINE FUSE RELAY BOX COMPARTMENT TA0-00 OEM",
    "price": "$69.00",
    "url": "https://www.ebay.com/itm/358584482549",
    "image": "/products/358584482549.webp"
  },
  {
    "id": "357663717409",
    "title": "94-01 Acura Integra GSR B18C crankshaft girdle support OEM B18C1 VTEC engine 4P2",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/357663717409",
    "image": "/products/357663717409.webp"
  },
  {
    "id": "358179999924",
    "title": "96-98 HONDA CIVIC - FRONT BUMPER GRILLE ASSEMBLY",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/358179999924",
    "image": "/products/358179999924.webp"
  },
  {
    "id": "358711731809",
    "title": "09-14 ACURA TSX - REAR SEAT HEAD REST LEFT CENTER RIGHT GRAY OEM",
    "price": "$98.00",
    "url": "https://www.ebay.com/itm/358711731809",
    "image": "/products/358711731809.webp"
  },
  {
    "id": "357166910335",
    "title": "94-01 ACURA INTEGRA DASHBOARD GLOVE BOX COMPARTMENT STORAGE WITH LOCK LATCH OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/357166910335",
    "image": "/products/357166910335.webp"
  },
  {
    "id": "357890080951",
    "title": "90 91 92 93 Acura INTEGRA 3DR FRONT SET PAIR Splash Guard MUDFLAP LH RH OEM",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/357890080951",
    "image": "/products/357890080951.webp"
  },
  {
    "id": "358464574958",
    "title": "97-98 Honda CR-V Rear Trunk Tailgate Hatch Panel Plastics OEM",
    "price": "$98.00",
    "url": "https://www.ebay.com/itm/358464574958",
    "image": "/products/358464574958.webp"
  },
  {
    "id": "357910822338",
    "title": "06-11 Honda Civic SI Sedan Driver And Passenger Front Brake Calipers OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/357910822338",
    "image": "/products/357910822338.webp"
  },
  {
    "id": "358464664395",
    "title": "92-00 Honda Civic/Integra Battery Tie Down Kit Hold Down Rod W/ Hooks HPCC",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/358464664395",
    "image": "/products/358464664395.webp"
  },
  {
    "id": "358711725281",
    "title": "09-14 ACURA TSX - FRONT SEAT HEAD REST - LEFT & RIGHT Gray OEM",
    "price": "$55.00",
    "url": "https://www.ebay.com/itm/358711725281",
    "image": "/products/358711725281.webp"
  },
  {
    "id": "357861968330",
    "title": "2009 - 2011 Honda Civic Coupe Headlight Left OEM.",
    "price": "$110.00",
    "url": "https://www.ebay.com/itm/357861968330",
    "image": "/products/357861968330.webp"
  },
  {
    "id": "358308049525",
    "title": "1997-2001 HONDA CRV CR-V REAR HEAD REST HEADREST SEAT BACK TOP CLOTH GRAY #3",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358308049525",
    "image": "/products/358308049525.webp"
  },
  {
    "id": "358408772150",
    "title": "1999-2001 Honda CRV ECU+ABS 37820-PHK-A52 OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/358408772150",
    "image": "/products/358408772150.webp"
  },
  {
    "id": "357166901713",
    "title": "94-01 ACURA INTEGRA TRUNK TAIL LIGHT/STRUTS ACCESS COVERS SET OEM TAN 2DR COUPE",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/357166901713",
    "image": "/products/357166901713.webp"
  },
  {
    "id": "357850268549",
    "title": "06-11 Honda Civic Si Coupe Wiper Arms OEM",
    "price": "$49.00",
    "url": "https://www.ebay.com/itm/357850268549",
    "image": "/products/357850268549.webp"
  },
  {
    "id": "358296616851",
    "title": "1996-2001 Honda CRV power Mirror Switch OEM",
    "price": "$15.00",
    "url": "https://www.ebay.com/itm/358296616851",
    "image": "/products/358296616851.webp"
  },
  {
    "id": "357861453075",
    "title": "92-00 Civic Rear Wheel Bearing & Hub Assembly For Drum Break Extended Stud ARP",
    "price": "$65.00",
    "url": "https://www.ebay.com/itm/357861453075",
    "image": "/products/357861453075.webp"
  },
  {
    "id": "357967812202",
    "title": "96-00 Honda Civic Hatchback rear hatch L & R side speaker covers",
    "price": "$79.00",
    "url": "https://www.ebay.com/itm/357967812202",
    "image": "/products/357967812202.webp"
  },
  {
    "id": "358302968004",
    "title": "1989 - 1991 Honda Prelude Front Mud Flaps OEM",
    "price": "$65.00",
    "url": "https://www.ebay.com/itm/358302968004",
    "image": "/products/358302968004.webp"
  },
  {
    "id": "358464684225",
    "title": "Engine Spark Plug Wire Valve Cover Honda Acura B Series Vtec BLACK HPCC",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358464684225",
    "image": "/products/358464684225.webp"
  },
  {
    "id": "358584552991",
    "title": "2009 2010 ACURA TSX TECHNOLOGY XM RADIO MODULE 39820-TL2-A520-R1 OEM",
    "price": "$98.00",
    "url": "https://www.ebay.com/itm/358584552991",
    "image": "/products/358584552991.webp"
  },
  {
    "id": "357104666116",
    "title": "94 - 01 ACURA INTEGRA - HEADLIGHT HEADLAMP BLINKER TURN SIGNAL SWITCH - OEM",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/357104666116",
    "image": "/products/357104666116.webp"
  },
  {
    "id": "358608178903",
    "title": "02-06 Acura RSX Trunk Handle Hatch Hatchback Release W/hardware HPCC",
    "price": "$69.00",
    "url": "https://www.ebay.com/itm/358608178903",
    "image": "/products/358608178903.webp"
  },
  {
    "id": "357631799459",
    "title": "88-91 Honda Civic Hatchback Rear Spoiler OEM Wing Hatch EF",
    "price": "$79.00",
    "url": "https://www.ebay.com/itm/357631799459",
    "image": "/products/357631799459.webp"
  },
  {
    "id": "355933403683",
    "title": "92-95’ Honda Civic Coupe/Hatchback/Sedan OEM Blk/gray Armrest Console Delete",
    "price": "$19.00",
    "url": "https://www.ebay.com/itm/355933403683",
    "image": "/products/355933403683.webp"
  },
  {
    "id": "358307985987",
    "title": "87-91 Si inner dome light lamp roof OEM Honda Prelude III BA4 BA5 BA7 Si",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/358307985987",
    "image": "/products/358307985987.webp"
  },
  {
    "id": "357632884226",
    "title": "94-01 ACURA INTEGRA BATTERY TRAY OEM",
    "price": "$30.00",
    "url": "https://www.ebay.com/itm/357632884226",
    "image": "/products/357632884226.webp"
  },
  {
    "id": "358308044588",
    "title": "1997-2001 HONDA CRV CR-V REAR HEAD REST HEADREST SEAT BACK TOP CLOTH GRAY #2",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358308044588",
    "image": "/products/358308044588.webp"
  },
  {
    "id": "358584456603",
    "title": "09-14 ACURA TSX - 2.4L - BATTERY MOUNTING TRAY BRACKET - OEM Glazier Blue",
    "price": "$42.00",
    "url": "https://www.ebay.com/itm/358584456603",
    "image": "/products/358584456603.webp"
  },
  {
    "id": "357323832939",
    "title": "94-01 Acura Integra Rear Bumper Garnish",
    "price": "$130.00",
    "url": "https://www.ebay.com/itm/357323832939",
    "image": "/products/357323832939.webp"
  },
  {
    "id": "358296714296",
    "title": "97-01 Honda Cr-v Side View Mirror Driver Left LH Power Moulded Black LX Fits OEM",
    "price": "$35.89",
    "url": "https://www.ebay.com/itm/358296714296",
    "image": "/products/358296714296.webp"
  },
  {
    "id": "358520042601",
    "title": "2009-2014 ACURA TSX SE 2.4L Ac A/C Suction Hose Pipe Line 80311-Tl2-A01 Oem",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/358520042601",
    "image": "/products/358520042601.webp"
  },
  {
    "id": "357737020950",
    "title": "Interior Door Handle Silver Black Frt RH fit 2006 to 2011 Honda Civic Coupe",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/357737020950",
    "image": "/products/357737020950.webp"
  },
  {
    "id": "354592927526",
    "title": "GENUINE FOR HONDA 99-00 CIVIC SI B16A2 INTEGRA GSR B17A1 TIMING BELT COVERS",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/354592927526",
    "image": "/products/354592927526.webp"
  },
  {
    "id": "357712293730",
    "title": "Honda Civic Si Right Coupe Brake Tail Light FG2 8th Gen 06-11 OEM",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/357712293730",
    "image": "/products/357712293730.webp"
  },
  {
    "id": "358179752921",
    "title": "99 00 HONDA CIVIC Engine Motor Brain Box ECU ECM 1.6 37820-P2E-A92",
    "price": "$70.00",
    "url": "https://www.ebay.com/itm/358179752921",
    "image": "/products/358179752921.webp"
  },
  {
    "id": "358430754739",
    "title": "1997-2001 Honda CRV Rear Mud Flaps OEM RD1 CR-V Splash Guard Rear",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358430754739",
    "image": "/products/358430754739.webp"
  },
  {
    "id": "358541354042",
    "title": "2009-2010 Acura TSX AC Heater Temperature Climate Control OEM",
    "price": "$65.00",
    "url": "https://www.ebay.com/itm/358541354042",
    "image": "/products/358541354042.webp"
  },
  {
    "id": "357881032123",
    "title": "88-91 CIVIC EF CENTER CONSOLE OEM BLUE 1988 1989 1990 1991",
    "price": "$55.00",
    "url": "https://www.ebay.com/itm/357881032123",
    "image": "/products/357881032123.webp"
  },
  {
    "id": "357440260122",
    "title": "BLACK Rear inner cover panels trunk tail light Honda Civic Hatch EF Si Dx",
    "price": "$69.00",
    "url": "https://www.ebay.com/itm/357440260122",
    "image": "/products/357440260122.webp"
  },
  {
    "id": "357740818125",
    "title": "2006-2011 Honda Civic Si Coupe Emergency Brake Handle Lever E-Brake OEM",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/357740818125",
    "image": "/products/357740818125.webp"
  },
  {
    "id": "357967819276",
    "title": "94-01 Acura Integra Ls B18B P75 OEM intake air box arm engine motor emission",
    "price": "$75.00",
    "url": "https://www.ebay.com/itm/357967819276",
    "image": "/products/357967819276.webp"
  },
  {
    "id": "358302949274",
    "title": "Jdm 88 89 HONDA PRELUDE (SI 4ws) STORAGE BOX / FUSE COVER OEM BLACK",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358302949274",
    "image": "/products/358302949274.webp"
  },
  {
    "id": "358584439466",
    "title": "2009-14 Acura TSX Bumper Reinforcement Brackets Front Left and Right Side OEM",
    "price": "$65.00",
    "url": "https://www.ebay.com/itm/358584439466",
    "image": "/products/358584439466.webp"
  },
  {
    "id": "357104661922",
    "title": "94-01 Honda Acura Integra OEM Cup Holder",
    "price": "$20.00",
    "url": "https://www.ebay.com/itm/357104661922",
    "image": "/products/357104661922.webp"
  },
  {
    "id": "357850261740",
    "title": "07-09 HONDA CIVIC SI COUPE & SEDAN - GLOVE BOX STORAGE COMPARTMENT - OEM",
    "price": "$49.00",
    "url": "https://www.ebay.com/itm/357850261740",
    "image": "/products/357850261740.webp"
  },
  {
    "id": "357850676412",
    "title": "2006-2011 Honda Civic Coupe 2-DR Left End Cap Cowl Windshield Cowl OEM",
    "price": "$19.00",
    "url": "https://www.ebay.com/itm/357850676412",
    "image": "/products/357850676412.webp"
  },
  {
    "id": "355419226097",
    "title": "98-01 Acura Integra Front Left Right Sunvisor Sun Visor Set OEM TAN DC2 DC4 DB",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/355419226097",
    "image": "/products/355419226097.webp"
  },
  {
    "id": "356539670324",
    "title": "99-00 HONDA CIVIC COUPE - DRIVER SIDE - INNER TRUNK TAIL LIGHT LAMP OEM",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/356539670324",
    "image": "/products/356539670324.webp"
  },
  {
    "id": "357737017798",
    "title": "Interior Door Handle Silver Black LH Driver fit 2006 2011 Honda Civic Coupe OEM",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/357737017798",
    "image": "/products/357737017798.webp"
  },
  {
    "id": "358308037770",
    "title": "1997-2001 HONDA CRV CR-V FRONT REAR HEAD HEADREST TOP CLOTH GRAY OEM #1",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/358308037770",
    "image": "/products/358308037770.webp"
  },
  {
    "id": "357447400432",
    "title": "97-01 Honda CR-V LX Side View Mirror Power Black OEM PASSENGER R",
    "price": "$35.00",
    "url": "https://www.ebay.com/itm/357447400432",
    "image": "/products/357447400432.webp"
  },
  {
    "id": "357850673625",
    "title": "2006-2011 Honda Civic Coupe 2-DR Right End Cap Cowl Windshield Cowl OEM",
    "price": "$19.00",
    "url": "https://www.ebay.com/itm/357850673625",
    "image": "/products/357850673625.webp"
  },
  {
    "id": "357736975469",
    "title": "2006-2011 Honda Civic Si K20z3 Manual Transmission Shifter Assembly OEM 6 Speed",
    "price": "$45.00",
    "url": "https://www.ebay.com/itm/357736975469",
    "image": "/products/357736975469.webp"
  },
  {
    "id": "356301821195",
    "title": "04-08 ACURA TSX RADIO SPEAKER SOUND AMPLIFIER AMP OEM 39186-SEC-A020-M1",
    "price": "$29.00",
    "url": "https://www.ebay.com/itm/356301821195",
    "image": "/products/356301821195.webp"
  },
  {
    "id": "357692939140",
    "title": "OEM 94-01 Acura Integra DC ST7 lower driver side hood latch kick panel cover",
    "price": "$18.00",
    "url": "https://www.ebay.com/itm/357692939140",
    "image": "/products/357692939140.webp"
  },
  {
    "id": "356315822211",
    "title": "Acura Tsx 04-08 Interior Plastic Garnish Cover Door Mirror Set Left Right",
    "price": "$39.89",
    "url": "https://www.ebay.com/itm/356315822211",
    "image": "/products/356315822211.webp"
  },
  {
    "id": "357372629238",
    "title": "1994 ACURA INTEGRA WINDSHIELD WASHER RESERVOIR OEM",
    "price": "$25.00",
    "url": "https://www.ebay.com/itm/357372629238",
    "image": "/products/357372629238.webp"
  },
  {
    "id": "357692953018",
    "title": "Upper Radiator Support For 2006-2011 Honda Civic Coupe OEM SI",
    "price": "$49.00",
    "url": "https://www.ebay.com/itm/357692953018",
    "image": "/products/357692953018.webp"
  },
  {
    "id": "357166917461",
    "title": "94-01 ACURA INTEGRA - KNEE TRIM UNDER STEERING COLUMN LOWER COVER TAN OEM",
    "price": "$39.00",
    "url": "https://www.ebay.com/itm/357166917461",
    "image": "/products/357166917461.webp"
  },
  {
    "id": "356315811467",
    "title": "04-08 ACURA TSX Sunroof Moonroof VSA Off Control Switch F2539",
    "price": "$30.00",
    "url": "https://www.ebay.com/itm/356315811467",
    "image": "/products/356315811467.webp"
  },
  {
    "id": "355305052303",
    "title": "94-01 ACURA INTEGRA REAR BACK SPEAKER GRILL COVER LEFT RIGHT SET BLACK 2DR OEM",
    "price": "$20.00",
    "url": "https://www.ebay.com/itm/355305052303",
    "image": "/products/355305052303.webp"
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
  const vehicle = cleaned.match(/(?:Honda|Acura|Mazda)\s+(?:Civic|Integra|CR-?V|CRX|TSX|RSX|Prelude|Del Sol|Miata)/i)?.[0]
  const platform = cleaned.match(/\b(?:B16|B18|B20|B Series|K20|K24|K-series|DC2|DC4|DB8|EG6|EG9|EJ1|EK4|EM1|FG2|CU2|CL9|EF|RD1)\b/i)?.[0]
  return [year, vehicle, platform].filter(Boolean).join(' · ') || 'Verify exact vehicle and configuration in the eBay listing'
}

export const products: Product[] = source.map((item) => ({
  ...item,
  category: categorize(item.title),
  fitment: fitment(item.title),
  condition: /\bnew\b/i.test(item.title) ? 'New' : /\bused\b/i.test(item.title) ? 'Used' : 'See listing',
}))

export const CATALOG_PAGE_COUNT = 3

export function paginateCatalog<T>(items: readonly T[], requestedPage: number, pageCount = CATALOG_PAGE_COUNT) {
  const requestedPages = Math.max(1, pageCount)
  const size = Math.ceil(items.length / requestedPages) || 1
  const pages = Math.max(1, Math.ceil(items.length / size) || 1)
  const page = Math.min(pages, Math.max(1, requestedPage))
  const start = (page - 1) * size
  return {
    page,
    pageCount: pages,
    pageSize: size,
    items: items.slice(start, start + size),
  }
}

export const categories: Category[] = [
  'Engine & Performance',
  'Electronics & Controls',
  'Interior & Trim',
  'Exterior & Lighting',
  'Mounts & Hardware',
]
