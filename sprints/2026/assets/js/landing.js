(() => {
  /*
   * PENDIENTE PARA PUBLICAR:
   * Reemplaza 573000000000 por el número comercial real de WhatsApp.
   * Formato: solo dígitos, con indicativo de país (57 para Colombia).
   * Ejemplo: "573001234567".
   */
  const WHATSAPP_NUMBER = "573000000000";
  const WHATSAPP_MESSAGE =
    "Hola, me interesa el Sprint de diseño de producto tech. ¿Me puedes compartir información sobre las modalidades y los pasos para inscribirme?";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  const header = document.querySelector("[data-header]");
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("main-nav");

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".nav-toggle__label").textContent = "Menú";
    document.body.classList.remove("menu-open");
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.querySelector(".nav-toggle__label").textContent = isOpen
        ? "Cerrar"
        : "Menú";
      document.body.classList.toggle("menu-open", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeNav();
    });
  }

  const videoPlayer = document.querySelector("[data-video-player]");
  if (videoPlayer) {
    const video = videoPlayer.querySelector("video");
    const playButton = videoPlayer.querySelector("[data-video-play]");

    if (video && playButton) {
      playButton.addEventListener("click", async () => {
        videoPlayer.classList.add("is-playing");
        video.controls = true;
        video.muted = false;

        try {
          await video.play();
        } catch {
          video.muted = true;
          try {
            await video.play();
          } catch {
            videoPlayer.classList.remove("is-playing");
            video.controls = false;
          }
        }
      });
    }
  }

  const mobileCta = document.querySelector("[data-mobile-cta]");
  const finalCta = document.getElementById("conversar");

  if (mobileCta && finalCta && "IntersectionObserver" in window) {
    const mobileCtaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          mobileCta.style.opacity = isVisible ? "0" : "1";
          mobileCta.style.pointerEvents = isVisible ? "none" : "auto";
          mobileCta.style.transform = isVisible
            ? "translateY(110%)"
            : "translateY(0)";
          mobileCta.style.visibility = isVisible ? "hidden" : "visible";
          mobileCta.setAttribute("aria-hidden", String(isVisible));
          mobileCta.inert = isVisible;
          mobileCta.style.transition =
            "opacity 0.3s ease, transform 0.3s ease";
        });
      },
      { threshold: 0.12 }
    );

    mobileCtaObserver.observe(finalCta);
  }
})();
