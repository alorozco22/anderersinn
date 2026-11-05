(function (N) {
  const ui = N.ui;
  const state = {
    category: "all",
    price: "all",
    sort: "featured",
    query: ""
  };
  let products = [];
  let categories = [];

  function activeFilters() {
    return state.category !== "all" || state.price !== "all" || Boolean(state.query);
  }

  function filterProducts() {
    const query = state.query.trim().toLowerCase();
    let result = products.filter((product) => {
      if (state.category !== "all" && product.category !== state.category) return false;
      if (state.price === "under-300" && product.price >= 300000) return false;
      if (state.price === "300-800" && (product.price < 300000 || product.price > 800000)) return false;
      if (state.price === "over-800" && product.price <= 800000) return false;
      if (query) {
        const haystack = [product.name, product.designer, product.region, ui.categoryName(product.category), product.materials, product.technique, product.description]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    if (state.sort === "price-asc") result = result.sort((a, b) => a.price - b.price);
    if (state.sort === "price-desc") result = result.sort((a, b) => b.price - a.price);
    if (state.sort === "name") result = result.sort((a, b) => a.name.localeCompare(b.name, "es"));
    return result;
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.category !== "all") params.set("category", state.category);
    if (state.price !== "all") params.set("price", state.price);
    if (state.sort !== "featured") params.set("sort", state.sort);
    if (state.query) params.set("q", state.query);
    const next = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", next);
  }

  function renderChips() {
    const root = ui.qs("[data-filter-chips]");
    if (!root) return;
    const items = [{ slug: "all", short: "Todo" }, ...categories];
    root.innerHTML = items
      .map((category) => `
        <button class="filter-chip${state.category === category.slug ? " is-active" : ""}" type="button" data-filter-category="${ui.escapeHtml(category.slug)}" aria-pressed="${state.category === category.slug}">
          ${ui.escapeHtml(category.short)}
        </button>`)
      .join("");
    ui.qsa("[data-filter-category]", root).forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.getAttribute("data-filter-category");
        renderChips();
        render();
        syncUrl();
      });
    });
  }

  function render() {
    const grid = ui.qs("[data-shop-grid]");
    const empty = ui.qs("[data-shop-empty]");
    const count = ui.qs("[data-results-count]");
    const clear = ui.qs("[data-clear-filters]");
    if (!grid) return;

    const result = filterProducts();
    grid.innerHTML = result.map((product, index) => ui.productCard(product, index)).join("");
    if (empty) empty.hidden = result.length > 0;
    grid.hidden = result.length === 0;

    if (count) {
      const prefix = state.query ? `Resultados para “${state.query}” · ` : "";
      count.textContent = `${prefix}${result.length} pieza${result.length === 1 ? "" : "s"}`;
    }

    if (clear) clear.hidden = !activeFilters();
    ui.initReveal();
  }

  function resetFilters() {
    state.category = "all";
    state.price = "all";
    state.sort = "featured";
    state.query = "";
    const priceSelect = ui.qs("[data-price-filter]");
    const sortSelect = ui.qs("[data-sort]");
    if (priceSelect) priceSelect.value = "all";
    if (sortSelect) sortSelect.value = "featured";
    renderChips();
    render();
    syncUrl();
  }

  async function init() {
    const params = new URLSearchParams(window.location.search);
    state.query = params.get("q") || "";
    state.category = params.get("category") || "all";
    state.price = params.get("price") || "all";
    state.sort = params.get("sort") || "featured";

    const [allProducts, allCategories] = await Promise.all([
      N.api.getProducts(),
      N.api.getCategories()
    ]);
    products = allProducts;
    categories = allCategories;
    if (!categories.some((category) => category.slug === state.category)) state.category = "all";

    const total = ui.qs("[data-shop-total]");
    if (total) total.textContent = products.length;

    const priceSelect = ui.qs("[data-price-filter]");
    const sortSelect = ui.qs("[data-sort]");
    if (priceSelect) {
      priceSelect.value = state.price;
      priceSelect.addEventListener("change", () => {
        state.price = priceSelect.value;
        render();
        syncUrl();
      });
    }
    if (sortSelect) {
      sortSelect.value = state.sort;
      sortSelect.addEventListener("change", () => {
        state.sort = sortSelect.value;
        render();
        syncUrl();
      });
    }

    ui.qsa("[data-clear-filters]").forEach((button) => {
      button.addEventListener("click", resetFilters);
    });

    renderChips();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.NOMADA);
