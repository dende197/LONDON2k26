/* ══════════════════════════════════════════════════════════════
   LONDON 2026 · Travel Companion — App v3
   Multi-page · Leaflet Map · Organized Data
   ══════════════════════════════════════════════════════════════ */

const EUR = 1.17;

/* ── TRIP DATA ────────────────────────────────────────────── */
const TRIP = {
  departure: new Date('2026-04-23T06:35:00+02:00'),
  total: 3000, deposit: 850, balance: 2150,
  travelers: 4, nights: 4,
  baggage: '4 zainetti + 3 trolley a mano'
};

/* ── FLIGHTS ──────────────────────────────────────────────── */
const FLIGHTS = [
  { type:'Andata', date:'23 Aprile 2026', from:{city:'Napoli',code:'NAP',time:'06:35'}, to:{city:'Londra',code:'STN',time:'08:25'}, dur:'2h 50m', tags:['Stansted Airport','Bagagli inclusi'] },
  { type:'Ritorno', date:'27 Aprile 2026', from:{city:'Londra',code:'STN',time:'17:45'}, to:{city:'Napoli',code:'NAP',time:'21:25'}, dur:'2h 40m', tags:['Stansted Airport','Transfer privato MPV'] }
];

/* ── HOTEL ────────────────────────────────────────────────── */
const HOTEL = {
  name:'Hilton London Metropole', stars:4,
  img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
  checkIn:'23 Apr', checkOut:'27 Apr',
  room:'Two Queen Beds · Superior Room',
  detail:'30 mq · Piano alto · Area lavoro',
  treatment:'B&B (pernottamento e colazione)',
  transfer:'Transfer privato MPV Stansted → Hotel',
  insurance:'Medico + bagaglio + annullamento + cancellazione voli',
  gmaps:'https://maps.google.com/?q=Hilton+London+Metropole',
  apple:'https://maps.apple.com/?q=Hilton+London+Metropole',
  lat:51.5175, lng:-0.1717
};

/* ── DOCUMENTS & INFO ─────────────────────────────────────── */
const DOCS = [
  { icon:'🛂', title:'Passaporto', text:'Obbligatorio per il Regno Unito post-Brexit. Carta d\'identità non valida.', badge:'Obbligatorio', type:'red' },
  { icon:'📋', title:'Visto ETA UK', text:'Electronic Travel Authorisation. Richiedi online almeno 72h prima. Costo: £10/persona.', badge:'Obbligatorio', type:'red' },
  { icon:'🔌', title:'Adattatore UK tipo G', text:'Le prese UK sono a tre pin. Porta un adattatore universale.', badge:'Necessario', type:'orange' }
];
const TIPS = [
  { icon:'💳', title:'Contactless ovunque', text:'Paga con carta contactless ai tornelli metro, bus, negozi. Cap giornaliero automatico.', badge:'Consiglio', type:'green' },
  { icon:'☁️', title:'Meteo aprile', text:'8–15°C, piogge brevi. Vesti a strati con giacca impermeabile leggera.', badge:'Info', type:'blue' },
  { icon:'⏰', title:'Fuso orario', text:'UK è GMT+1 (BST) ad aprile — stessa ora dell\'Italia, nessun jet lag!', badge:'Info', type:'blue' },
  { icon:'🛡️', title:'Assicurazione inclusa', text:'Copertura medica, bagaglio, annullamento e cancellazione voli compresa nel pacchetto.', badge:'Inclusa', type:'green' }
];

/* ── DAY PLAN ─────────────────────────────────────────────── */
const DAYS = [
  { n:1, date:'23 Apr · Giovedì', title:'Arrivo a Londra', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', focus:'Transfer, check-in, prime esplorazioni',
    items:['Arrivo STN 08:25','Transfer MPV → Hotel','Check-in Hilton','Free Tour ore 14:30','Soho & Covent Garden'],
    tr:'Transfer + piedi', dist:'~7 km', time:'45–70 min', budget:'£45–70' },
  { n:2, date:'24 Apr · Venerdì', title:'Westminster & Monumenti', img:'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80', focus:'I simboli iconici di Londra',
    items:['Trafalgar Square','Buckingham Palace','St James\'s Park','Westminster Abbey','Big Ben','London Eye'],
    tr:'Piedi + Tube', dist:'~8 km', time:'40–55 min', budget:'£35–65' },
  { n:3, date:'25 Apr · Sabato', title:'Musei & Camden', img:'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80', focus:'Cultura, misteri e street market',
    items:['Natural History Museum','South Kensington','Free Tour Covent Garden 15:00','Camden Town'],
    tr:'Tube', dist:'~9 km', time:'55–75 min', budget:'£40–75' },
  { n:4, date:'26 Apr · Domenica', title:'Tower & City Skyline', img:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80', focus:'Storia, panorami e foto',
    items:['Tower of London','Tower Bridge','St Paul\'s Cathedral','Sky Garden','Borough Market'],
    tr:'Tube + piedi', dist:'~10 km', time:'60–80 min', budget:'£55–95' },
  { n:5, date:'27 Apr · Lunedì', title:'Notting Hill & Rientro', img:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', focus:'Ultime tappe e volo 17:45',
    items:['Portobello Road','Brunch a Notting Hill','Hyde Park','Checkout hotel','Transfer → STN'],
    tr:'Tube + Transfer', dist:'~6 km', time:'35–60 min', budget:'£35–75' }
];

/* ── MAP PLACES (all with coords) ─────────────────────────── */
const PLACES = [
  { icon:'🏨', name:'Hilton London Metropole', cat:'hotel', lat:51.5175, lng:-0.1717, cost:'—', costNum:0, detail:'Il tuo hotel · Paddington W2', color:'#bf5af2',
    gmaps:'https://maps.google.com/?q=Hilton+London+Metropole', apple:'https://maps.apple.com/?q=Hilton+London+Metropole' },
  { icon:'🏰', name:'Tower of London', cat:'attrazione', lat:51.5081, lng:-0.0759, cost:'£35 · €41', costNum:34.8, detail:'Storica fortezza · 4.1 km · 20–25 min Tube', color:'#ff453a',
    gmaps:'https://maps.google.com/?q=Tower+of+London', apple:'https://maps.apple.com/?q=Tower+of+London' },
  { icon:'🎡', name:'London Eye', cat:'attrazione', lat:51.5033, lng:-0.1195, cost:'£29 · €34', costNum:29, detail:'Ruota panoramica · 1.2 km · 10–15 min', color:'#ff453a',
    gmaps:'https://maps.google.com/?q=London+Eye', apple:'https://maps.apple.com/?q=London+Eye' },
  { icon:'⛪', name:'Westminster Abbey', cat:'attrazione', lat:51.4993, lng:-0.1273, cost:'£29 · €34', costNum:29, detail:'Abbazia gotica · 0.8 km · 8–12 min', color:'#ff453a',
    gmaps:'https://maps.google.com/?q=Westminster+Abbey', apple:'https://maps.apple.com/?q=Westminster+Abbey' },
  { icon:'⛪', name:"St Paul's Cathedral", cat:'attrazione', lat:51.5138, lng:-0.0984, cost:'£26 · €30', costNum:26, detail:'Cupola iconica · 2.2 km · 15–20 min', color:'#ff453a',
    gmaps:"https://maps.google.com/?q=St+Paul's+Cathedral+London", apple:"https://maps.apple.com/?q=St+Paul's+Cathedral+London" },
  { icon:'🌿', name:'Sky Garden', cat:'gratuito', lat:51.5113, lng:-0.0836, cost:'Gratis', costNum:0, detail:'Giardino panoramico · Prenotazione obbligatoria', color:'#30d158',
    gmaps:'https://maps.google.com/?q=Sky+Garden+London', apple:'https://maps.apple.com/?q=Sky+Garden+London' },
  { icon:'🦕', name:'Natural History Museum', cat:'gratuito', lat:51.4967, lng:-0.1764, cost:'Gratis', costNum:0, detail:'Museo gratuito · South Kensington', color:'#30d158',
    gmaps:'https://maps.google.com/?q=Natural+History+Museum+London', apple:'https://maps.apple.com/?q=Natural+History+Museum+London' },
  { icon:'🗽', name:'Trafalgar Square', cat:'landmark', lat:51.5080, lng:-0.1281, cost:'Gratis', costNum:0, detail:'Punto start Free Tour · West End', color:'#0a84ff',
    gmaps:'https://maps.google.com/?q=Trafalgar+Square+London', apple:'https://maps.apple.com/?q=Trafalgar+Square+London' },
  { icon:'👑', name:'Buckingham Palace', cat:'landmark', lat:51.5014, lng:-0.1419, cost:'Gratis (esterno)', costNum:0, detail:'Cambio della Guardia · Westminster', color:'#0a84ff',
    gmaps:'https://maps.google.com/?q=Buckingham+Palace+London', apple:'https://maps.apple.com/?q=Buckingham+Palace+London' },
  { icon:'🕐', name:'Big Ben', cat:'landmark', lat:51.5007, lng:-0.1246, cost:'Gratis (esterno)', costNum:0, detail:'Elizabeth Tower · Westminster', color:'#0a84ff',
    gmaps:'https://maps.google.com/?q=Big+Ben+London', apple:'https://maps.apple.com/?q=Big+Ben+London' },
  { icon:'🌉', name:'Tower Bridge', cat:'landmark', lat:51.5055, lng:-0.0754, cost:'£12 (mostra)', costNum:12, detail:'Ponte iconico · City of London', color:'#0a84ff',
    gmaps:'https://maps.google.com/?q=Tower+Bridge+London', apple:'https://maps.apple.com/?q=Tower+Bridge+London' },
  { icon:'🛍️', name:'Camden Market', cat:'mercato', lat:51.5413, lng:-0.1470, cost:'Gratis', costNum:0, detail:'Street food & vintage · Camden Town', color:'#ff9f0a',
    gmaps:'https://maps.google.com/?q=Camden+Market+London', apple:'https://maps.apple.com/?q=Camden+Market+London' },
  { icon:'🍓', name:'Borough Market', cat:'mercato', lat:51.5055, lng:-0.0910, cost:'Gratis', costNum:0, detail:'Mercato alimentare storico · Southwark', color:'#ff9f0a',
    gmaps:'https://maps.google.com/?q=Borough+Market+London', apple:'https://maps.apple.com/?q=Borough+Market+London' },
  { icon:'🏡', name:'Notting Hill / Portobello', cat:'mercato', lat:51.5154, lng:-0.2050, cost:'Gratis', costNum:0, detail:'Case colorate & mercatino vintage', color:'#ff9f0a',
    gmaps:'https://maps.google.com/?q=Portobello+Road+London', apple:'https://maps.apple.com/?q=Portobello+Road+London' },
  { icon:'✈️', name:'Stansted Airport', cat:'transfer', lat:51.8860, lng:0.2389, cost:'—', costNum:0, detail:'Aeroporto arrivo/partenza · 60–80 min', color:'#6e6e73',
    gmaps:'https://maps.google.com/?q=London+Stansted+Airport', apple:'https://maps.apple.com/?q=London+Stansted+Airport' }
];

/* ── TRANSPORT COSTS ──────────────────────────────────────── */
const TRANSPORT = [
  { icon:'🚇', title:'Tube (Metro)', detail:'Cap giornaliero zone 1–2', cost:'£8.50/giorno', tip:'Evita 08–09:30 e 17–18:30' },
  { icon:'🚌', title:'Bus', detail:'Corsa singola contactless', cost:'£1.75/corsa', tip:'Cap giornaliero bus: £5.25' },
  { icon:'🚶', title:'A piedi', detail:'Le zone centrali sono molto vicine', cost:'Gratis', tip:'Westminster ↔ Covent Garden: 30 min' },
  { icon:'🚕', title:'Uber / Taxi', detail:'Per tragitti notturni o con bagagli', cost:'£10–30', tip:'Uber è legale e più economico' }
];

const AIRPORT = [
  { icon:'🚐', name:'Transfer Privato MPV', detail:'Incluso nel pacchetto viaggio', time:'60–80 min', cost:'Incluso ✅', highlight:true },
  { icon:'🚂', name:'Stansted Express', detail:'Treno → Liverpool Street', time:'48–55 min', cost:'£16–23' },
  { icon:'🚌', name:'National Express Bus', detail:'Bus → Victoria Station', time:'75–90 min', cost:'£8–14' }
];

/* ── DISTANCES TABLE ──────────────────────────────────────── */
const DISTANCES = [
  { from:'Hotel (Paddington)', to:'Westminster / Big Ben', dist:'2.5 km', tube:'12 min', walk:'30 min', cost:'£2.80' },
  { from:'Hotel (Paddington)', to:'Covent Garden', dist:'3.2 km', tube:'15 min', walk:'38 min', cost:'£2.80' },
  { from:'Westminster', to:'Tower of London', dist:'4.1 km', tube:'18 min', walk:'50 min', cost:'£2.80' },
  { from:'Westminster', to:'London Eye', dist:'0.5 km', tube:'—', walk:'6 min', cost:'Gratis' },
  { from:'South Kensington', to:'Camden Town', dist:'7.2 km', tube:'22 min', walk:'—', cost:'£2.80' },
  { from:'Tower Bridge', to:'St Paul\'s', dist:'1.5 km', tube:'8 min', walk:'18 min', cost:'£2.80' },
  { from:'Tower Bridge', to:'Borough Market', dist:'0.8 km', tube:'—', walk:'10 min', cost:'Gratis' },
  { from:'Hotel (Paddington)', to:'Notting Hill', dist:'1.8 km', tube:'6 min', walk:'22 min', cost:'£2.80' },
  { from:'Hotel (Paddington)', to:'Camden Market', dist:'5.5 km', tube:'18 min', walk:'—', cost:'£2.80' },
  { from:'Hotel (Paddington)', to:'Stansted Airport', dist:'62 km', tube:'—', walk:'—', cost:'Incluso' }
];

/* ── FOOD ─────────────────────────────────────────────────── */
const FOOD = [
  { name:'The Beehive Pub', type:'Pub inglese tradizionale', cost:'£12–18', walk:'5 min dall\'hotel' },
  { name:'Satay House', type:'Cucina malese · Ottimo rapporto', cost:'£14–22', walk:'3 min dall\'hotel' },
  { name:'Maroush Express', type:'Libanese fast casual', cost:'£10–16', walk:'6 min dall\'hotel' },
  { name:'Hereford Road', type:'Britannico moderno', cost:'£22–35', walk:'10 min dall\'hotel' },
  { name:'Flat Iron', type:'Steak a prezzo fisso', cost:'£15–22', walk:'Covent Garden (20 min metro)' },
  { name:'Dishoom', type:'Indiano moderno premium', cost:'£18–28', walk:'Covent Garden (20 min metro)' }
];

/* ── CHECKLIST ────────────────────────────────────────────── */
const CHECKS = [
  { t:'Passaporto in corso di validità', i:'🛂' },
  { t:'Visto ETA UK richiesto e approvato', i:'📋' },
  { t:'Assicurazione viaggio attiva', i:'🛡️' },
  { t:'Carta contactless abilitata all\'estero', i:'💳' },
  { t:'Adattatore presa UK tipo G', i:'🔌' },
  { t:'Prenotazioni: Tower, Eye, Sky Garden', i:'🎫' },
  { t:'Outfit a strati + giacca impermeabile', i:'🧥' },
  { t:'Power bank carico', i:'🔋' },
  { t:'Google Maps offline scaricata', i:'📱' },
  { t:'Numeri emergenza UK salvati', i:'🆘' }
];

/* ── BUDGET ────────────────────────────────────────────────── */
const BUDGET = [
  { cat:'Attrazioni a pagamento', min:0, max:0, note:'Tower + Eye + Westminster + St Paul\'s', sync:true, icon:'🎫' },
  { cat:'Trasporti locali (5gg)', min:45, max:65, note:'Cap contactless Z1-2', icon:'🚇' },
  { cat:'Pasti e bevande', min:120, max:200, note:'Colazione inclusa in hotel', icon:'🍽️' },
  { cat:'Free Tour mance', min:20, max:40, note:'2 tour × £10–20 mancia', icon:'🎙️' },
  { cat:'Extra & souvenir', min:20, max:50, note:'Shopping, snack, piccoli acquisti', icon:'🛍️' }
];

/* ═══════════════════════════════════════════════════════════
   NAVIGATION — Page switching
   ═══════════════════════════════════════════════════════════ */
let leafletMap = null;

function switchPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) {
    page.classList.add('active');
    // Re-trigger animation
    page.style.animation = 'none';
    page.offsetHeight; // reflow
    page.style.animation = '';
  }
  const pill = document.querySelector(`.pill[data-page="${pageName}"]`);
  if (pill) pill.classList.add('active');

  // Init Leaflet map when first opening map page
  if (pageName === 'mappa' && !leafletMap) {
    setTimeout(initMap, 100);
  } else if (pageName === 'mappa' && leafletMap) {
    setTimeout(() => leafletMap.invalidateSize(), 100);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initNavigation() {
  document.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.page));
  });
  document.querySelectorAll('.nav-card').forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.goto));
  });
}

/* ═══════════════════════════════════════════════════════════
   RENDER FUNCTIONS
   ═══════════════════════════════════════════════════════════ */

/* ── Countdown ─────────────────────────────────────────────── */
function updateCountdown() {
  const diff = TRIP.departure - new Date();
  if (diff <= 0) { document.getElementById('cdDays').textContent = '🎉'; return; }
  document.getElementById('cdDays').textContent = Math.floor(diff / 864e5);
  document.getElementById('cdHours').textContent = String(Math.floor((diff / 36e5) % 24)).padStart(2,'0');
  document.getElementById('cdMins').textContent = String(Math.floor((diff / 6e4) % 60)).padStart(2,'0');
  document.getElementById('cdSecs').textContent = String(Math.floor((diff / 1e3) % 60)).padStart(2,'0');
}

/* ── Quick Stats ───────────────────────────────────────────── */
function renderQuickStats() {
  document.getElementById('quickGrid').innerHTML = [
    { v:'4', l:'Viaggiatori' }, { v:'4', l:'Notti' },
    { v:'~8 km', l:'Media/giorno' }, { v:'€3.000', l:'Pacchetto' }
  ].map(s => `<div class="qs"><span class="qs-val">${s.v}</span><span class="qs-lbl">${s.l}</span></div>`).join('');
}

/* ── Docs & Tips ───────────────────────────────────────────── */
function renderCards(id, data, stripe) {
  document.getElementById(id).innerHTML = data.map(d => `
    <article class="card ${stripe ? 'stripe-' + d.type : ''}">
      <span class="card-icon">${d.icon}</span>
      <h4 class="card-title">${d.title}</h4>
      <p class="card-text">${d.text}</p>
      <span class="card-badge ${d.type}">${d.badge}</span>
    </article>
  `).join('');
}

/* ── Flights ───────────────────────────────────────────────── */
function renderFlights() {
  document.getElementById('flightsWrap').innerHTML = FLIGHTS.map(f => `
    <article class="flight">
      <div class="flight-ep">
        <div class="flight-city">${f.from.city}</div>
        <div class="flight-code">${f.from.code}</div>
        <div class="flight-time">${f.from.time}</div>
      </div>
      <div class="flight-mid">
        <div class="flight-date">${f.date}</div>
        <div class="flight-line"></div>
        <div class="flight-dur">${f.type} · ${f.dur}</div>
      </div>
      <div class="flight-ep">
        <div class="flight-city">${f.to.city}</div>
        <div class="flight-code">${f.to.code}</div>
        <div class="flight-time">${f.to.time}</div>
      </div>
      <div class="flight-tags">
        <span class="flight-tag">🧳 ${TRIP.baggage}</span>
        ${f.tags.map(t => `<span class="flight-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ── Hotel ─────────────────────────────────────────────────── */
function renderHotel() {
  const h = HOTEL;
  document.getElementById('hotelWrap').innerHTML = `
    <article class="hotel">
      <div class="hotel-img">
        <img src="${h.img}" alt="${h.name}" loading="lazy" />
        <div class="hotel-img-overlay">
          <div class="hotel-stars">${'⭐'.repeat(h.stars)}</div>
          <h3 class="hotel-name">${h.name}</h3>
        </div>
      </div>
      <div class="hotel-body">
        <div class="hotel-grid">
          <div class="hotel-detail"><span class="hd-icon">📅</span><div><div class="hd-label">Check-in/out</div><div class="hd-value">${h.checkIn} → ${h.checkOut}</div></div></div>
          <div class="hotel-detail"><span class="hd-icon">🛏️</span><div><div class="hd-label">Camera</div><div class="hd-value">${h.room}</div></div></div>
          <div class="hotel-detail"><span class="hd-icon">📐</span><div><div class="hd-label">Dettagli</div><div class="hd-value">${h.detail}</div></div></div>
          <div class="hotel-detail"><span class="hd-icon">🍳</span><div><div class="hd-label">Trattamento</div><div class="hd-value">${h.treatment}</div></div></div>
          <div class="hotel-detail"><span class="hd-icon">🚐</span><div><div class="hd-label">Transfer</div><div class="hd-value">${h.transfer}</div></div></div>
          <div class="hotel-detail"><span class="hd-icon">🛡️</span><div><div class="hd-label">Assicurazione</div><div class="hd-value">${h.insurance}</div></div></div>
        </div>
        <div class="hotel-actions">
          <a class="map-btn gm" href="${h.gmaps}" target="_blank" rel="noreferrer">📍 Google Maps</a>
          <a class="map-btn am" href="${h.apple}" target="_blank" rel="noreferrer">🗺️ Apple Maps</a>
        </div>
      </div>
    </article>
  `;
}

/* ── Day Timeline ──────────────────────────────────────────── */
function renderTimeline() {
  document.getElementById('timeline').innerHTML = DAYS.map(d => `
    <article class="day">
      <div class="day-img">
        <img src="${d.img}" alt="${d.title}" loading="lazy" />
        <div class="day-num">${d.n}</div>
      </div>
      <div class="day-body">
        <span class="day-date">📅 ${d.date}</span>
        <h3 class="day-title">${d.title}</h3>
        <p class="day-focus">${d.focus}</p>
        <div class="day-acts">${d.items.map(i => `<span class="day-act">${i}</span>`).join('')}</div>
        <div class="day-meta">
          <span class="dm tr">🚇 ${d.tr}</span>
          <span class="dm dist">📏 ${d.dist}</span>
          <span class="dm time">⏱️ ${d.time}</span>
          <span class="dm cost">💰 ${d.budget}</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── Leaflet Map ───────────────────────────────────────────── */
function initMap() {
  if (leafletMap) return;
  leafletMap = L.map('leafletMap', { zoomControl: true }).setView([51.510, -0.118], 13);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap · © CARTO',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(leafletMap);

  const markerGroup = L.featureGroup();

  PLACES.forEach(p => {
    const marker = L.circleMarker([p.lat, p.lng], {
      radius: p.cat === 'hotel' ? 10 : 7,
      fillColor: p.color, color: '#fff', weight: 1.5,
      opacity: 0.9, fillOpacity: 0.85
    }).addTo(leafletMap);

    marker.bindPopup(`
      <div class="popup-name">${p.icon} ${p.name}</div>
      <div>${p.detail}</div>
      <div class="popup-cost">${p.cost}</div>
      <div class="popup-links">
        <a class="gm" href="${p.gmaps}" target="_blank">📍 Google Maps</a>
        <a class="am" href="${p.apple}" target="_blank">🗺️ Apple Maps</a>
      </div>
    `, { maxWidth: 260 });

    markerGroup.addLayer(marker);
  });

  markerGroup.addTo(leafletMap);

  // Draw line from hotel to each attraction
  const hotelCoord = [HOTEL.lat, HOTEL.lng];
  PLACES.filter(p => p.cat === 'attrazione').forEach(p => {
    L.polyline([hotelCoord, [p.lat, p.lng]], {
      color: p.color, weight: 1, opacity: 0.2, dashArray: '6,6'
    }).addTo(leafletMap);
  });

  // Fit view to all markers (excluding Stansted)
  const centralPlaces = PLACES.filter(p => p.cat !== 'transfer');
  if (centralPlaces.length > 0) {
    const bounds = L.latLngBounds(centralPlaces.map(p => [p.lat, p.lng]));
    leafletMap.fitBounds(bounds, { padding: [40, 40] });
  }

  renderMapLegend();
  renderPOIList();
}

function renderMapLegend() {
  const cats = [
    { color:'#bf5af2', label:'Hotel' },
    { color:'#ff453a', label:'Attrazioni a pagamento' },
    { color:'#30d158', label:'Luoghi gratuiti' },
    { color:'#0a84ff', label:'Landmarks' },
    { color:'#ff9f0a', label:'Mercati' }
  ];
  document.getElementById('mapLegend').innerHTML = cats.map(c =>
    `<div class="legend-item"><span class="legend-dot" style="background:${c.color}"></span>${c.label}</div>`
  ).join('');
}

function renderPOIList() {
  document.getElementById('poiList').innerHTML = PLACES.filter(p => p.cat !== 'transfer').map(p => `
    <article class="poi">
      <div class="poi-icon">${p.icon}</div>
      <div class="poi-info">
        <div class="poi-name">${p.name}</div>
        <div class="poi-detail">${p.detail}</div>
        <div class="poi-cost">${p.cost}</div>
      </div>
      <div class="poi-links">
        <a class="poi-link" href="${p.gmaps}" target="_blank" title="Google Maps">📍</a>
        <a class="poi-link" href="${p.apple}" target="_blank" title="Apple Maps">🗺️</a>
      </div>
    </article>
  `).join('');
}

/* ── Transport ─────────────────────────────────────────────── */
function renderTransport() {
  document.getElementById('transportGrid').innerHTML = TRANSPORT.map(t => `
    <article class="card stripe-blue">
      <span class="card-icon">${t.icon}</span>
      <h4 class="card-title">${t.title}</h4>
      <p class="card-text">${t.detail}</p>
      <span class="card-cost">${t.cost}</span>
      <p class="card-text" style="margin-top:6px;font-style:italic;color:var(--text-3)">💡 ${t.tip}</p>
    </article>
  `).join('');

  document.getElementById('airportGrid').innerHTML = AIRPORT.map(a => `
    <article class="card ${a.highlight ? 'stripe-green' : ''}" ${a.highlight ? 'style="border-color:rgba(48,209,88,0.2)"' : ''}>
      <span class="card-icon">${a.icon}</span>
      <h4 class="card-title">${a.name}</h4>
      <p class="card-text">${a.detail}</p>
      <div class="card-meta">
        <span class="mtag" style="color:var(--cyan)">⏱️ ${a.time}</span>
        <span class="mtag" style="color:var(--orange)">💰 ${a.cost}</span>
      </div>
    </article>
  `).join('');
}

/* ── Distance Table ────────────────────────────────────────── */
function renderDistances() {
  document.getElementById('distanceTable').innerHTML = `
    <thead><tr>
      <th>Da</th><th>A</th><th>Distanza</th><th>Metro</th><th>A piedi</th><th>Costo</th>
    </tr></thead>
    <tbody>
      ${DISTANCES.map(d => `<tr>
        <td>${d.from}</td><td>${d.to}</td><td>${d.dist}</td>
        <td class="td-time">${d.tube}</td><td class="td-time">${d.walk}</td>
        <td class="td-cost">${d.cost}</td>
      </tr>`).join('')}
    </tbody>
  `;
}

/* ── Food ──────────────────────────────────────────────────── */
function renderFood() {
  document.getElementById('foodGrid').innerHTML = FOOD.map(f => `
    <article class="card">
      <h4 class="card-title">${f.name}</h4>
      <p class="card-text" style="color:var(--orange)">${f.type}</p>
      <div class="card-meta">
        <span class="mtag">💰 ${f.cost}</span>
        <span class="mtag">🚶 ${f.walk}</span>
      </div>
    </article>
  `).join('');
}

/* ── Budget ─────────────────────────────────────────────────── */
function renderBudget() {
  const attrTotal = PLACES.filter(p => p.costNum > 0).reduce((s, p) => s + p.costNum, 0);
  const dyn = BUDGET.map(b => b.sync ? { ...b, min: attrTotal, max: attrTotal } : b);
  const tMin = dyn.reduce((s, b) => s + b.min, 0);
  const tMax = dyn.reduce((s, b) => s + b.max, 0);

  document.getElementById('budgetTop').innerHTML = `
    <article class="budget-big a">
      <div class="bb-label">Pacchetto viaggio (hotel + voli + transfer + assicurazione)</div>
      <div class="bb-amount grad">€${TRIP.total.toLocaleString('it')}</div>
      <div class="bb-sub">Acconto €${TRIP.deposit} · Saldo €${TRIP.balance.toLocaleString('it')}</div>
    </article>
    <article class="budget-big b">
      <div class="bb-label">Spese extra stimate (sul posto, a persona)</div>
      <div class="bb-amount">£${tMin}–£${tMax}</div>
      <div class="bb-sub">≈ €${Math.round(tMin*EUR)}–€${Math.round(tMax*EUR)}</div>
    </article>
    <article class="budget-big c">
      <div class="bb-label">Totale biglietti attrazioni</div>
      <div class="bb-amount">£${attrTotal.toFixed(0)}</div>
      <div class="bb-sub">≈ €${Math.round(attrTotal*EUR)}</div>
    </article>
  `;

  document.getElementById('budgetBreakdown').innerHTML = dyn.map(b => `
    <article class="card">
      <h4 class="card-title">${b.icon} ${b.cat}</h4>
      <span class="card-cost" style="background:rgba(255,159,10,0.1);color:var(--orange);border-color:rgba(255,159,10,0.2)">£${b.min}–£${b.max}</span>
      <p class="card-text" style="margin-top:6px">${b.note}</p>
      <p class="card-text" style="color:var(--text-3)">≈ €${Math.round(b.min*EUR)}–€${Math.round(b.max*EUR)}</p>
    </article>
  `).join('');
}

/* ── Checklist ─────────────────────────────────────────────── */
function renderChecklist() {
  const key = 'london2026-chk-v4';
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  const el = document.getElementById('checklist');
  el.innerHTML = CHECKS.map((c, i) => `
    <label class="chk ${saved[i] ? 'done' : ''}">
      <input type="checkbox" class="chk-box" data-id="${i}" ${saved[i] ? 'checked' : ''} />
      <span class="chk-text">${c.t}</span>
      <span class="chk-icon">${c.i}</span>
    </label>
  `).join('');
  el.querySelectorAll('.chk-box').forEach(inp => {
    inp.addEventListener('change', e => {
      saved[e.target.dataset.id] = e.target.checked;
      localStorage.setItem(key, JSON.stringify(saved));
      e.target.closest('.chk').classList.toggle('done', e.target.checked);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   PWA
   ═══════════════════════════════════════════════════════════ */
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; if (installBtn) installBtn.hidden = false; });
installBtn?.addEventListener('click', async () => { if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installBtn.hidden = true; });
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));

/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */
function init() {
  initNavigation();
  renderQuickStats();
  renderCards('docsGrid', DOCS, true);
  renderCards('tipsGrid', TIPS, true);
  renderFlights();
  renderHotel();
  renderTimeline();
  renderTransport();
  renderDistances();
  renderFood();
  renderBudget();
  renderChecklist();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
