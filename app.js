const dayPlanData = [
  {
    date: "23 Apr",
    title: "Arrivo + orientamento centrale",
    items: ["Check-in hotel", "Passeggiata Covent Garden e Leicester Square", "Cena soft: Soho"],
    transport: "Tube/Bus",
    budget: "£25-45"
  },
  {
    date: "24 Apr",
    title: "Free Tour agenzia + Westminster",
    items: [
      "Trafalgar Square → Buckingham Palace",
      "St. James's Park",
      "Westminster Abbey (esterno) + Big Ben",
      "Mancia free tour consigliata"
    ],
    transport: "A piedi + Tube",
    budget: "£10-20"
  },
  {
    date: "25 Apr",
    title: "Musei e quartieri",
    items: ["Natural History Museum (gratis)", "South Kensington", "Camden Town serale"],
    transport: "Tube",
    budget: "£15-30"
  },
  {
    date: "26 Apr",
    title: "Icone di Londra",
    items: ["Tower of London", "Tower Bridge", "Sky Garden (gratis su prenotazione)"],
    transport: "Tube + passeggiata",
    budget: "£35-50"
  },
  {
    date: "27 Apr",
    title: "Ultime tappe + rientro",
    items: ["Notting Hill e Portobello", "Souvenir", "Transfer aeroporto"],
    transport: "Tube/Train",
    budget: "£20-40"
  }
];

const attractionsData = [
  { name: "Tower of London", cost: 34.8, distanceKm: 4.1, transport: "District/Circle - Tower Hill", tip: "Prenota orario mattutino" },
  { name: "London Eye", cost: 29, distanceKm: 1.2, transport: "Waterloo", tip: "Biglietto online spesso più economico" },
  { name: "Westminster Abbey (interno)", cost: 29, distanceKm: 0.8, transport: "Westminster/St James's Park", tip: "Audio guide inclusa" },
  { name: "St Paul's Cathedral", cost: 26, distanceKm: 2.2, transport: "St Paul's", tip: "Vista cupola eccellente" },
  { name: "Sky Garden", cost: 0, distanceKm: 3.5, transport: "Monument", tip: "Gratis ma prenotazione obbligatoria" }
];

const mapPointsData = [
  { name: "Trafalgar Square (inizio free tour)", link: "https://maps.google.com/?q=Trafalgar+Square+London" },
  { name: "Buckingham Palace", link: "https://maps.google.com/?q=Buckingham+Palace+London" },
  { name: "Big Ben", link: "https://maps.google.com/?q=Big+Ben+London" },
  { name: "Tower of London", link: "https://maps.google.com/?q=Tower+of+London" },
  { name: "Heathrow Airport", link: "https://maps.google.com/?q=Heathrow+Airport" }
];

const checklistData = [
  "Documento valido + eventuale ETA UK",
  "Assicurazione viaggio e numeri emergenza",
  "Prenotazioni attrazioni (Tower, London Eye, Sky Garden)",
  "Carta contactless e budget Oyster/Tube",
  "Adattatore presa UK (tipo G)",
  "Meteo e outfit a strati",
  "Power bank e roaming dati"
];

const euroRate = 1.17;

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
          <span class="tag">Budget: ${day.budget}</span>
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
        <h3>${a.name}</h3>
        <div class="meta">
          <span class="tag">Costo: £${a.cost.toFixed(2)}</span>
          <span class="tag">Distanza dal centro (Charing Cross): ${a.distanceKm} km</span>
          <span class="tag">Mezzi: ${a.transport}</span>
        </div>
        <p class="muted">Consiglio: ${a.tip}</p>
      </article>`
    )
    .join("");

  const total = attractionsData.reduce((sum, a) => sum + a.cost, 0);
  document.getElementById("totalCost").textContent = `£${total.toFixed(2)}`;
  document.getElementById("totalCostEur").textContent = `≈ €${(total * euroRate).toFixed(2)}`;
}

function renderMapPoints() {
  const target = document.getElementById("mapPoints");
  target.innerHTML = mapPointsData
    .map(
      (p) => `
      <a class="map-item" href="${p.link}" target="_blank" rel="noreferrer">${p.name}</a>`
    )
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
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
}

renderDayPlan();
renderAttractions();
renderMapPoints();
renderChecklist();
