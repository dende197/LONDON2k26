const euroRate = 1.17;

const quickStatsData = [
  { label: "Giorni viaggio", value: "5" },
  { label: "Zone principali", value: "1–2" },
  { label: "Spostamenti medi/giorno", value: "6–10 km" },
  { label: "Budget smart", value: "£300–£520" }
];

const infoPointsData = [
  {
    title: "Documento + ingresso UK",
    text: "Porta documento valido e verifica UK ETA prima della partenza.",
    tone: "strong"
  },
  {
    title: "Come pagare i mezzi",
    text: "Usa contactless direttamente ai tornelli: cap giornaliero automatico.",
    tone: "normal"
  },
  {
    title: "Orario migliore",
    text: "Per attrazioni popolari prenota slot 09:00–10:30 o fascia serale.",
    tone: "normal"
  }
];

const dayPlanData = [
  {
    date: "23 Apr",
    title: "Arrivo + centro città",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    focus: "Orientamento e ritmi leggeri",
    items: ["Check-in hotel", "Setup Oyster/contactless", "Covent Garden → Soho"],
    transport: "Tube + camminata",
    distance: "7 km",
    moveTime: "45–70 min di trasporti",
    budget: "£45–£70"
  },
  {
    date: "24 Apr",
    title: "Free Tour + Westminster",
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
    focus: "Monumenti iconici",
    items: ["Trafalgar", "Buckingham Palace", "St James's Park", "Big Ben + London Eye area"],
    transport: "A piedi + Tube",
    distance: "8 km",
    moveTime: "40–55 min",
    budget: "£35–£65"
  },
  {
    date: "25 Apr",
    title: "Musei + Camden",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
    focus: "Cultura + street vibe",
    items: ["Natural History o V&A", "South Kensington", "Camden serale"],
    transport: "Tube",
    distance: "9 km",
    moveTime: "55–75 min",
    budget: "£40–£75"
  },
  {
    date: "26 Apr",
    title: "Tower area + skyline",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
    focus: "Panorami e storia",
    items: ["Tower of London", "Tower Bridge", "Sky Garden"],
    transport: "Tube + passeggiata",
    distance: "10 km",
    moveTime: "60–80 min",
    budget: "£55–£95"
  },
  {
    date: "27 Apr",
    title: "Notting Hill + rientro",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    focus: "Ultime tappe + transfer",
    items: ["Portobello Road", "Brunch", "Trasferimento aeroporto"],
    transport: "Tube/Train",
    distance: "6 km",
    moveTime: "35–60 min",
    budget: "£35–£75"
  }
];

const transportCostsData = [
  {
    title: "Tube / Bus contactless",
    detail: "Zona 1–2 cap giornaliero",
    cost: "£8.50–£9.00",
    tip: "Evita ora di punta 08:00–09:30 e 17:00–18:30"
  },
  {
    title: "Travelcard giornaliera",
    detail: "Utile se non usi contactless",
    cost: "≈ £15.20 (zone 1–4)",
    tip: "Di solito meno conveniente del cap contactless"
  },
  {
    title: "Spostamenti a piedi",
    detail: "Molte aree centrali sono vicine",
    cost: "£0",
    tip: "Tra Westminster e Covent Garden ~30–35 min a piedi"
  }
];

const airportTransferData = [
  {
    airport: "Heathrow",
    options: "Elizabeth line / Piccadilly",
    time: "35–55 min",
    cost: "£12–£15"
  },
  {
    airport: "Gatwick",
    options: "Thameslink / Gatwick Express",
    time: "30–50 min",
    cost: "£12–£22"
  },
  {
    airport: "Stansted",
    options: "Stansted Express",
    time: "48–55 min",
    cost: "£16–£23"
  }
];

const attractionsData = [
  {
    name: "Tower of London",
    img: "https://images.unsplash.com/photo-1586277060690-b94100d8d5c9?w=600&q=80",
    cost: 34.8,
    distanceKm: 4.1,
    moveTime: "20–25 min",
    transport: "District/Circle · Tower Hill",
    tip: "Prenota fascia 09:00–10:00",
    gmaps: "https://maps.google.com/?q=Tower+of+London",
    appleMaps: "https://maps.apple.com/?q=Tower+of+London"
  },
  {
    name: "London Eye",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    cost: 29,
    distanceKm: 1.2,
    moveTime: "10–15 min",
    transport: "Waterloo / Westminster",
    tip: "Online in anticipo",
    gmaps: "https://maps.google.com/?q=London+Eye",
    appleMaps: "https://maps.apple.com/?q=London+Eye"
  },
  {
    name: "Westminster Abbey",
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
    cost: 29,
    distanceKm: 0.8,
    moveTime: "8–12 min",
    transport: "Westminster/St James's Park",
    tip: "Audio guide inclusa",
    gmaps: "https://maps.google.com/?q=Westminster+Abbey",
    appleMaps: "https://maps.apple.com/?q=Westminster+Abbey"
  },
  {
    name: "St Paul's Cathedral",
    img: "https://images.unsplash.com/photo-1584452492747-02f6c3b9fc3b?w=600&q=80",
    cost: 26,
    distanceKm: 2.2,
    moveTime: "15–20 min",
    transport: "Central line · St Paul's",
    tip: "Cupola al tramonto",
    gmaps: "https://maps.google.com/?q=St+Paul's+Cathedral+London",
    appleMaps: "https://maps.apple.com/?q=St+Paul's+Cathedral+London"
  },
  {
    name: "Sky Garden",
    img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80",
    cost: 0,
    distanceKm: 3.5,
    moveTime: "18–25 min",
    transport: "Monument / Bank",
    tip: "Slot gratuito obbligatorio",
    gmaps: "https://maps.google.com/?q=Sky+Garden+London",
    appleMaps: "https://maps.apple.com/?q=Sky+Garden+London"
  }
];

const hotelZonesData = [
  {
    zone: "Westminster / Victoria",
    transfer: "Comodo per District, Circle, Victoria",
    places: [
      { name: "Regency Café", type: "Breakfast UK", avgCost: "£8–12", walk: "8–12 min" },
      { name: "Flat Iron Victoria", type: "Steak casual", avgCost: "£18–25", walk: "10–15 min" },
      { name: "Dishoom Carnaby", type: "Indiano moderno", avgCost: "£20–30", walk: "15–20 min + Tube" }
    ]
  },
  {
    zone: "South Kensington / Earl's Court",
    transfer: "Piccadilly line ottima da/per aeroporto",
    places: [
      { name: "The Builders Arms", type: "Pub classico", avgCost: "£16–24", walk: "5–10 min" },
      { name: "PAUL Gloucester Road", type: "Bakery brunch", avgCost: "£9–14", walk: "6–9 min" },
      { name: "CERU", type: "Mediterraneo", avgCost: "£18–28", walk: "10–14 min" }
    ]
  },
  {
    zone: "King's Cross / Bloomsbury",
    transfer: "Nodo perfetto per metro + treni",
    places: [
      { name: "Dishoom King's Cross", type: "Brunch/cena", avgCost: "£20–32", walk: "8–12 min" },
      { name: "Granger & Co", type: "Breakfast premium", avgCost: "£14–22", walk: "10–15 min" },
      { name: "Pizza Union", type: "Veloce economico", avgCost: "£9–14", walk: "4–7 min" }
    ]
  }
];

const mapPointsData = [
  {
    name: "Trafalgar Square (start free tour)",
    area: "West End",
    gmaps: "https://maps.google.com/?q=Trafalgar+Square+London",
    appleMaps: "https://maps.apple.com/?q=Trafalgar+Square+London"
  },
  {
    name: "Buckingham Palace",
    area: "Westminster",
    gmaps: "https://maps.google.com/?q=Buckingham+Palace+London",
    appleMaps: "https://maps.apple.com/?q=Buckingham+Palace+London"
  },
  {
    name: "Big Ben",
    area: "Westminster",
    gmaps: "https://maps.google.com/?q=Big+Ben+London",
    appleMaps: "https://maps.apple.com/?q=Big+Ben+London"
  },
  {
    name: "Tower Bridge",
    area: "City",
    gmaps: "https://maps.google.com/?q=Tower+Bridge+London",
    appleMaps: "https://maps.apple.com/?q=Tower+Bridge+London"
  },
  {
    name: "Heathrow Airport",
    area: "Transfer",
    gmaps: "https://maps.google.com/?q=Heathrow+Airport",
    appleMaps: "https://maps.apple.com/?q=Heathrow+Airport"
  }
];

const checklistData = [
  "Documento valido + UK ETA",
  "Assicurazione viaggio + numeri emergenza",
  "Prenotazioni Tower, Eye, Sky Garden",
  "Carta contactless attiva all'estero",
  "Adattatore UK tipo G",
  "Outfit a strati (meteo variabile)",
  "Power bank + roaming dati"
];

const estimateData = [
  { category: "Attrazioni a pagamento", min: 0, max: 0, note: "Somma dinamica delle attrazioni sopra", syncWithAttractions: true },
  { category: "Trasporti locali", min: 45, max: 65, note: "Cap giornaliero zona 1-2 per 5 giorni" },
  { category: "Pasti", min: 95, max: 170, note: "Mix bakery + pub + cena" },
  { category: "Mance ed extra", min: 25, max: 50, note: "Free tour + snack + souvenir base" },
  { category: "Transfer aeroporto A/R", min: 20, max: 60, note: "Variabile per aeroporto e orario" }
];

const galleryData = [
  { label: "Tower Bridge", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80" },
  { label: "Big Ben & Westminster", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=80" },
  { label: "London Eye", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80" },
  { label: "Covent Garden", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
  { label: "Camden Market", img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=700&q=80" },
  { label: "Notting Hill", img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80" },
  { label: "St Paul's Cathedral", img: "https://images.unsplash.com/photo-1584452492747-02f6c3b9fc3b?w=700&q=80" },
  { label: "Skyline City of London", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&q=80" },
  { label: "Buckingham Palace", img: "https://images.unsplash.com/photo-1549778884-25b52d37b4de?w=700&q=80" },
  { label: "Hyde Park", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80" },
  { label: "South Bank al tramonto", img: "https://images.unsplash.com/photo-1533929736168-ef0b9fe27ba9?w=700&q=80" },
  { label: "Borough Market", img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&q=80" }
];

function formatGbp(value) {
  return `£${value.toFixed(2)}`;
}

function renderQuickStats() {
  const target = document.getElementById("quickStats");
  target.innerHTML = quickStatsData
    .map(
      (s) => `
      <article class="card">
        <p class="muted">${s.label}</p>
        <p class="big">${s.value}</p>
      </article>`
    )
    .join("");
}

function renderInfoPoints() {
  const target = document.getElementById("infoPoints");
  target.innerHTML = infoPointsData
    .map(
      (info) => `
      <article class="card ${info.tone === "strong" ? "strong" : ""}">
        <h3>${info.title}</h3>
        <p class="muted">${info.text}</p>
      </article>`
    )
    .join("");
}

function renderDayPlan() {
  const target = document.getElementById("dayPlan");
  target.innerHTML = dayPlanData
    .map(
      (day) => `
      <article class="day-item">
        ${day.img ? `<div class="card-img-wrap"><img src="${day.img}" alt="${day.title}" loading="lazy" onerror="this.parentElement.style.display='none'" /></div>` : ""}
        <h3>${day.date} · ${day.title}</h3>
        <p class="muted">${day.focus}</p>
        <ul class="clean-list">${day.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="meta">
          <span class="tag">Mezzi: ${day.transport}</span>
          <span class="tag">Distanza: ${day.distance}</span>
          <span class="tag">Spostamenti: ${day.moveTime}</span>
          <span class="tag">Budget giorno: ${day.budget}</span>
        </div>
      </article>`
    )
    .join("");
}

function renderTransportCosts() {
  const target = document.getElementById("transportCosts");
  target.innerHTML = transportCostsData
    .map(
      (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p class="muted">${item.detail}</p>
        <div class="meta">
          <span class="tag">Costo: ${item.cost}</span>
        </div>
        <p class="muted">${item.tip}</p>
      </article>`
    )
    .join("");
}

function renderAirportTransfer() {
  const target = document.getElementById("airportTransfer");
  target.innerHTML = airportTransferData
    .map(
      (item) => `
      <article class="card">
        <h3>${item.airport}</h3>
        <p class="muted">${item.options}</p>
        <div class="meta">
          <span class="tag">Tempo: ${item.time}</span>
          <span class="tag">Costo: ${item.cost}</span>
        </div>
      </article>`
    )
    .join("");
}

function renderAttractions() {
  const target = document.getElementById("attractions");
  target.innerHTML = attractionsData
    .map(
      (a) => `
      <article class="card">
        ${a.img ? `<div class="card-img-wrap"><img src="${a.img}" alt="${a.name}" loading="lazy" onerror="this.parentElement.style.display='none'" /></div>` : ""}
        <h3>${a.name}</h3>
        <div class="meta">
          <span class="tag">Costo: ${formatGbp(a.cost)}</span>
          <span class="tag">Distanza centro: ${a.distanceKm} km</span>
          <span class="tag">Spostamento: ${a.moveTime}</span>
        </div>
        <p class="muted">${a.transport}</p>
        <p class="muted">${a.tip}</p>
        <div class="hero-actions">
          <a class="btn" href="${a.gmaps}" target="_blank" rel="noreferrer">Google Maps</a>
          <a class="btn" href="${a.appleMaps}" target="_blank" rel="noreferrer">Apple Maps</a>
        </div>
      </article>`
    )
    .join("");

  const total = attractionsData.reduce((sum, a) => sum + a.cost, 0);
  document.getElementById("totalCost").textContent = formatGbp(total);
  document.getElementById("totalCostEur").textContent = `≈ €${(total * euroRate).toFixed(2)}`;
}

function renderMapPoints() {
  const target = document.getElementById("mapPoints");
  target.innerHTML = mapPointsData
    .map(
      (point) => `
      <article class="map-item">
        <h3>${point.name}</h3>
        <p class="muted">${point.area}</p>
        <div class="hero-actions">
          <a class="btn" href="${point.gmaps}" target="_blank" rel="noreferrer">Google Maps</a>
          <a class="btn" href="${point.appleMaps}" target="_blank" rel="noreferrer">Apple Maps</a>
        </div>
      </article>`
    )
    .join("");
}

function renderChecklist() {
  const legacyStorageKey = "london-trip-checklist-v1";
  const storageKey = "london-trip-checklist-v2";
  const legacySaved = JSON.parse(localStorage.getItem(legacyStorageKey) || "{}");

  if (!localStorage.getItem(storageKey) && Object.keys(legacySaved).length > 0) {
    localStorage.setItem(storageKey, JSON.stringify(legacySaved));
  }

  const currentSaved = JSON.parse(localStorage.getItem(storageKey) || "null");
  const saved = currentSaved ?? {};

  const target = document.getElementById("checkItems");

  target.innerHTML = checklistData
    .map((item, idx) => {
      const checked = Boolean(saved[idx]);
      return `
      <label class="check-item ${checked ? "done" : ""}">
        <input type="checkbox" data-id="${idx}" ${checked ? "checked" : ""} />
        <span>${item}</span>
      </label>`;
    })
    .join("");

  target.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", (event) => {
      const checkbox = event.currentTarget;
      const id = checkbox.dataset.id;
      saved[id] = checkbox.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
      checkbox.closest(".check-item")?.classList.toggle("done", checkbox.checked);
    });
  });
}

function renderHotelZones() {
  const select = document.getElementById("hotelZone");
  select.innerHTML = hotelZonesData.map((zone, idx) => `<option value="${idx}">${zone.zone}</option>`).join("");
  renderFoodSuggestions(0);
  select.addEventListener("change", (event) => renderFoodSuggestions(Number(event.target.value)));
}

function renderFoodSuggestions(zoneIndex) {
  const zone = hotelZonesData[zoneIndex];
  const target = document.getElementById("foodSuggestions");
  target.innerHTML = `
    <article class="map-item">
      <h3>${zone.zone}</h3>
      <p class="muted">${zone.transfer}</p>
    </article>
    ${zone.places
      .map(
        (place) => `
      <article class="map-item">
        <h3>${place.name}</h3>
        <p class="muted">${place.type}</p>
        <div class="meta">
          <span class="tag">Ticket medio: ${place.avgCost}</span>
          <span class="tag">A piedi: ${place.walk}</span>
        </div>
      </article>`
      )
      .join("")}
  `;
}

function renderEstimateSummary() {
  const target = document.getElementById("estimateSummary");
  const attractionTotal = attractionsData.reduce((sum, item) => sum + item.cost, 0);
  const dynamicEstimate = estimateData.map((item) =>
    item.syncWithAttractions ? { ...item, min: attractionTotal, max: attractionTotal } : item
  );

  const totalMin = dynamicEstimate.reduce((sum, item) => sum + item.min, 0);
  const totalMax = dynamicEstimate.reduce((sum, item) => sum + item.max, 0);

  document.getElementById("tripTotalRange").textContent = `£${totalMin.toFixed(0)}-£${totalMax.toFixed(0)}`;
  document.getElementById("tripTotalRangeEur").textContent = `≈ €${(totalMin * euroRate).toFixed(0)}-€${(totalMax * euroRate).toFixed(0)}`;

  target.innerHTML = dynamicEstimate
    .map(
      (item) => `
      <article class="card">
        <h3>${item.category}</h3>
        <p class="big">£${item.min.toFixed(0)}-£${item.max.toFixed(0)}</p>
        <p class="muted">${item.note}</p>
        <p class="muted">≈ €${(item.min * euroRate).toFixed(0)}-€${(item.max * euroRate).toFixed(0)}</p>
      </article>`
    )
    .join("");
}

function renderPhotoGallery() {
  const target = document.getElementById("photoGallery");
  if (!target) return;
  target.innerHTML = galleryData
    .map(
      (photo) => `
      <div class="gallery-item">
        <img src="${photo.img}" alt="${photo.label}" loading="lazy" onerror="this.parentElement.style.display='none'" />
        <div class="gallery-caption">${photo.label}</div>
      </div>`
    )
    .join("");
}

function initScrollSpy() {
  const pills = document.querySelectorAll(".pill-nav .pill");
  const sectionIds = Array.from(pills)
    .map((p) => p.getAttribute("href").slice(1))
    .filter(Boolean);

  const visibleSections = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      const firstVisible = sectionIds.find((id) => visibleSections.has(id));
      pills.forEach((pill) => {
        pill.classList.toggle("active", pill.getAttribute("href") === `#${firstVisible}`);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn?.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderQuickStats();
renderInfoPoints();
renderDayPlan();
renderTransportCosts();
renderAirportTransfer();
renderAttractions();
renderMapPoints();
renderChecklist();
renderHotelZones();
renderEstimateSummary();
renderPhotoGallery();
initScrollSpy();
