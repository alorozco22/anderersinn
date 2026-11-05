(function (N) {
  const ui = N.ui;
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

  function categoryCard(category, index, products) {
    const count = products.filter((product) => product.category === category.slug).length;
    return `
      <a class="category-card" href="shop.html?category=${encodeURIComponent(category.slug)}" data-reveal style="--reveal-delay:${index * 70}ms">
        <img src="${ui.escapeHtml(category.image)}" alt="${ui.escapeHtml(category.name)}" width="1200" height="1500" loading="lazy">
        <span class="category-card__index">${ui.escapeHtml(category.eyebrow)} · ${count} piezas</span>
        <span class="category-card__content">
          <h3>${ui.escapeHtml(category.name)}</h3>
          <p>${ui.escapeHtml(category.description)}</p>
        </span>
        <span class="category-card__arrow">${arrow}</span>
      </a>`;
  }

  function artisanRow(artisan, index) {
    return `
      <a class="artisan-row" href="shop.html?q=${encodeURIComponent(artisan.name)}" data-reveal style="--reveal-delay:${index * 60}ms">
        <span class="artisan-row__name">${ui.escapeHtml(artisan.name)}</span>
        <span class="artisan-row__meta">${ui.escapeHtml(artisan.region)} · ${ui.escapeHtml(artisan.craft)} ${arrow}</span>
      </a>`;
  }

  function journalCard(article, index) {
    return `
      <article class="journal-card" data-reveal style="--reveal-delay:${index * 80}ms">
        <div class="journal-card__image">
          <img src="${ui.escapeHtml(article.image)}" alt="${ui.escapeHtml(article.title)}" width="1200" height="900" loading="lazy">
        </div>
        <div class="journal-card__meta"><span>${ui.escapeHtml(article.category)}</span><span>${ui.escapeHtml(article.readTime)} de lectura</span></div>
        <h3>${ui.escapeHtml(article.title)}</h3>
        <p>${ui.escapeHtml(article.excerpt)}</p>
        <button class="journal-card__button" type="button" data-coming-soon>Leer historia</button>
      </article>`;
  }

  async function render() {
    const [products, categories, artisans, journal] = await Promise.all([
      N.api.getProducts(),
      N.api.getCategories(),
      N.api.getArtisans(),
      N.api.getJournal()
    ]);

    const curatedRoot = ui.qs("[data-curated-products]");
    if (curatedRoot) {
      const curated = products.filter((product) => product.curated).slice(0, 4);
      curatedRoot.innerHTML = curated.map((product, index) => ui.productCard(product, index)).join("");
    }

    const categoriesRoot = ui.qs("[data-categories]");
    if (categoriesRoot) {
      categoriesRoot.innerHTML = categories.map((category, index) => categoryCard(category, index, products)).join("");
    }

    const artisansRoot = ui.qs("[data-artisans]");
    if (artisansRoot) {
      artisansRoot.innerHTML = artisans.slice(0, 3).map((artisan, index) => artisanRow(artisan, index)).join("");
    }

    const journalRoot = ui.qs("[data-journal]");
    if (journalRoot) {
      journalRoot.innerHTML = journal.map((article, index) => journalCard(article, index)).join("");
      ui.qsa("[data-coming-soon]", journalRoot).forEach((button) => {
        button.addEventListener("click", () => ui.toast("Esta historia estará disponible muy pronto.", { icon: "✎" }));
      });
    }

    ui.initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})(window.NOMADA);
