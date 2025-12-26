/* =========================
   ACTIVE NAV LINK
========================= */
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* =========================
   TRANSLATIONS
========================= */
const translations = {
  en: {
    home_title: "My Learning Path",
    home_subtitle:
      "A personal journey through education, discipline, and growth.",
    home_button: "Start the Journey",

    about_title: "About This Site",
    journey_title: "My Journey",
    contact_title: "Contact"
  },

  de: {
    home_title: "Mein Lernweg",
    home_subtitle:
      "Eine persönliche Reise durch Bildung, Disziplin und Wachstum.",
    home_button: "Reise beginnen",

    about_title: "Über diese Seite",
    journey_title: "Mein Weg",
    contact_title: "Kontakt"
  },

  ru: {
    home_title: "Мой путь обучения",
    home_subtitle:
      "Личный путь через образование, дисциплину и рост.",
    home_button: "Начать путь",

    about_title: "О сайте",
    journey_title: "Мой путь",
    contact_title: "Контакты"
  },

  uz: {
    home_title: "Mening o‘rganish yo‘lim",
    home_subtitle:
      "Ta’lim, intizom va rivojlanish orqali shaxsiy yo‘l.",
    home_button: "Yo‘lni boshlash",

    about_title: "Sayt haqida",
    journey_title: "Mening yo‘lim",
    contact_title: "Aloqa"
  }
};

/* =========================
   LANGUAGE SWITCH
========================= */
const langButtons = document.querySelectorAll(
  ".language-switcher button"
);

langButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("siteLanguage", lang);
}

/* =========================
   LOAD SAVED LANGUAGE
========================= */
const savedLang = localStorage.getItem("siteLanguage");
if (savedLang) {
  changeLanguage(savedLang);
}
