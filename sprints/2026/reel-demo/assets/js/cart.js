window.NOMADA = window.NOMADA || {};

(function (N) {
  const STORAGE_KEY = "nomada.cart.v1";
  const FREE_SHIPPING = 350000;
  const ui = N.ui;
  let cart = [];

  function productFor(id) {
    return N.api.getProductSync(id);
  }

  function load() {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      cart = Array.isArray(parsed)
        ? parsed
            .filter((line) => line && line.id && Number(line.qty) > 0 && productFor(line.id))
            .map((line) => ({ id: line.id, qty: Math.min(99, Math.max(1, Number(line.qty))) }))
        : [];
    } catch (error) {
      cart = [];
    }
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      return;
    }
  }

  function lines() {
    return cart
      .map((line) => {
        const product = productFor(line.id);
        return product ? { ...line, product, lineTotal: product.price * line.qty } : null;
      })
      .filter(Boolean);
  }

  function count() {
    return cart.reduce((total, line) => total + line.qty, 0);
  }

  function subtotal() {
    return lines().reduce((total, line) => total + line.lineTotal, 0);
  }

  function render() {
    const countElements = ui.qsa("[data-cart-count]");
    const itemCount = count();
    countElements.forEach((element) => {
      element.textContent = itemCount;
      element.classList.toggle("is-empty", itemCount === 0);
      element.closest("[data-cart-open]")?.classList.toggle("has-items", itemCount > 0);
    });
    const toggleLabel = ui.qs("[data-cart-toggle-label]");
    if (toggleLabel) {
      toggleLabel.textContent = itemCount
        ? `Abrir bolsa de compras, ${itemCount} ${itemCount === 1 ? "pieza" : "piezas"}`
        : "Abrir bolsa de compras";
    }

    const itemsRoot = ui.qs("[data-cart-items]");
    const emptyState = ui.qs("[data-cart-empty]");
    const footer = ui.qs("[data-cart-footer]");
    if (!itemsRoot) return;

    const currentLines = lines();

    if (!currentLines.length) {
      itemsRoot.innerHTML = "";
      if (emptyState) emptyState.hidden = false;
      if (footer) footer.hidden = true;
      return;
    }

    if (emptyState) emptyState.hidden = true;
    if (footer) footer.hidden = false;

    itemsRoot.innerHTML = currentLines.map((line) => `
      <article class="cart-line" data-line-id="${ui.escapeHtml(line.id)}">
        <a class="cart-line__image" href="product.html?slug=${encodeURIComponent(line.product.slug)}">
          <img src="${ui.escapeHtml(line.product.image)}" alt="${ui.escapeHtml(line.product.name)}" width="160" height="200" loading="lazy">
        </a>
        <div class="cart-line__body">
          <div class="cart-line__top">
            <div>
              <p class="cart-line__meta">${ui.escapeHtml(line.product.designer)}</p>
              <h3 class="cart-line__name"><a href="product.html?slug=${encodeURIComponent(line.product.slug)}">${ui.escapeHtml(line.product.name)}</a></h3>
            </div>
            <p class="cart-line__price">${ui.formatCOP(line.lineTotal)}</p>
          </div>
          <div class="cart-line__bottom">
            <div class="qty-control" aria-label="Cantidad de ${ui.escapeHtml(line.product.name)}">
              <button type="button" data-cart-action="decrease" aria-label="Reducir cantidad">−</button>
              <span aria-live="polite">${line.qty}</span>
              <button type="button" data-cart-action="increase" aria-label="Aumentar cantidad">+</button>
            </div>
            <button type="button" class="cart-line__remove" data-cart-action="remove">Eliminar</button>
          </div>
        </div>
      </article>`).join("");

    const total = subtotal();
    const remaining = Math.max(0, FREE_SHIPPING - total);
    const progress = Math.min(100, (total / FREE_SHIPPING) * 100);
    const subtotalEl = ui.qs("[data-cart-subtotal]");
    const shippingEl = ui.qs("[data-cart-shipping]");
    const progressEl = ui.qs("[data-cart-progress]");
    if (subtotalEl) subtotalEl.textContent = ui.formatCOP(total);
    if (shippingEl) {
      shippingEl.textContent = remaining
        ? `Te faltan ${ui.formatCOP(remaining)} para el envío gratis`
        : "Tu envío va por nuestra cuenta";
    }
    if (progressEl) progressEl.style.width = `${progress}%`;
  }

  function persistAndRender() {
    save();
    render();
  }

  function add(id, qty = 1) {
    const product = productFor(id);
    if (!product) return;
    const existing = cart.find((line) => line.id === id);
    if (existing) {
      existing.qty = Math.min(99, existing.qty + qty);
    } else {
      cart.push({ id, qty: Math.min(99, Math.max(1, qty)) });
    }
    persistAndRender();
    ui.toast(`${product.name} se añadió a tu bolsa.`, { icon: "✦" });
  }

  function setQty(id, qty) {
    const line = cart.find((item) => item.id === id);
    if (!line) return;
    if (qty <= 0) {
      remove(id);
      return;
    }
    line.qty = Math.min(99, qty);
    persistAndRender();
  }

  function remove(id) {
    cart = cart.filter((line) => line.id !== id);
    persistAndRender();
  }

  function openDrawer(trigger) {
    const drawer = ui.qs('[data-layer="cart"]');
    if (!drawer) return;
    openWithTrigger(drawer, trigger);
  }

  function openWithTrigger(drawer, trigger) {
    N.ui.openLayer(drawer, trigger || ui.qs("[data-cart-open]"));
  }

  function init() {
    load();
    render();

    document.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        const id = addButton.getAttribute("data-add-to-cart");
        const layer = addButton.closest("[data-layer]");
        add(id, 1);
        if (layer && layer.getAttribute("data-layer") !== "cart") {
          N.ui.closeLayer(layer, false);
        }
        openDrawer(ui.qs("[data-cart-open]"));
        return;
      }

      const openButton = event.target.closest("[data-cart-open]");
      if (openButton) {
        openDrawer(openButton);
        return;
      }

      const actionButton = event.target.closest("[data-cart-action]");
      if (!actionButton) return;
      const line = actionButton.closest("[data-line-id]");
      if (!line) return;
      const id = line.getAttribute("data-line-id");
      const current = cart.find((item) => item.id === id);
      if (!current) return;
      const action = actionButton.getAttribute("data-cart-action");
      if (action === "increase") setQty(id, current.qty + 1);
      if (action === "decrease") setQty(id, current.qty - 1);
      if (action === "remove") remove(id);
    });

    const checkout = ui.qs("[data-checkout]");
    if (checkout) {
      checkout.addEventListener("click", () => {
        ui.toast("El checkout se conectará al backend en la siguiente fase.", { icon: "→", duration: 4400 });
      });
    }

    document.addEventListener("click", (event) => {
      const productLink = event.target.closest('[data-layer="cart"] a[href^="product.html"]');
      if (!productLink) return;
      const layer = productLink.closest("[data-layer]");
      if (layer) N.ui.closeLayer(layer, false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  N.cart = {
    add,
    remove,
    setQty,
    clear() {
      cart = [];
      persistAndRender();
    },
    count,
    subtotal,
    lines,
    open: openDrawer,
    render
  };
})(window.NOMADA);
