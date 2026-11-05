(function (N) {
  const ui = N.ui;
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

  function detailMarkup(product, artisan) {
    const badges = product.badge
      ? `<div class="product-gallery__badges"><span class="badge">${ui.escapeHtml(product.badge)}</span></div>`
      : "";

    return `
      <div class="product-detail">
        <div class="product-gallery" data-reveal>
          <div class="product-gallery__main">
            <img data-gallery-main src="${ui.escapeHtml(product.gallery[0])}" alt="${ui.escapeHtml(product.name)} de ${ui.escapeHtml(product.designer)}" width="1200" height="1500">
            ${badges}
          </div>
          <div class="product-gallery__thumbs" aria-label="Imágenes de la pieza">
            ${product.gallery.map((image, index) => `
              <button class="product-thumb${index === 0 ? " is-active" : ""}" type="button" data-gallery-thumb data-src="${ui.escapeHtml(image)}" aria-label="Ver imagen ${index + 1} de ${product.gallery.length}" aria-pressed="${index === 0}">
                <img src="${ui.escapeHtml(image)}" alt="" width="400" height="400" loading="lazy">
              </button>`).join("")}
          </div>
        </div>

        <div class="product-info" data-reveal style="--reveal-delay:100ms">
          <p class="product-info__category"><span></span>${ui.escapeHtml(ui.categoryName(product.category))} · ${ui.escapeHtml(product.region)}</p>
          <h1>${ui.escapeHtml(product.name)}</h1>
          <p class="product-info__maker">Por ${ui.escapeHtml(product.designer)}</p>
          <p class="product-info__price">${ui.formatCOP(product.price)}</p>
          <p class="product-info__description">${ui.escapeHtml(product.description)}</p>

          <dl class="product-info__meta">
            <div><dt>Materiales</dt><dd>${ui.escapeHtml(product.materials)}</dd></div>
            <div><dt>Técnica</dt><dd>${ui.escapeHtml(product.technique)}</dd></div>
            <div><dt>Medidas</dt><dd>${ui.escapeHtml(product.dimensions)}</dd></div>
            <div><dt>Edición</dt><dd>${ui.escapeHtml(product.edition)}</dd></div>
          </dl>

          <div class="product-purchase">
            <div class="qty-control" data-product-qty aria-label="Cantidad">
              <button type="button" data-qty-action="decrease" aria-label="Reducir cantidad">−</button>
              <span data-qty-value aria-live="polite">1</span>
              <button type="button" data-qty-action="increase" aria-label="Aumentar cantidad">+</button>
            </div>
            <button class="btn btn--dark" type="button" data-product-add>
              Añadir a la bolsa · ${ui.formatCOP(product.price)}
            </button>
          </div>

          <div class="product-accordions">
            <details class="product-accordion" open>
              <summary>Envíos y devoluciones <span aria-hidden="true"></span></summary>
              <p>Enviamos a todo Colombia en 3 a 7 días hábiles. Envío gratis desde $350.000. Cada pieza se empaca a mano; aceptamos cambios dentro de los 10 días siguientes a la entrega.</p>
            </details>
            <details class="product-accordion">
              <summary>Cuidados y durabilidad <span aria-hidden="true"></span></summary>
              <p>Al ser piezas hechas a mano, pueden presentar variaciones de tono, textura o medida. Lava la cerámica a mano y evita cambios bruscos de temperatura. Limpia la madera con un paño seco y aceite natural una vez al año.</p>
            </details>
            <details class="product-accordion">
              <summary>Una pieza con historia <span aria-hidden="true"></span></summary>
              <p>Este objeto fue hecho por ${ui.escapeHtml(product.designer)} en ${ui.escapeHtml(product.region)}. Al comprarlo, apoyas directamente a un taller independiente y a su cadena de oficio local.</p>
            </details>
          </div>
        </div>
      </div>`;
  }

  function storyMarkup(product, artisan) {
    if (!artisan) return "";
    return `
      <section class="product-story" aria-labelledby="story-title">
        <div class="container product-story__grid">
          <div class="product-story__image" data-reveal>
            <img src="${ui.escapeHtml(product.gallery[1] || product.image)}" alt="Detalle de ${ui.escapeHtml(product.name)}" width="1200" height="1500" loading="lazy">
          </div>
          <div class="product-story__copy" data-reveal style="--reveal-delay:100ms">
            <p class="eyebrow">La historia de la pieza</p>
            <h2 class="product-story__quote" id="story-title">“${ui.escapeHtml(artisan.quote)}”</h2>
            <p>${ui.escapeHtml(product.story)}</p>
            <div class="product-story__artisan">
              <img src="${ui.escapeHtml(artisan.image)}" alt="${ui.escapeHtml(artisan.founder)}" width="200" height="200" loading="lazy">
              <div>
                <strong>${ui.escapeHtml(artisan.name)}</strong>
                <span>${ui.escapeHtml(artisan.founder)} · ${ui.escapeHtml(artisan.region)}</span>
              </div>
            </div>
            <a class="text-link" href="shop.html?q=${encodeURIComponent(artisan.name)}">Ver más de este taller ${arrow}</a>
          </div>
        </div>
      </section>`;
  }

  function renderNotFound() {
    const root = ui.qs("[data-product-root]");
    if (root) {
      root.innerHTML = `
        <div class="not-found">
          <p class="eyebrow eyebrow--plain">Error 404</p>
          <h1>Esta pieza se fue de viaje.</h1>
          <p>No encontramos lo que buscabas. Puede que ya no esté disponible o que el enlace haya cambiado.</p>
          <a class="btn btn--dark" href="shop.html">Volver a la tienda</a>
        </div>`;
    }
    const breadcrumb = ui.qs("[data-breadcrumb-name]");
    if (breadcrumb) breadcrumb.textContent = "No encontrada";
  }

  function bindDetail(product) {
    const root = ui.qs("[data-product-root]");
    if (!root) return;
    const main = ui.qs("[data-gallery-main]", root);
    ui.qsa("[data-gallery-thumb]", root).forEach((button) => {
      button.addEventListener("click", () => {
        if (!main) return;
        main.src = button.getAttribute("data-src");
        main.alt = `${product.name} de ${product.designer}`;
        ui.qsa("[data-gallery-thumb]", root).forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
      });
    });

    let qty = 1;
    const value = ui.qs("[data-qty-value]", root);
    const addButton = ui.qs("[data-product-add]", root);
    const updateAddLabel = () => {
      if (addButton) addButton.textContent = `Añadir a la bolsa · ${ui.formatCOP(product.price * qty)}`;
    };
    ui.qsa("[data-qty-action]", root).forEach((button) => {
      button.addEventListener("click", () => {
        qty = button.getAttribute("data-qty-action") === "increase"
          ? Math.min(99, qty + 1)
          : Math.max(1, qty - 1);
        if (value) value.textContent = qty;
        updateAddLabel();
      });
    });
    updateAddLabel();

    if (addButton) {
      addButton.addEventListener("click", () => {
        N.cart.add(product.id, qty);
        N.cart.open(addButton);
      });
    }
  }

  function renderRelated(product, products) {
    const section = ui.qs("[data-related-section]");
    const grid = ui.qs("[data-related-grid]");
    if (!section || !grid) return;
    const related = products
      .filter((item) => item.id !== product.id && item.category === product.category)
      .slice(0, 3);
    const fill = products.filter((item) => item.id !== product.id && !related.includes(item));
    while (related.length < 3 && fill.length) related.push(fill.shift());
    if (!related.length) return;
    grid.innerHTML = related.map((item, index) => ui.productCard(item, index)).join("");
    section.hidden = false;
  }

  async function init() {
    const slug = new URLSearchParams(window.location.search).get("slug");
    const [product, artisans, products] = await Promise.all([
      slug ? N.api.getProduct(slug) : Promise.resolve(null),
      N.api.getArtisans(),
      N.api.getProducts()
    ]);

    if (!product) {
      renderNotFound();
      return;
    }

    const artisan = artisans.find((item) => item.id === product.artisanId);
    const root = ui.qs("[data-product-root]");
    const storyRoot = ui.qs("[data-product-story]");
    if (root) root.innerHTML = detailMarkup(product, artisan);
    if (storyRoot) storyRoot.innerHTML = storyMarkup(product, artisan);

    const breadcrumb = ui.qs("[data-breadcrumb-name]");
    if (breadcrumb) breadcrumb.textContent = product.name;

    document.title = `${product.name} — NÓMADA`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", product.description);

    bindDetail(product);
    renderRelated(product, products);
    ui.initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.NOMADA);
