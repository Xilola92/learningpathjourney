/* =========================
   LANGUAGE SWITCHER
========================= */

/*
HTML requirement (ВАЖНО, но ты уже это используешь):
- Все переводимые элементы имеют атрибут: data-i18n="key"
- Кнопки языков имеют: data-lang="en|de|ru|uz"
*/

const translations = {
    en: {
        nav_home: "Home",
        nav_journey: "Journey",
        nav_about: "About",
        nav_contact: "Contact",

        hero_title: "My Learning Path",
        hero_subtitle: "A personal journey through education, discipline, and growth.",

        contact_title: "Contact",
        contact_subtitle: "You can send me a message using the form below.",
        form_name: "Your name",
        form_email: "Your email",
        form_message: "Your message",
        form_send: "Send message"
    },

    de: {
        nav_home: "Start",
        nav_journey: "Weg",
        nav_about: "Über mich",
        nav_contact: "Kontakt",

        hero_title: "Mein Lernweg",
        hero_subtitle: "Ein persönlicher Weg durch Bildung, Disziplin und Wachstum.",

        contact_title: "Kontakt",
        contact_subtitle: "Sie können mir über das Formular unten schreiben.",
        form_name: "Ihr Name",
        form_email: "Ihre E-Mail",
        form_message: "Ihre Nachricht",
        form_send: "Nachricht senden"
    },

    ru: {
        nav_home: "Главная",
        nav_journey: "Путь",
        nav_about: "О сайте",
        nav_contact: "Контакты",

        hero_title: "Мой путь обучения",
        hero_subtitle: "Личный путь через образование, дисциплину и рост.",

        contact_title: "Контакт",
        contact_subtitle: "Вы можете отправить мне сообщение через форму ниже.",
        form_name: "Ваше имя",
        form_email: "Ваш email",
        form_message: "Ваше сообщение",
        form_send: "Отправить"
    },

    uz: {
        nav_home: "Bosh sahifa",
        nav_journey: "Yo‘l",
        nav_about: "Sayt haqida",
        nav_contact: "Aloqa",

        hero_title: "Mening o‘rganish yo‘lim",
        hero_subtitle: "Ta’lim, intizom va o‘sish orqali shaxsiy yo‘l.",

        contact_title: "Aloqa",
        contact_subtitle: "Quyidagi forma orqali menga xabar yuborishingiz mumkin.",
        form_name: "Ismingiz",
        form_email: "Emailingiz",
        form_message: "Xabaringiz",
        form_send: "Yuborish"
    }
};

/* =========================
   APPLY TRANSLATION
========================= */

function setLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });
});

/* =========================
   MOBILE MENU (SAFE)
========================= */

/*
HTML requirement:
- Кнопка меню: id="menu-toggle"
- Навигация: id="nav-links"
*/

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});
