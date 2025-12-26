const translations = {
  en: {
    contact_title: "Contact",
    contact_subtitle: "You can send me a message using the form below.",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Your message",
    send: "Send message"
  },
  de: {
    contact_title: "Kontakt",
    contact_subtitle: "Sie können mir über das Formular unten schreiben.",
    form_name: "Ihr Name",
    form_email: "Ihre E-Mail",
    form_message: "Ihre Nachricht",
    send: "Nachricht senden"
  },
  ru: {
    contact_title: "Контакты",
    contact_subtitle: "Вы можете отправить мне сообщение через форму ниже.",
    form_name: "Ваше имя",
    form_email: "Ваш email",
    form_message: "Ваше сообщение",
    send: "Отправить сообщение"
  },
  uz: {
    contact_title: "Aloqa",
    contact_subtitle: "Quyidagi forma orqali menga xabar yuborishingiz mumkin.",
    form_name: "Ismingiz",
    form_email: "Emailingiz",
    form_message: "Xabaringiz",
    send: "Xabar yuborish"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
