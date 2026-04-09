const dayPlanData = [
  {
    date: "23 Apr",
    title: "Arrivo + orientamento centrale",
    items: [
      "Check-in hotel e Oyster/contactless setup",
      "Covent Garden → Leicester Square",
      "Cena in zona Soho con opzione pub tradizionale"
    ],
    transport: "Tube/Bus",
    budget: "£45-70"
  },
  {
    date: "24 Apr",
    title: "Free Tour agenzia + Westminster",
    items: [
      "Trafalgar Square → Buckingham Palace",
      "St. James's Park → Westminster",
      "Big Ben + London Eye area",
      "Mancia free tour consigliata"
    ],
    transport: "A piedi + Tube",
    budget: "£35-65"
  },
  {
    date: "25 Apr",
    title: "Musei + quartieri locali",
    items: [
      "Natural History Museum (gratis) o V&A",
      "South Kensington pranzo",
      "Camden Town serale con street food"
    ],
    transport: "Tube",
    budget: "£40-75"
  },
  {
    date: "26 Apr",
    title: "Icone + City skyline",
    items: [
      "Tower of London + Tower Bridge",
      "Pranzo St Katharine Docks",
      "Sky Garden (gratis su prenotazione)"
    ],
    transport: "Tube + passeggiata",
    budget: "£55-95"
  },
  {
    date: "27 Apr",
    title: "Notting Hill + rientro",
    items: [
      "Portobello Road e souvenir finali",
      "Brunch vicino alla linea aeroporto",
      "Transfer Heathrow/Gatwick/Stansted"
    ],
    transport: "Tube/Train",
    budget: "£35-75"
  }
];

const itineraryOptionsData = [
  {
    name: "Classico Londra in 5 giorni",
    focus: "Monumenti, free tour, musei e skyline",
    timing: "Bilanciato (9:00-22:00)",
    costMin: 250,
    costMax: 390,
    highlights: ["Westminster", "Tower area", "Notting Hill", "Camden"]
  },
  {
    name: "Culturale low-cost",
    focus: "Attrazioni gratuite + quartieri iconici",
    timing: "Rilassato (10:00-21:00)",
    costMin: 170,
    costMax: 280,
    highlights: ["Musei gratis", "Sky Garden", "Hyde Park", "South Bank"]
  },
  {
    name: "Premium experience",
    focus: "Biglietti salta-fila + cene panoramiche",
    timing: "Intenso (8:30-23:00)",
    costMin: 370,
    costMax: 560,
    highlights: ["Tower + Eye", "Westminster interno", "Boat ride Thames"]
  }
];

const attractionsData = [
  { name: "Tower of London", cost: 34.8, distanceKm: 4.1, transport: "District/Circle - Tower Hill", tip: "Prenota fascia 09:00-10:00" },
  { name: "London Eye", cost: 29, distanceKm: 1.2, transport: "Waterloo", tip: "Biglietto online in anticipo" },
  { name: "Westminster Abbey (interno)", cost: 29, distanceKm: 0.8, transport: "Westminster/St James's Park", tip: "Audio guide inclusa" },
  { name: "St Paul's Cathedral", cost: 26, distanceKm: 2.2, transport: "St Paul's", tip: "Cupola al tramonto" },
  { name: "Sky Garden", cost: 0, distanceKm: 3.5, transport: "Monument", tip: "Slot gratuito da prenotare" }
];

const hotelZonesData = [
  {
    zone: "Westminster / Victoria",
    transfer: "Comodo per linee District, Circle e Victoria",
    places: [
      { name: "Regency Café", type: "Breakfast UK", avgCost: "£8-12", walk: "8-12 min" },
      { name: "Flat Iron Victoria", type: "Steak casual", avgCost: "£18-25", walk: "10-15 min" },
      { name: "Dishoom Carnaby", type: "Indiano moderno", avgCost: "£20-30", walk: "15-20 min + Tube" }
    ]
  },
  {
    zone: "South Kensington / Earl's Court",
    transfer: "Ottimo per Piccadilly line (aeroporto) e District",
    places: [
      { name: "The Builders Arms", type: "Pub classico", avgCost: "£16-24", walk: "5-10 min" },
      { name: "PAUL Gloucester Road", type: "Bakery brunch", avgCost: "£9-14", walk: "6-9 min" },
      { name: "CERU South Kensington", type: "Mediterraneo", avgCost: "£18-28", walk: "10-14 min" }
    ]
  },
  {
    zone: "King's Cross / Bloomsbury",
    transfer: "Nodo perfetto per metro + treni nazionali",
    places: [
      { name: "Dishoom King's Cross", type: "Brunch/cena", avgCost: "£20-32", walk: "8-12 min" },
      { name: "Granger & Co", type: "Breakfast premium", avgCost: "£14-22", walk: "10-15 min" },
      { name: "Pizza Union", type: "Veloce economico", avgCost: "£9-14", walk: "4-7 min" }
    ]
  },
  {
    zone: "Shoreditch / Liverpool Street",
    transfer: "Perfetto per vita serale e Elizabeth line",
    places: [
      { name: "Padella Shoreditch", type: "Pasta", avgCost: "£12-20", walk: "7-10 min" },
      { name: "Smokestak", type: "BBQ", avgCost: "£20-30", walk: "9-14 min" },
      { name: "Beigel Bake", type: "Late snack", avgCost: "£5-9", walk: "12-18 min" }
    ]
  }
];

const mapPointsData = [
  { name: "Trafalgar Square (inizio free tour)", link: "https://maps.google.com/?q=Trafalgar+Square+London" },
  { name: "Buckingham Palace", link: "https://maps.google.com/?q=Buckingham+Palace+London" },
  { name: "Big Ben", link: "https://maps.google.com/?q=Big+Ben+London" },
  { name: "Tower of London", link: "https://maps.google.com/?q=Tower+of+London" },
  { name: "Heathrow Airport", link: "https://maps.google.com/?q=Heathrow+Airport" }
];

const checklistData = [
  "Documento valido + eventuale UK ETA",
  "Assicurazione viaggio e numeri emergenza",
  "Prenotazioni attrazioni (Tower, London Eye, Sky Garden)",
  "Carta contactless e budget Oyster/Tube",
  "Adattatore presa UK (tipo G)",
  "Meteo e outfit a strati",
  "Power bank e roaming dati"
];

const estimateData = [
  { category: "Attrazioni a pagamento", min: 90, max: 130, note: "Tower, Eye, Abbey/St Paul (selezione flessibile)" },
  { category: "Trasporti locali", min: 45, max: 65, note: "Daily cap zona 1-2 per 5 giorni" },
  { category: "Pasti", min: 95, max: 170, note: "Mix bakery + pub + cena seduta" },
  { category: "Mance e piccoli extra", min: 25, max: 50, note: "Free tour, snack, souvenir base" },
  { category: "Transfer aeroporto A/R", min: 20, max: 60, note: "Dipende da aeroporto e fascia oraria" }
];

const euroRate = 1.17;

function formatMoneyGbp(value) {
  return `£${value.toFixed(2)}`;
}

function renderDayPlan() {
  const target = document.getElementById("dayPlan");
  target.innerHTML = dayPlanData
    .map(
      (day) => `
      <article class="day-item">
        <h3>${day.date} · ${day.title}</h3>
        <ul>${day.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="meta">
          <span class="tag">Mezzi: ${day.transport}</span>
          <span class="tag">Budget giornaliero: ${day.budget}</span>
        </div>
      </article>`
    )
    .join("");
}

function renderItineraryOptions() {
  const target = document.getElementById("itineraryOptions");
  target.innerHTML = itineraryOptionsData
    .map(
      (option) => `
      <article class="card">
        <h3>${option.name}</h3>
        <p class="muted">${option.focus}</p>
        <div class="meta">
          <span class="tag">${option.timing}</span>
          <span class="tag">Stima: £${option.costMin}-£${option.costMax} / persona</span>
        </div>
        <p class="muted">Tappe chiave: ${option.highlights.join(" · ")}</p>
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
        <h3>${a.name}</h3>
        <div class="meta">
          <span class="tag">Costo: ${formatMoneyGbp(a.cost)}</span>
          <span class="tag">Distanza dal centro (Charing Cross): ${a.distanceKm} km</span>
          <span class="tag">Mezzi: ${a.transport}</span>
        </div>
        <p class="muted">Consiglio: ${a.tip}</p>
      </article>`
    )
    .join("");

  const total = attractionsData.reduce((sum, a) => sum + a.cost, 0);
  document.getElementById("totalCost").textContent = formatMoneyGbp(total);
  document.getElementById("totalCostEur").textContent = `≈ €${(total * euroRate).toFixed(2)}`;
}

function renderMapPoints() {
  const target = document.getElementById("mapPoints");
  target.innerHTML = mapPointsData
    .map((p) => `<a class="map-item" href="${p.link}" target="_blank" rel="noreferrer">${p.name}</a>`)
    .join("");
}

function renderChecklist() {
  const storageKey = "london-trip-checklist-v1";
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
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
    input.addEventListener("change", (e) => {
      const checkbox = e.currentTarget;
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
  select.addEventListener("change", (event) => {
    renderFoodSuggestions(Number(event.target.value));
  });
}

function renderFoodSuggestions(zoneIndex) {
  const zone = hotelZonesData[zoneIndex];
  const target = document.getElementById("foodSuggestions");
  target.innerHTML = `
    <article class="map-item">
      <strong>${zone.zone}</strong>
      <p class="muted">${zone.transfer}</p>
    </article>
    ${zone.places
      .map(
        (place) => `
        <article class="map-item">
          <strong>${place.name}</strong>
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
  const attractionTotal = attractionsData.reduce((sum, a) => sum + a.cost, 0);
  const dynamicEstimate = estimateData.map((item) =>
    item.category === "Attrazioni a pagamento"
      ? { ...item, min: Math.min(item.min, attractionTotal), max: Math.max(item.max, attractionTotal) }
      : item
  );

  const totalMin = dynamicEstimate.reduce((sum, item) => sum + item.min, 0);
  const totalMax = dynamicEstimate.reduce((sum, item) => sum + item.max, 0);

  target.innerHTML = `
    ${dynamicEstimate
      .map(
        (item) => `
        <article class="card">
          <h3>${item.category}</h3>
          <p class="big">£${item.min}-£${item.max}</p>
          <p class="muted">${item.note}</p>
          <p class="muted">≈ €${(item.min * euroRate).toFixed(0)}-€${(item.max * euroRate).toFixed(0)}</p>
        </article>`
      )
      .join("")}
    <article class="card total">
      <h3>Totale viaggio stimato (escluso hotel)</h3>
      <p class="big">£${totalMin}-£${totalMax}</p>
      <p class="muted">≈ €${(totalMin * euroRate).toFixed(0)}-€${(totalMax * euroRate).toFixed(0)} a persona</p>
    </article>
  `;
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
  window.addEventListener("load", () => {
    const swUrl = new URL("sw.js", window.location.href);
    navigator.serviceWorker.register(swUrl);
  });
}

renderDayPlan();
renderItineraryOptions();
renderAttractions();
renderMapPoints();
renderChecklist();
renderHotelZones();
renderEstimateSummary();
