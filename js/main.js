const translations = {
  en: {
    nav_home: "Home",
    nav_journey: "Journey",
    nav_about: "About",
    nav_contact: "Contact",
    title: "My Learning Path",
    subtitle: "A personal journey through education, discipline, and growth.",
    btn_journey: "Start the Journey",
    btn_about: "About This Site"
  },

  de: {
    nav_home: "Startseite",
    nav_journey: "Weg",
    nav_about: "Über mich",
    nav_contact: "Kontakt",
    title: "Mein Lernweg",
    subtitle: "Ein persönlicher Weg durch Bildung, Disziplin und Wachstum.",
    btn_journey: "Reise beginnen",
    btn_about: "Über diese Seite"
  },

  ru: {
    nav_home: "Главная",
    nav_journey: "Путь",
    nav_about: "Обо мне",
    nav_contact: "Контакты",
    title: "Мой путь обучения",
    subtitle: "Личный путь через образование, дисциплину и рост.",
    btn_journey: "Начать путь",
    btn_about: "О проекте"
  },

  uz: {
    nav_home: "Bosh sahifa",
    nav_journey: "Yo‘l",
    nav_about: "Men haqimda",
    nav_contact: "Aloqa",
    title: "Mening o‘rganish yo‘lim",
    subtitle: "Ta’lim, intizom va rivojlanish orqali shaxsiy yo‘l.",
    btn_journey: "Yo‘lni boshlash",
    btn_about: "Sayt haqida"
  }
};

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[lang][key];
    });
  });
});
// --- JOURNEY PAGE ---

translations.en.journey_title = "My Journey";
translations.en.journey_intro = "Growth is not linear. This is my personal path.";
translations.en.stage1_title = "Early Stage — Healthcare";
translations.en.stage1_text = "Learning responsibility, discipline, and how real systems work under pressure.";
translations.en.stage2_title = "Migration & Adaptation";
translations.en.stage2_text = "A radical change of language, culture, and structure that reshaped my resilience.";
translations.en.stage3_title = "Technology & Systems Thinking";
translations.en.stage3_text = "Building logic, automation mindset, and structured thinking through technology.";

translations.de.journey_title = "Mein Weg";
translations.de.journey_intro = "Wachstum ist nicht linear. Dies ist mein persönlicher Weg.";
translations.de.stage1_title = "Frühe Phase — Gesundheitswesen";
translations.de.stage1_text = "Verantwortung, Disziplin und Arbeiten unter Druck lernen.";
translations.de.stage2_title = "Migration & Anpassung";
translations.de.stage2_text = "Ein radikaler Wechsel von Sprache, Kultur und Struktur.";
translations.de.stage3_title = "Technologie & Systemdenken";
translations.de.stage3_text = "Logik, Automatisierung und strukturiertes Denken entwickeln.";

translations.ru.journey_title = "Мой путь";
translations.ru.journey_intro = "Рост не бывает линейным. Это мой личный путь.";
translations.ru.stage1_title = "Начальный этап — Медицина";
translations.ru.stage1_text = "Ответственность, дисциплина и работа в условиях давления.";
translations.ru.stage2_title = "Миграция и адаптация";
translations.ru.stage2_text = "Резкая смена языка, культуры и системы.";
translations.ru.stage3_title = "Технологии и системное мышление";
translations.ru.stage3_text = "Логика, автоматизация и структурное мышление.";

translations.uz.journey_title = "Mening yo‘lim";
translations.uz.journey_intro = "Rivojlanish har doim to‘g‘ri chiziqli emas. Bu mening shaxsiy yo‘lim.";
translations.uz.stage1_title = "Boshlang‘ich bosqich — Tibbiyot";
translations.uz.stage1_text = "Mas’uliyat, intizom va bosim ostida ishlashni o‘rganish.";
translations.uz.stage2_title = "Migratsiya va moslashuv";
translations.uz.stage2_text = "Til, madaniyat va tizimning keskin o‘zgarishi.";
translations.uz.stage3_title = "Texnologiya va tizimli fikrlash";
translations.uz.stage3_text = "Mantiq, avtomatlashtirish va strukturalashgan fikrlash.";
// --- ABOUT ---
translations.en.about_title = "About This Path";
translations.en.about_intro = "This is not a portfolio. This is a record of growth.";
translations.en.about_think_title = "How I Think";
translations.en.about_think_text = "I believe in discipline, consistency, and learning by doing — not shortcuts.";
translations.en.about_build_title = "What I Am Building";
translations.en.about_build_text = "I am transitioning from healthcare into technology, focusing on structure and systems.";
translations.en.about_why_title = "Why This Site Exists";
translations.en.about_why_text = "To document my journey honestly and clearly.";

translations.de.about_title = "Über diesen Weg";
translations.de.about_intro = "Dies ist kein Portfolio. Es ist ein Wachstumsprotokoll.";
translations.de.about_think_title = "Wie ich denke";
translations.de.about_think_text = "Disziplin, Beständigkeit und Lernen durch Handeln.";
translations.de.about_build_title = "Was ich aufbaue";
translations.de.about_build_text = "Übergang vom Gesundheitswesen in die Technologie.";
translations.de.about_why_title = "Warum diese Seite existiert";
translations.de.about_why_text = "Um meinen Weg ehrlich zu dokumentieren.";

translations.ru.about_title = "О пути";
translations.ru.about_intro = "Это не портфолио. Это путь роста.";
translations.ru.about_think_title = "Как я мыслю";
translations.ru.about_think_text = "Дисциплина, последовательность и практика.";
translations.ru.about_build_title = "Что я строю";
translations.ru.about_build_text = "Переход из медицины в технологии.";
translations.ru.about_why_title = "Зачем этот сайт";
translations.ru.about_why_text = "Чтобы честно зафиксировать путь.";

translations.uz.about_title = "Bu yo‘l haqida";
translations.uz.about_intro = "Bu portfel emas. Bu rivojlanish yo‘li.";
translations.uz.about_think_title = "Qanday fikrlayman";
translations.uz.about_think_text = "Intizom, barqarorlik va amaliy o‘rganish.";
translations.uz.about_build_title = "Nimani qurayapman";
translations.uz.about_build_text = "Tibbiyotdan texnologiyaga o‘tish.";
translations.uz.about_why_title = "Nega bu sayt";
translations.uz.about_why_text = "Yo‘limni halol hujjatlashtirish uchun.";

// --- CONTACT ---
translations.en.contact_title = "Contact";
translations.en.contact_intro = "For professional communication only.";
translations.en.contact_email_label = "Email";

translations.de.contact_title = "Kontakt";
translations.de.contact_intro = "Nur für professionelle Kommunikation.";
translations.de.contact_email_label = "E-Mail";

translations.ru.contact_title = "Контакты";
translations.ru.contact_intro = "Только для профессиональной связи.";
translations.ru.contact_email_label = "Email";

translations.uz.contact_title = "Aloqa";
translations.uz.contact_intro = "Faqat professional aloqa uchun.";
translations.uz.contact_email_label = "Email";
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    applyTranslations(btn.dataset.lang);
  });
});

