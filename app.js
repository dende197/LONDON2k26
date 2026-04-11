/* ══════════════════════════════════════════════════════════════
   LONDON 2026 · Travel Companion — App Logic
   ══════════════════════════════════════════════════════════════ */

const euroRate = 1.17;

/* ── TRIP DATA (from the travel document) ─────────────────── */
const tripData = {
  departure: new Date('2026-04-23T06:35:00+02:00'),
  returnDate: new Date('2026-04-27T17:45:00+01:00'),
  totalCost: 3000,
  deposit: 850,
  balance: 2150,
  travelers: 4,
  nights: 4,
  baggage: '4 zainetti, 3 trolley a mano'
};

/* ── FLIGHTS ──────────────────────────────────────────────── */
const flightsData = [
  {
    type: 'Andata',
    date: '23 Aprile 2026',
    from: { city: 'Napoli', code: 'NAP', time: '06:35' },
    to: { city: 'Londra', code: 'STN', time: '08:25' },
    duration: '2h 50m',
    baggage: tripData.baggage,
    tags: ['Ryanair / EasyJet', 'Stansted Airport']
  },
  {
    type: 'Ritorno',
    date: '27 Aprile 2026',
    from: { city: 'Londra', code: 'STN', time: '17:45' },
    to: { city: 'Napoli', code: 'NAP', time: '21:25' },
    duration: '2h 40m',
    baggage: tripData.baggage,
    tags: ['Stansted Airport', 'Transfer privato MPV']
  }
];

/* ── HOTEL ────────────────────────────────────────────────── */
const hotelData = {
  name: 'Hilton London Metropole',
  stars: 4,
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
  checkIn: '23 Aprile 2026',
  checkOut: '27 Aprile 2026',
  nights: 4,
  room: 'Two Queen Beds · Superior Room',
  roomDetail: 'Camera spaziosa 30 mq · Piano alto · Area lavoro',
  treatment: 'Pernottamento e prima colazione',
  address: 'Edgware Road, Paddington, London W2',
  transfer: "Transfer privato MPV dall'aeroporto di Stansted all'hotel",
  insurance: 'Medico, bagaglio, annullamento + garanzia cancellazione voli',
  gmaps: 'https://maps.google.com/?q=Hilton+London+Metropole',
  appleMaps: 'https://maps.apple.com/?q=Hilton+London+Metropole'
};

/* ── INFOPOINTS ───────────────────────────────────────────── */
const infoPointsData = [
  {
    icon: '🛂',
    title: 'Passaporto Obbligatorio',
    text: 'Per entrare nel Regno Unito dopo Brexit è necessario il passaporto. Carta d\'identità non accettata.',
    badge: 'Obbligatorio',
    badgeType: 'required',
    priority: 'high'
  },
  {
    icon: '📋',
    title: 'Visto ETA',
    text: 'UK Electronic Travel Authorisation obbligatorio. Richiedi online almeno 72 ore prima della partenza. Costo: £10 a persona.',
    badge: 'Obbligatorio',
    badgeType: 'required',
    priority: 'high'
  },
  {
    icon: '🔌',
    title: 'Adattatore UK',
    text: 'Le prese elettriche UK sono tipo G (tre pin). Porta un adattatore universale per caricare i dispositivi.',
    badge: 'Necessario',
    badgeType: 'required',
    priority: 'med'
  },
  {
    icon: '💳',
    title: 'Pagamenti Contactless',
    text: 'Usa carte contactless direttamente ai tornelli della metro: il cap giornaliero si applica in automatico. Accettate ovunque.',
    badge: 'Consiglio',
    badgeType: 'tip',
    priority: 'med'
  },
  {
    icon: '🛡️',
    title: 'Assicurazione Viaggio',
    text: 'Copertura medica, bagaglio, annullamento e garanzia cancellazione voli inclusa nel pacchetto.',
    badge: 'Inclusa',
    badgeType: 'info',
    priority: 'low'
  },
  {
    icon: '☁️',
    title: 'Meteo Aprile',
    text: 'Temperature: 8–15°C. Piogge frequenti ma brevi. Vesti a strati con giacca impermeabile leggera.',
    badge: 'Info',
    badgeType: 'info',
    priority: 'low'
  },
  {
    icon: '📱',
    title: 'Roaming Dati',
    text: 'Verifica il tuo piano roaming. Alcune app mappe funzionano offline: scarica la mappa di Londra prima di partire.',
    badge: 'Consiglio',
    badgeType: 'tip',
    priority: 'low'
  },
  {
    icon: '⏰',
    title: 'Fuso Orario',
    text: 'UK è GMT+1 (BST) ad aprile, stessa ora dell\'Italia. Nessun jet lag!',
    badge: 'Info',
    badgeType: 'info',
    priority: 'low'
  }
];

/* ── DAY PLAN ─────────────────────────────────────────────── */
const dayPlanData = [
  {
    num: 1,
    date: '23 Apr · Giovedì',
    title: 'Arrivo a Londra',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    focus: 'Transfer, check-in e prime esplorazioni',
    items: ['Arrivo Stansted ore 08:25', 'Transfer privato MPV → Hotel', 'Check-in Hilton Metropole', 'Free Tour Londra ore 14:30', 'Soho & Covent Garden serale'],
    transport: 'Transfer + camminata',
    distance: '~7 km',
    moveTime: '45–70 min',
    budget: '£45–£70'
  },
  {
    num: 2,
    date: '24 Apr · Venerdì',
    title: 'Westminster & Monumenti Iconici',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80',
    focus: 'I simboli di Londra',
    items: ['Trafalgar Square', 'Buckingham Palace (Cambio della Guardia)', 'St James\'s Park', 'Westminster Abbey', 'Big Ben & Houses of Parliament', 'London Eye area'],
    transport: 'A piedi + Tube',
    distance: '~8 km',
    moveTime: '40–55 min',
    budget: '£35–£65'
  },
  {
    num: 3,
    date: '25 Apr · Sabato',
    title: 'Musei, Covent Garden & Camden',
    img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80',
    focus: 'Cultura, misteri e street market',
    items: ['Natural History Museum o V&A (gratuiti)', 'South Kensington', 'Free Tour Misteri Covent Garden ore 15:00', 'Camden Town serale'],
    transport: 'Tube',
    distance: '~9 km',
    moveTime: '55–75 min',
    budget: '£40–£75'
  },
  {
    num: 4,
    date: '26 Apr · Domenica',
    title: 'Tower & City Skyline',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    focus: 'Storia, panorami e fotografia',
    items: ['Tower of London', 'Tower Bridge', 'St Paul\'s Cathedral', 'Sky Garden (gratuito con prenotazione)', 'Borough Market per pranzo'],
    transport: 'Tube + passeggiata lungo il Tamigi',
    distance: '~10 km',
    moveTime: '60–80 min',
    budget: '£55–£95'
  },
  {
    num: 5,
    date: '27 Apr · Lunedì',
    title: 'Notting Hill & Rientro',
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    focus: 'Ultime tappe prima del volo',
    items: ['Portobello Road Market', 'Brunch a Notting Hill', 'Kensington Gardens / Hyde Park', 'Rientro hotel & checkout', 'Transfer → Stansted Airport', 'Volo 17:45 → Napoli 21:25'],
    transport: 'Tube + Transfer',
    distance: '~6 km',
    moveTime: '35–60 min',
    budget: '£35–£75'
  }
];

/* ── ATTRACTIONS ──────────────────────────────────────────── */
const attractionsData = [
  {
    name: 'Tower of London',
    img: 'https://images.unsplash.com/photo-1586277060690-b94100d8d5c9?w=600&q=80',
    cost: 34.80,
    costEur: 40.72,
    distanceKm: 4.1,
    moveTime: '20–25 min',
    transport: 'District/Circle · Tower Hill',
    tip: 'Prenota fascia 09:00–10:00 per evitare folla',
    gmaps: 'https://maps.google.com/?q=Tower+of+London',
    appleMaps: 'https://maps.apple.com/?q=Tower+of+London'
  },
  {
    name: 'London Eye',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    cost: 29,
    costEur: 33.93,
    distanceKm: 1.2,
    moveTime: '10–15 min',
    transport: 'Waterloo / Westminster station',
    tip: 'Biglietto online scontato, al tramonto è magico',
    gmaps: 'https://maps.google.com/?q=London+Eye',
    appleMaps: 'https://maps.apple.com/?q=London+Eye'
  },
  {
    name: 'Westminster Abbey',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80',
    cost: 29,
    costEur: 33.93,
    distanceKm: 0.8,
    moveTime: '8–12 min',
    transport: 'Westminster / St James\'s Park',
    tip: 'Audio guida inclusa nel biglietto',
    gmaps: 'https://maps.google.com/?q=Westminster+Abbey',
    appleMaps: 'https://maps.apple.com/?q=Westminster+Abbey'
  },
  {
    name: "St Paul's Cathedral",
    img: 'https://images.unsplash.com/photo-1584452492747-02f6c3b9fc3b?w=600&q=80',
    cost: 26,
    costEur: 30.42,
    distanceKm: 2.2,
    moveTime: '15–20 min',
    transport: "Central line · St Paul's",
    tip: 'Salire sulla cupola al tramonto',
    gmaps: "https://maps.google.com/?q=St+Paul's+Cathedral+London",
    appleMaps: "https://maps.apple.com/?q=St+Paul's+Cathedral+London"
  },
  {
    name: 'Sky Garden',
    img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80',
    cost: 0,
    costEur: 0,
    distanceKm: 3.5,
    moveTime: '18–25 min',
    transport: 'Monument / Bank station',
    tip: 'GRATUITO ma slot obbligatorio — prenota in anticipo!',
    gmaps: 'https://maps.google.com/?q=Sky+Garden+London',
    appleMaps: 'https://maps.apple.com/?q=Sky+Garden+London'
  },
  {
    name: 'Natural History Museum',
    img: 'https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=600&q=80',
    cost: 0,
    costEur: 0,
    distanceKm: 3.0,
    moveTime: '20–30 min',
    transport: 'South Kensington station',
    tip: 'Gratuito! Dinosauri e minerali incredibili',
    gmaps: 'https://maps.google.com/?q=Natural+History+Museum+London',
    appleMaps: 'https://maps.apple.com/?q=Natural+History+Museum+London'
  }
];

/* ── TRANSPORT COSTS ──────────────────────────────────────── */
const transportCostsData = [
  {
    icon: '🚇',
    title: 'Tube / Bus Contactless',
    detail: 'Zona 1–2 cap giornaliero automatico',
    cost: '£8.50 / giorno',
    tip: 'Evita ora di punta 08:00–09:30 e 17:00–18:30'
  },
  {
    icon: '🚌',
    title: 'Bus',
    detail: 'Corsa singola o giornaliero',
    cost: '£1.75 / corsa',
    tip: 'Cap giornaliero bus: £5.25. Paga solo contactless.'
  },
  {
    icon: '🚶',
    title: 'A Piedi',
    detail: 'Molte aree centrali sono vicinissime',
    cost: '£0',
    tip: 'Westminster ↔ Covent Garden: ~30 min a piedi, panoramico!'
  },
  {
    icon: '🚕',
    title: 'Taxi / Uber',
    detail: 'Per tragitti notturni o con bagagli',
    cost: '£10–£30',
    tip: 'Uber è legale e più economico dei Black Cab'
  }
];

/* ── AIRPORT TRANSFER ─────────────────────────────────────── */
const airportTransferData = [
  {
    icon: '✈️',
    airport: 'Stansted (STN)',
    options: 'Transfer privato MPV (incluso nel pacchetto)',
    time: '60–80 min',
    cost: 'Incluso',
    highlight: true
  },
  {
    icon: '🚂',
    airport: 'Stansted Express',
    options: 'Treno → Liverpool Street Station',
    time: '48–55 min',
    cost: '£16–£23'
  },
  {
    icon: '🚌',
    airport: 'National Express',
    options: 'Bus → Victoria Station',
    time: '75–90 min',
    cost: '£8–£14'
  }
];

/* ── MAP POINTS ───────────────────────────────────────────── */
const mapPointsData = [
  { icon: '🏨', name: 'Hilton London Metropole (Hotel)', area: 'Paddington · W2', gmaps: 'https://maps.google.com/?q=Hilton+London+Metropole', appleMaps: 'https://maps.apple.com/?q=Hilton+London+Metropole' },
  { icon: '🗽', name: 'Trafalgar Square', area: 'West End', gmaps: 'https://maps.google.com/?q=Trafalgar+Square+London', appleMaps: 'https://maps.apple.com/?q=Trafalgar+Square+London' },
  { icon: '👑', name: 'Buckingham Palace', area: 'Westminster', gmaps: 'https://maps.google.com/?q=Buckingham+Palace+London', appleMaps: 'https://maps.apple.com/?q=Buckingham+Palace+London' },
  { icon: '🕐', name: 'Big Ben & Parliament', area: 'Westminster', gmaps: 'https://maps.google.com/?q=Big+Ben+London', appleMaps: 'https://maps.apple.com/?q=Big+Ben+London' },
  { icon: '🎡', name: 'London Eye', area: 'South Bank', gmaps: 'https://maps.google.com/?q=London+Eye', appleMaps: 'https://maps.apple.com/?q=London+Eye' },
  { icon: '🏰', name: 'Tower of London', area: 'City', gmaps: 'https://maps.google.com/?q=Tower+of+London', appleMaps: 'https://maps.apple.com/?q=Tower+of+London' },
  { icon: '🌉', name: 'Tower Bridge', area: 'City', gmaps: 'https://maps.google.com/?q=Tower+Bridge+London', appleMaps: 'https://maps.apple.com/?q=Tower+Bridge+London' },
  { icon: '✈️', name: 'Stansted Airport', area: 'Transfer', gmaps: 'https://maps.google.com/?q=London+Stansted+Airport', appleMaps: 'https://maps.apple.com/?q=London+Stansted+Airport' }
];

/* ── FOOD ZONES ───────────────────────────────────────────── */
const hotelZonesData = [
  {
    zone: 'Paddington / Edgware Road (zona hotel)',
    transfer: 'Vicinissimo all\'hotel Hilton Metropole. Bakerloo, Circle, Hammersmith & City.',
    places: [
      { name: 'The Beehive Pub', type: 'Pub tradizionale inglese', avgCost: '£12–18', walk: '5 min' },
      { name: 'Satay House', type: 'Cucina Malese – Ottimo rapporto qualità/prezzo', avgCost: '£14–22', walk: '3 min' },
      { name: 'Maroush Express', type: 'Libanese fast casual', avgCost: '£10–16', walk: '6 min' },
      { name: 'Hereford Road', type: 'Ristorante brittannico moderno', avgCost: '£22–35', walk: '10 min' }
    ]
  },
  {
    zone: 'Westminster / Victoria',
    transfer: 'District, Circle, Victoria line. Zona monumenti.',
    places: [
      { name: 'Regency Café', type: 'Breakfast UK autentico', avgCost: '£8–12', walk: '8–12 min metro' },
      { name: 'Flat Iron Victoria', type: 'Steak casual – filetto a prezzo fisso', avgCost: '£18–25', walk: '10–15 min metro' },
      { name: 'Dishoom Carnaby', type: 'Indiano moderno premium', avgCost: '£20–30', walk: '15–20 min metro' }
    ]
  },
  {
    zone: 'Covent Garden / Soho',
    transfer: 'Zona walking distance, ricca di ristoranti.',
    places: [
      { name: 'Flat Iron Covent Garden', type: 'Steak house accessibile', avgCost: '£15–22', walk: '20 min metro' },
      { name: 'Dishoom Covent Garden', type: 'Brunch / Cena indiana premium', avgCost: '£18–28', walk: '20 min metro' },
      { name: 'Five Guys', type: 'Burger fast premium', avgCost: '£12–18', walk: '20 min metro' }
    ]
  }
];

/* ── CHECKLIST ────────────────────────────────────────────── */
const checklistData = [
  { text: 'Passaporto in corso di validità', icon: '🛂' },
  { text: 'Visto ETA UK richiesto e approvato', icon: '📋' },
  { text: 'Assicurazione viaggio attiva', icon: '🛡️' },
  { text: 'Carta contactless (abilitata all\'estero)', icon: '💳' },
  { text: 'Adattatore presa UK tipo G', icon: '🔌' },
  { text: 'Prenotazioni: Tower, Eye, Sky Garden', icon: '🎫' },
  { text: 'Outfit a strati + giacca impermeabile', icon: '🧥' },
  { text: 'Power bank carico', icon: '🔋' },
  { text: 'App mappe offline (Google Maps, Citymapper)', icon: '📱' },
  { text: 'Numeri emergenza UK salvati', icon: '🆘' }
];

/* ── BUDGET ESTIMATES ─────────────────────────────────────── */
const estimateData = [
  { category: 'Attrazioni a pagamento', min: 0, max: 0, note: 'Tower + Eye + Westminster + St Paul\'s', syncWithAttractions: true, icon: '🎫' },
  { category: 'Trasporti locali (5 gg)', min: 45, max: 65, note: 'Cap giornaliero contactless Z1-2', icon: '🚇' },
  { category: 'Pasti e bevande', min: 120, max: 200, note: 'Colazione inclusa in hotel', icon: '🍽️' },
  { category: 'Free Tour + mance', min: 20, max: 40, note: '2 free tour × £10–20 mancia', icon: '🗣️' },
  { category: 'Souvenir & extra', min: 20, max: 50, note: 'Shopping, snack, piccoli acquisti', icon: '🛍️' }
];

/* ── GALLERY ──────────────────────────────────────────────── */
const galleryData = [
  { label: 'Tower Bridge', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80' },
  { label: 'Big Ben & Westminster', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=80' },
  { label: 'London Eye', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
  { label: 'Covent Garden', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
  { label: 'Camden Market', img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=700&q=80' },
  { label: 'Notting Hill', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80' },
  { label: "St Paul's Cathedral", img: 'https://images.unsplash.com/photo-1584452492747-02f6c3b9fc3b?w=700&q=80' },
  { label: 'Skyline City of London', img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&q=80' },
  { label: 'Buckingham Palace', img: 'https://images.unsplash.com/photo-1549778884-25b52d37b4de?w=700&q=80' },
  { label: 'Hyde Park', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80' },
  { label: 'South Bank al tramonto', img: 'https://images.unsplash.com/photo-1533929736168-ef0b9fe27ba9?w=700&q=80' },
  { label: 'Borough Market', img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&q=80' }
];

/* ═══════════════════════════════════════════════════════════
   RENDER FUNCTIONS
   ═══════════════════════════════════════════════════════════ */

function formatGbp(value) {
  return value === 0 ? 'Gratis' : `£${value.toFixed(2)}`;
}

/* ── Countdown ────────────────────────────────────────────── */
function updateCountdown() {
  const now = new Date();
  const diff = tripData.departure - now;

  if (diff <= 0) {
    document.getElementById('countDays').textContent = '🎉';
    document.getElementById('countHours').textContent = '';
    document.getElementById('countMins').textContent = '';
    document.getElementById('countSecs').textContent = '';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById('countDays').textContent = days;
  document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('countMins').textContent = String(mins).padStart(2, '0');
  document.getElementById('countSecs').textContent = String(secs).padStart(2, '0');
}

/* ── Hero Stats ───────────────────────────────────────────── */
function renderHeroStats() {
  const el = document.getElementById('heroStats');
  const stats = [
    { label: 'Viaggiatori', value: '4' },
    { label: 'Notti', value: '4' },
    { label: 'Distanza media', value: '8 km/gg' },
    { label: 'Pacchetto', value: '€3.000' }
  ];

  el.innerHTML = stats.map(s => `
    <div class="hero-stat">
      <span class="hero-stat-value">${s.value}</span>
      <span class="hero-stat-label">${s.label}</span>
    </div>
  `).join('');
}

/* ── Infopoint ────────────────────────────────────────────── */
function renderInfoGrid() {
  const el = document.getElementById('infoGrid');
  el.innerHTML = infoPointsData.map(info => `
    <article class="info-card priority-${info.priority} animate-in">
      <span class="info-card-icon">${info.icon}</span>
      <h3 class="info-card-title">${info.title}</h3>
      <p class="info-card-text">${info.text}</p>
      <span class="info-card-badge badge-${info.badgeType}">${info.badge}</span>
    </article>
  `).join('');
}

/* ── Flights ──────────────────────────────────────────────── */
function renderFlights() {
  const el = document.getElementById('flights');
  el.innerHTML = flightsData.map(f => `
    <article class="flight-card animate-in">
      <div class="flight-endpoint">
        <div class="flight-city">${f.from.city}</div>
        <div class="flight-code">${f.from.code}</div>
        <div class="flight-time">${f.from.time}</div>
      </div>
      <div class="flight-middle">
        <div class="flight-date">${f.date}</div>
        <div class="flight-line"></div>
        <div class="flight-duration">${f.type} · ${f.duration}</div>
      </div>
      <div class="flight-endpoint">
        <div class="flight-city">${f.to.city}</div>
        <div class="flight-code">${f.to.code}</div>
        <div class="flight-time">${f.to.time}</div>
      </div>
      <div class="flight-info-strip">
        <span class="flight-tag">🧳 ${f.baggage}</span>
        ${f.tags.map(t => `<span class="flight-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ── Hotel ────────────────────────────────────────────────── */
function renderHotel() {
  const el = document.getElementById('hotelCard');
  const h = hotelData;
  el.innerHTML = `
    <article class="hotel-main animate-in">
      <div class="hotel-img-wrap">
        <img src="${h.image}" alt="${h.name}" loading="lazy" onerror="this.parentElement.style.background='var(--surface)'" />
        <div class="hotel-img-overlay">
          <div class="hotel-stars">${'⭐'.repeat(h.stars)}</div>
          <h3 class="hotel-name">${h.name}</h3>
        </div>
      </div>
      <div class="hotel-body">
        <div class="hotel-detail-grid">
          <div class="hotel-detail">
            <span class="hotel-detail-icon">📅</span>
            <div>
              <div class="hotel-detail-label">Check-in / out</div>
              <div class="hotel-detail-value">${h.checkIn} → ${h.checkOut}</div>
            </div>
          </div>
          <div class="hotel-detail">
            <span class="hotel-detail-icon">🛏️</span>
            <div>
              <div class="hotel-detail-label">Camera</div>
              <div class="hotel-detail-value">${h.room}</div>
            </div>
          </div>
          <div class="hotel-detail">
            <span class="hotel-detail-icon">📐</span>
            <div>
              <div class="hotel-detail-label">Dettagli</div>
              <div class="hotel-detail-value">${h.roomDetail}</div>
            </div>
          </div>
          <div class="hotel-detail">
            <span class="hotel-detail-icon">🍳</span>
            <div>
              <div class="hotel-detail-label">Trattamento</div>
              <div class="hotel-detail-value">${h.treatment}</div>
            </div>
          </div>
          <div class="hotel-detail">
            <span class="hotel-detail-icon">🚐</span>
            <div>
              <div class="hotel-detail-label">Transfer</div>
              <div class="hotel-detail-value">${h.transfer}</div>
            </div>
          </div>
          <div class="hotel-detail">
            <span class="hotel-detail-icon">🛡️</span>
            <div>
              <div class="hotel-detail-label">Assicurazione</div>
              <div class="hotel-detail-value">${h.insurance}</div>
            </div>
          </div>
        </div>
        <div class="hotel-map-actions">
          <a class="map-btn google" href="${h.gmaps}" target="_blank" rel="noreferrer">
            <span class="map-btn-icon">📍</span> Google Maps
          </a>
          <a class="map-btn apple" href="${h.appleMaps}" target="_blank" rel="noreferrer">
            <span class="map-btn-icon">🗺️</span> Apple Maps
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ── Day Timeline ─────────────────────────────────────────── */
function renderDayTimeline() {
  const el = document.getElementById('dayTimeline');
  el.innerHTML = dayPlanData.map(day => `
    <article class="day-card animate-in">
      <div class="day-card-img">
        <img src="${day.img}" alt="${day.title}" loading="lazy" onerror="this.parentElement.style.display='none'" />
        <div class="day-card-num">${day.num}</div>
      </div>
      <div class="day-card-body">
        <span class="day-date-badge">📅 ${day.date}</span>
        <h3 class="day-card-title">${day.title}</h3>
        <p class="day-card-focus">${day.focus}</p>
        <div class="day-activities">
          ${day.items.map(item => `<span class="day-activity">${item}</span>`).join('')}
        </div>
        <div class="day-meta">
          <span class="day-meta-tag transport">🚇 ${day.transport}</span>
          <span class="day-meta-tag distance">📏 ${day.distance}</span>
          <span class="day-meta-tag time">⏱️ ${day.moveTime}</span>
          <span class="day-meta-tag budget">💰 ${day.budget}</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── Attractions ──────────────────────────────────────────── */
function renderAttractions() {
  const el = document.getElementById('attractionsGrid');
  el.innerHTML = attractionsData.map(a => `
    <article class="attraction-card animate-in">
      <div class="attraction-img">
        <img src="${a.img}" alt="${a.name}" loading="lazy" onerror="this.parentElement.style.background='var(--surface)'" />
        <span class="attraction-price-badge ${a.cost === 0 ? 'free' : ''}">
          ${a.cost === 0 ? '🆓 Gratis' : `£${a.cost.toFixed(0)} · €${a.costEur.toFixed(0)}`}
        </span>
      </div>
      <div class="attraction-body">
        <h3 class="attraction-name">${a.name}</h3>
        <div class="attraction-meta">
          <span class="attr-tag">📏 ${a.distanceKm} km dal centro</span>
          <span class="attr-tag">⏱️ ${a.moveTime}</span>
          <span class="attr-tag">🚇 ${a.transport}</span>
        </div>
        <p class="attraction-tip">💡 ${a.tip}</p>
        <div class="attraction-actions">
          <a class="map-btn google" href="${a.gmaps}" target="_blank" rel="noreferrer">
            <span class="map-btn-icon">📍</span> Maps
          </a>
          <a class="map-btn apple" href="${a.appleMaps}" target="_blank" rel="noreferrer">
            <span class="map-btn-icon">🗺️</span> Apple
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── Map POIs ─────────────────────────────────────────────── */
function renderPOI() {
  const el = document.getElementById('poiGrid');
  el.innerHTML = mapPointsData.map(p => `
    <article class="poi-card animate-in">
      <div class="poi-icon">${p.icon}</div>
      <div class="poi-info">
        <div class="poi-name">${p.name}</div>
        <div class="poi-area">${p.area}</div>
      </div>
      <div class="poi-links">
        <a class="poi-link" href="${p.gmaps}" target="_blank" rel="noreferrer" title="Google Maps">📍</a>
        <a class="poi-link" href="${p.appleMaps}" target="_blank" rel="noreferrer" title="Apple Maps">🗺️</a>
      </div>
    </article>
  `).join('');
}

/* ── Transport ────────────────────────────────────────────── */
function renderTransport() {
  const el = document.getElementById('transportGrid');
  el.innerHTML = transportCostsData.map(t => `
    <article class="transport-card animate-in">
      <div class="transport-icon">${t.icon}</div>
      <h3 class="transport-title">${t.title}</h3>
      <p class="transport-detail">${t.detail}</p>
      <span class="transport-cost">${t.cost}</span>
      <p class="transport-tip">💡 ${t.tip}</p>
    </article>
  `).join('');
}

function renderAirportTransfer() {
  const el = document.getElementById('airportGrid');
  el.innerHTML = airportTransferData.map(a => `
    <article class="airport-card animate-in" ${a.highlight ? 'style="border-color: rgba(48,209,88,0.25); box-shadow: 0 0 20px rgba(48,209,88,0.08);"' : ''}>
      <h3 class="airport-name">${a.icon} ${a.airport}</h3>
      <p class="airport-options">${a.options}</p>
      <div class="airport-stats">
        <span class="airport-stat time">⏱️ ${a.time}</span>
        <span class="airport-stat cost">💰 ${a.cost}</span>
      </div>
    </article>
  `).join('');
}

/* ── Food ─────────────────────────────────────────────────── */
function renderFoodZones() {
  const select = document.getElementById('zoneSelect');
  select.innerHTML = hotelZonesData.map((z, i) => `<option value="${i}">${z.zone}</option>`).join('');
  renderFoodGrid(0);
  select.addEventListener('change', (e) => renderFoodGrid(Number(e.target.value)));
}

function renderFoodGrid(zoneIndex) {
  const zone = hotelZonesData[zoneIndex];
  const el = document.getElementById('foodGrid');
  el.innerHTML = zone.places.map(p => `
    <article class="food-card animate-in">
      <h3 class="food-name">${p.name}</h3>
      <p class="food-type">${p.type}</p>
      <div class="food-meta">
        <span class="food-tag">💰 ${p.avgCost}</span>
        <span class="food-tag">🚶 ${p.walk}</span>
      </div>
    </article>
  `).join('');
  observeAnimations();
}

/* ── Checklist ────────────────────────────────────────────── */
function renderChecklist() {
  const storageKey = 'london2026-checklist-v3';
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const el = document.getElementById('checklistContainer');

  el.innerHTML = checklistData.map((item, idx) => {
    const checked = Boolean(saved[idx]);
    return `
      <label class="check-item ${checked ? 'done' : ''} animate-in">
        <input type="checkbox" class="check-input" data-id="${idx}" ${checked ? 'checked' : ''} />
        <span class="check-text">${item.text}</span>
        <span class="check-icon">${item.icon}</span>
      </label>
    `;
  }).join('');

  el.querySelectorAll('.check-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      saved[id] = e.target.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
      e.target.closest('.check-item').classList.toggle('done', e.target.checked);
    });
  });
}

/* ── Budget ────────────────────────────────────────────────── */
function renderBudget() {
  const heroEl = document.getElementById('budgetHero');
  const breakdownEl = document.getElementById('budgetBreakdown');

  const attractionTotal = attractionsData.reduce((sum, a) => sum + a.cost, 0);
  const dynamicEstimate = estimateData.map(item =>
    item.syncWithAttractions ? { ...item, min: attractionTotal, max: attractionTotal } : item
  );

  const totalMin = dynamicEstimate.reduce((sum, item) => sum + item.min, 0);
  const totalMax = dynamicEstimate.reduce((sum, item) => sum + item.max, 0);

  heroEl.innerHTML = `
    <article class="budget-total-card trip animate-in">
      <div class="budget-card-label">Pacchetto Viaggio (Hotel + Voli + Transfer + Assicurazione)</div>
      <div class="budget-card-amount gradient">€${tripData.totalCost.toLocaleString('it')}</div>
      <div class="budget-card-sub">Acconto €${tripData.deposit} · Saldo €${tripData.balance.toLocaleString('it')}</div>
    </article>
    <article class="budget-total-card package animate-in">
      <div class="budget-card-label">Spese extra stimate (sul posto)</div>
      <div class="budget-card-amount">£${totalMin.toFixed(0)} – £${totalMax.toFixed(0)}</div>
      <div class="budget-card-sub">≈ €${(totalMin * euroRate).toFixed(0)} – €${(totalMax * euroRate).toFixed(0)} a persona</div>
    </article>
    <article class="budget-total-card flights animate-in">
      <div class="budget-card-label">Attrazioni selezionate</div>
      <div class="budget-card-amount">£${attractionTotal.toFixed(0)}</div>
      <div class="budget-card-sub">≈ €${(attractionTotal * euroRate).toFixed(0)} totale biglietti</div>
    </article>
  `;

  breakdownEl.innerHTML = dynamicEstimate.map(item => `
    <article class="budget-item animate-in">
      <div class="budget-item-cat">${item.icon} ${item.category}</div>
      <div class="budget-item-range">£${item.min.toFixed(0)} – £${item.max.toFixed(0)}</div>
      <div class="budget-item-note">${item.note}</div>
      <div class="budget-item-eur">≈ €${(item.min * euroRate).toFixed(0)} – €${(item.max * euroRate).toFixed(0)}</div>
    </article>
  `).join('');
}

/* ── Gallery ──────────────────────────────────────────────── */
function renderGallery() {
  const el = document.getElementById('galleryMosaic');
  el.innerHTML = galleryData.map(photo => `
    <div class="gallery-item animate-in">
      <img src="${photo.img}" alt="${photo.label}" loading="lazy" onerror="this.parentElement.style.display='none'" />
      <div class="gallery-caption">${photo.label}</div>
    </div>
  `).join('');
}

/* ── Floating particles ───────────────────────────────────── */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 15) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = (1 + Math.random() * 2) + 'px';
    p.style.height = p.style.width;
    p.style.opacity = 0.1 + Math.random() * 0.3;
    container.appendChild(p);
  }
}

/* ── Scroll Spy / Pill Navigation ─────────────────────────── */
function initScrollSpy() {
  const pills = document.querySelectorAll('.pill-container .pill');
  const sectionIds = Array.from(pills).map(p => p.dataset.section).filter(Boolean);

  const visibleSections = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleSections.add(entry.target.id);
      } else {
        visibleSections.delete(entry.target.id);
      }
    });

    const firstVisible = sectionIds.find(id => visibleSections.has(id));
    pills.forEach(pill => {
      const isActive = pill.dataset.section === firstVisible;
      pill.classList.toggle('active', isActive);
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Smooth scroll on pill click
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(pill.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Scroll Animation Observer ────────────────────────────── */
function observeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-in:not(.visible)').forEach(el => observer.observe(el));
}

/* ── PWA Install ──────────────────────────────────────────── */
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  if (installBtn) installBtn.hidden = false;
});

installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}

/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */
function init() {
  renderHeroStats();
  renderInfoGrid();
  renderFlights();
  renderHotel();
  renderDayTimeline();
  renderAttractions();
  renderPOI();
  renderTransport();
  renderAirportTransfer();
  renderFoodZones();
  renderChecklist();
  renderBudget();
  renderGallery();
  createParticles();
  initScrollSpy();
  observeAnimations();

  // Countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
