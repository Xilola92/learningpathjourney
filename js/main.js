// =========================
// Mobile menu + language UI
// =========================

(function () {
  const header = document.querySelector("header.site-header");
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav a");
  const langButtons = document.querySelectorAll(".lang-switch button[data-lang]");

  // ---- Mobile menu toggle
  if (header && menuBtn) {
    menuBtn.addEventListener("click", () => {
      header.classList.toggle("is-open");
      const expanded = header.classList.contains("is-open");
      menuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    // close menu when clicking a link
    navLinks.forEach((a) => {
      a.addEventListener("click", () => {
        header.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // close menu if clicked outside
    document.addEventListener("click", (e) => {
      if (!header.contains(e.target)) {
        header.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Language buttons UI + persistence
  function markActiveLang(lang) {
    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  // Load saved language
  const savedLang = localStorage.getItem("lpj_lang");
  if (savedLang) markActiveLang(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;

      localStorage.setItem("lpj_lang", lang);
      markActiveLang(lang);

      // If you already have translation function — use it
      if (typeof window.setLanguage === "function") {
        window.setLanguage(lang);
      } else if (typeof window.applyTranslations === "function") {
        window.applyTranslations(lang);
      }

      // close menu on mobile after selecting a language
      if (header) header.classList.remove("is-open");
    });
  });
})();
