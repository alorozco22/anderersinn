window.NOMADA = window.NOMADA || {};

(function (N) {
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  let lastFocus = null;
  let toastTimer = null;

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatCOP(value) {
    const amount = Number(value) || 0;
    try {
      return `$ ${new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(amount)}`;
    } catch (error) {
      return `$ ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
  }

  function categoryName(slug) {
    const category = N.data.categories.find((item) => item.slug === slug);
    return category ? category.short : slug;
  }

  function productCard(product, index = 0) {
    const category = categoryName(product.category);
    const badge = product.badge
      ? `<span class="badge">${escapeHtml(product.badge)}</span>`
      : "";

    return `
      <article class="product-card" data-reveal style="--reveal-delay:${Math.min(index, 6) * 55}ms">
        <div class="product-card__media">
          <a class="product-card__image-link" href="product.html?slug=${encodeURIComponent(product.slug)}" aria-label="Ver ${escapeHtml(product.name)}">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} de ${escapeHtml(product.designer)}" loading="lazy" width="1200" height="1500">
          </a>
          <div class="product-card__badges">${badge}</div>
          <div class="product-card__actions">
            <button class="product-card__action" type="button" data-quickview="${escapeHtml(product.id)}">Vista rápida</button>
            <button class="product-card__action product-card__action--solid" type="button" data-add-to-cart="${escapeHtml(product.id)}">Añadir a la bolsa</button>
          </div>
        </div>
        <div class="product-card__info">
          <div class="product-card__copy">
            <p class="product-card__meta">${escapeHtml(category)} <span aria-hidden="true">·</span> ${escapeHtml(product.region)}</p>
            <h3 class="product-card__name"><a href="product.html?slug=${encodeURIComponent(product.slug)}">${escapeHtml(product.name)}</a></h3>
            <p class="product-card__maker">${escapeHtml(product.designer)}</p>
          </div>
          <p class="product-card__price">${formatCOP(product.price)}</p>
        </div>
      </article>`;
  }

  function lockBody() {
    document.body.classList.add("is-locked");
  }

  function unlockBodyIfClear() {
    if (!document.querySelector('[data-layer].is-open')) {
      document.body.classList.remove("is-locked");
    }
  }

  function focusable(layer) {
    return qsa(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      layer
    ).filter((element) => element.offsetParent !== null);
  }

  function openLayer(layer, trigger) {
    if (!layer) return;
    lastFocus = trigger || document.activeElement;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    layer.removeAttribute("inert");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    lockBody();
    const target = qs("[data-autofocus]", layer) || focusable(layer)[0];
    if (target) {
      window.setTimeout(() => target.focus({ preventScroll: true }), 140);
    }
  }

  function closeLayer(layer, restoreFocus = true) {
    if (!layer) return;
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    layer.setAttribute("inert", "");
    const trigger = lastFocus;
    if (trigger && trigger.getAttribute) trigger.setAttribute("aria-expanded", "false");
    layer.dispatchEvent(new CustomEvent("layer:close"));
    unlockBodyIfClear();
    if (restoreFocus && trigger && document.contains(trigger)) {
      window.setTimeout(() => trigger.focus({ preventScroll: true }), 60);
    }
  }

  function toast(message, options = {}) {
    const container = qs("[data-toast-container]");
    if (!container) return;
    container.innerHTML = `
      <div class="toast__inner" role="status">
        <span class="toast__mark" aria-hidden="true">${options.icon || "✦"}</span>
        <span>${escapeHtml(message)}</span>
      </div>`;
    container.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => container.classList.remove("is-visible"), options.duration || 3600);
  }

  function initReveal(scope = document) {
    const items = qsa("[data-reveal]", scope).filter((item) => !item.classList.contains("is-visible"));
    if (!items.length) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  }

  function initHeader() {
    const header = qs("[data-header]");
    if (!header) return;
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileMenu() {
    const trigger = qs("[data-menu-open]");
    const menu = qs('[data-layer="menu"]');
    if (!trigger || !menu) return;
    trigger.addEventListener("click", () => openLayer(menu, trigger));
    qsa("a", menu).forEach((link) => link.addEventListener("click", () => closeLayer(menu, false)));
  }

  function initSearch() {
    const overlay = qs('[data-layer="search"]');
    if (!overlay) return;
    const input = qs("[data-search-input]", overlay);
    const results = qs("[data-search-results]", overlay);
    const form = qs("[data-search-form]", overlay);
    const products = N.api.getAllProductsSync();
    const triggers = qsa("[data-search-open]");

    const render = (query = "") => {
      const value = query.trim().toLowerCase();
      const list = value
        ? products.filter((product) =>
            [product.name, product.designer, product.region, product.category, product.materials, product.technique, product.description]
              .join(" ")
              .toLowerCase()
              .includes(value)
          ).slice(0, 5)
        : products.filter((product) => product.curated).slice(0, 4);

      if (!list.length) {
        results.innerHTML = `
          <div class="search-empty">
            <p class="eyebrow">Sin resultados</p>
            <p>No encontramos piezas para “${escapeHtml(query)}”. Prueba con cerámica, lino o Chocó.</p>
          </div>`;
        return;
      }

      results.innerHTML = `
        <p class="search-results__label">${value ? `${list.length} pieza${list.length === 1 ? "" : "s"}` : "Piezas destacadas"}</p>
        <div class="search-results__grid">
          ${list.map((product) => `
            <a class="search-result" href="product.html?slug=${encodeURIComponent(product.slug)}">
              <img src="${escapeHtml(product.image)}" alt="" loading="lazy">
              <span class="search-result__copy">
                <strong>${escapeHtml(product.name)}</strong>
                <small>${escapeHtml(product.designer)} · ${escapeHtml(categoryName(product.category))}</small>
              </span>
              <span class="search-result__price">${formatCOP(product.price)}</span>
            </a>`).join("")}
        </div>`;
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        render(input.value);
        openLayer(overlay, trigger);
      });
    });

    input.addEventListener("input", () => render(input.value));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();
      window.location.href = query ? `shop.html?q=${encodeURIComponent(query)}` : "shop.html";
    });

    overlay.addEventListener("layer:close", () => {
      input.value = "";
      results.innerHTML = "";
    });

    render("");
  }

  function openQuickView(productId, trigger) {
    const product = N.api.getProductSync(productId);
    const modal = qs('[data-layer="quickview"]');
    if (!product || !modal) return;
    const set = (selector, value) => {
      const el = qs(selector, modal);
      if (el) el.textContent = value;
    };
    const image = qs("[data-qv-image]", modal);
    if (image) {
      image.src = product.image;
      image.alt = `${product.name} de ${product.designer}`;
    }
    set("[data-qv-meta]", `${categoryName(product.category)} · ${product.designer}`);
    set("[data-qv-title]", product.name);
    set("[data-qv-price]", formatCOP(product.price));
    set("[data-qv-description]", product.description);
    set("[data-qv-materials]", product.materials);
    set("[data-qv-dimensions]", product.dimensions);
    set("[data-qv-region]", product.region);
    const add = qs("[data-qv-add]", modal);
    if (add) add.setAttribute("data-add-to-cart", product.id);
    const link = qs("[data-qv-link]", modal);
    if (link) link.href = `product.html?slug=${encodeURIComponent(product.slug)}`;
    openLayer(modal, trigger);
  }

  function initQuickView() {
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-quickview]");
      if (!trigger) return;
      openQuickView(trigger.getAttribute("data-quickview"), trigger);
    });
  }

  function initNewsletter() {
    qsa("[data-newsletter]").forEach((form) => {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const emailInput = qs('input[type="email"]', form);
        const button = qs('button[type="submit"]', form);
        if (!emailInput || !emailInput.checkValidity()) {
          emailInput.reportValidity();
          return;
        }
        const original = button ? button.textContent : "";
        if (button) {
          button.disabled = true;
          button.textContent = "Enviando…";
        }
        try {
          await N.api.subscribe(emailInput.value.trim());
          form.reset();
          toast("Bienvenido al viaje. Revisa tu correo.", { icon: "✳" });
        } catch (error) {
          toast("No pudimos completar la suscripción. Intenta de nuevo.", { icon: "!" });
        } finally {
          if (button) {
            button.disabled = false;
            button.textContent = original;
          }
        }
      });
    });
  }

  function initComingSoon() {
    qsa("[data-coming-soon]").forEach((button) => {
      button.addEventListener("click", () => toast("Esta historia estará disponible muy pronto.", { icon: "✎" }));
    });
  }

  function initInfoLinks() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-info]");
      if (!link) return;
      event.preventDefault();
      toast(link.getAttribute("data-info"), { icon: "i", duration: 4600 });
    });
  }

  function initLayerEvents() {
    document.addEventListener("click", (event) => {
      const closer = event.target.closest("[data-close-layer]");
      if (!closer) return;
      const layer = closer.closest("[data-layer]");
      if (layer) closeLayer(layer);
    });

    document.addEventListener("keydown", (event) => {
      const layers = qsa("[data-layer].is-open");
      const layer = layers[layers.length - 1];
      if (!layer) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeLayer(layer);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable(layer);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  function initImageFallbacks() {
    document.addEventListener(
      "error",
      (event) => {
        const image = event.target;
        if (!(image instanceof HTMLImageElement)) return;
        image.classList.add("is-missing");
        image.removeAttribute("src");
      },
      true
    );
  }

  function init() {
    initHeader();
    initLayerEvents();
    initMobileMenu();
    initSearch();
    initQuickView();
    initNewsletter();
    initComingSoon();
    initInfoLinks();
    initImageFallbacks();
    initReveal();
  }

  N.ui = {
    qs,
    qsa,
    escapeHtml,
    formatCOP,
    categoryName,
    productCard,
    openLayer,
    closeLayer,
    toast,
    initReveal,
    openQuickView
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.NOMADA);
