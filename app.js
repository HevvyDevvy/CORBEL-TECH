const indexEl = document.getElementById("index");
const paneEl = document.getElementById("reading-pane");

function renderIndex(activeId) {
  indexEl.innerHTML = "";
  PRODUCTS.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "index-item" + (p.id === activeId ? " active" : "");
    btn.innerHTML = `${p.tab}<span class="kind">${p.kind}</span>`;
    btn.addEventListener("click", () => selectProduct(p.id));
    indexEl.appendChild(btn);
  });
}

function renderProduct(p) {
  const header = p.icon
    ? `
    <div class="product-header">
      <img class="product-icon" src="${p.icon}" alt="" />
      <div>
        <div class="product-kind">${p.kind}</div>
        <h1 class="product-title">${p.tab}</h1>
      </div>
    </div>`
    : `
    <div class="product-kind">${p.kind}</div>
    <h1 class="product-title">${p.tab}</h1>`;

  paneEl.innerHTML = `
    ${header}
    <p class="product-description">${p.description}</p>
    <pre class="preview">${p.preview}</pre>
    <div class="actions">
      <a class="btn btn-primary" href="downloads/${p.file}" download>Download package</a>
      ${
        p.secondaryFile
          ? `<a class="btn btn-secondary" href="downloads/${p.secondaryFile}" download>${p.secondaryLabel}</a>`
          : ""
      }
    </div>
  `;
}

function selectProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
  renderIndex(p.id);
  renderProduct(p);
  history.replaceState(null, "", `#${p.id}`);
}

const initial = location.hash.replace("#", "") || PRODUCTS[0].id;
selectProduct(PRODUCTS.some((p) => p.id === initial) ? initial : PRODUCTS[0].id);

// --- PWA install prompt ---
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  const banner = document.createElement("div");
  banner.className = "install-banner visible";
  banner.innerHTML = `
    <span>Install this library as an app for offline access.</span>
    <button class="btn btn-secondary" id="install-btn">Install</button>
  `;
  document.querySelector(".masthead").insertAdjacentElement("afterend", banner);
  document.getElementById("install-btn").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    banner.remove();
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
