window.NOMADA = window.NOMADA || {};

(function (N) {
  const data = N.data;
  N.config = Object.assign({ apiBase: "" }, N.config || {});

  const pause = (value, ms) =>
    new Promise((resolve) => setTimeout(() => resolve(value), ms));

  async function request(path) {
    const response = await fetch(`${N.config.apiBase}${path}`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }
    return response.json();
  }

  const products = data.products.map((product) => ({ ...product }));

  N.api = {
    async getProducts(params = {}) {
      if (N.config.apiBase) {
        const query = new URLSearchParams(params).toString();
        return request(`/products${query ? `?${query}` : ""}`);
      }
      return pause(products.slice());
    },

    async getProduct(slug) {
      if (N.config.apiBase) {
        return request(`/products/${encodeURIComponent(slug)}`);
      }
      return pause(products.find((product) => product.slug === slug) || null, 60);
    },

    async getCategories() {
      if (N.config.apiBase) return request("/categories");
      return pause(data.categories.slice(), 40);
    },

    async getArtisans() {
      if (N.config.apiBase) return request("/artisans");
      return pause(data.artisans.slice(), 40);
    },

    async getJournal() {
      if (N.config.apiBase) return request("/journal");
      return pause(data.journal.slice(), 40);
    },

    async getCollection(slug) {
      if (N.config.apiBase) return request(`/collections/${encodeURIComponent(slug)}`);
      return pause(products.filter((product) => product.curated), 40);
    },

    async subscribe(email) {
      if (N.config.apiBase) {
        const response = await fetch(`${N.config.apiBase}/newsletter`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email })
        });
        if (!response.ok) throw new Error("No pudimos completar la suscripción.");
        return response.json();
      }
      return pause({ ok: true, email }, 500);
    },

    getAllProductsSync() {
      return products;
    },

    getProductSync(slug) {
      return products.find((product) => product.slug === slug) || null;
    }
  };
})(window.NOMADA);
