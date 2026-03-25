document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      navHome: "Home",
      navJourney: "Journey",
      navAbout: "About",
      navConnect: "Connect",
      navArticles: "Articles",
      navNews: "News",
      navCourses: "Courses",
      navAI: "AI Chat",
      privateAccess: "Private Access",

      heroEyebrow: "Dentistry • Education • Articles • AI Support",
      heroTitle:
        "A modern dental learning platform for <span>knowledge, growth, and premium education</span>",
      heroText:
        "This website is dedicated to dentistry and dental assisting. It brings together a personal professional journey, educational articles, industry news, AI-powered support, and future private paid courses in one modern digital space.",
      heroBtn1: "Explore Journey",
      heroBtn2: "View Private Courses",

      stat1: "Languages",
      stat2: "Chat Support",
      stat3: "Private Courses",

      visionLabel: "Platform Vision",
      visionTitle: "From personal journey to trusted dental education brand",
      visionText:
        "A structured website for learning, inspiration, professional articles, current news, and premium educational content for deeper study.",

      aiTitle: "Ask the dental learning assistant",
      aiDescription:
        "An AI-powered helper for questions about learning, dental topics, assisting, articles, and educational navigation on the website.",
      aiHeader: "AI Dental Assistant",
      aiSubheader: "Online learning support",
      aiPlaceholder:
        "Ask something about dentistry, articles, or courses...",
      aiSend: "Send",

      botWelcome:
        "Hello! I can help you navigate articles, learning topics, and future dental education content.",
      userExample: "Show me articles about dental assisting.",
      botExample:
        "Sure — this section will later connect users to articles, study materials, and premium course recommendations.",

      footerText:
        "A modern educational dental platform with articles, news, AI support, personal journey, and premium private courses."
    },

    de: {
      navHome: "Startseite",
      navJourney: "Weg",
      navAbout: "Über uns",
      navConnect: "Kontakt",
      navArticles: "Artikel",
      navNews: "Neuigkeiten",
      navCourses: "Kurse",
      navAI: "KI-Chat",
      privateAccess: "Privater Zugang",

      heroEyebrow: "Zahnmedizin • Bildung • Artikel • KI-Unterstützung",
      heroTitle:
        "Eine moderne Lernplattform für Zahnmedizin mit <span>Wissen, Wachstum und Premium-Bildung</span>",
      heroText:
        "Diese Website ist der Zahnmedizin und der zahnmedizinischen Assistenz gewidmet. Sie vereint einen persönlichen Berufsweg, Bildungsartikel, Branchennachrichten, KI-gestützte Unterstützung und zukünftige kostenpflichtige Privatkurse in einem modernen digitalen Raum.",
      heroBtn1: "Weg entdecken",
      heroBtn2: "Private Kurse ansehen",

      stat1: "Sprachen",
      stat2: "Chat-Support",
      stat3: "Private Kurse",

      visionLabel: "Plattform-Vision",
      visionTitle:
        "Vom persönlichen Weg zu einer vertrauenswürdigen Bildungsmarke in der Zahnmedizin",
      visionText:
        "Eine strukturierte Website für Lernen, Inspiration, Fachartikel, aktuelle Neuigkeiten und hochwertige Bildungsinhalte für ein tieferes Studium.",

      aiTitle: "Frag den zahnmedizinischen Lernassistenten",
      aiDescription:
        "Ein KI-gestützter Helfer für Fragen zu Lernen, zahnmedizinischen Themen, Assistenz, Artikeln und Bildungsnavigation auf der Website.",
      aiHeader: "KI-Zahnmedizinischer Assistent",
      aiSubheader: "Online-Lernunterstützung",
      aiPlaceholder:
        "Frage etwas über Zahnmedizin, Artikel oder Kurse...",
      aiSend: "Senden",

      botWelcome:
        "Hallo! Ich kann dir helfen, Artikel, Lernthemen und zukünftige Inhalte zur zahnmedizinischen Bildung zu finden.",
      userExample: "Zeige mir Artikel über zahnmedizinische Assistenz.",
      botExample:
        "Gerne — dieser Bereich wird später Nutzer mit Artikeln, Lernmaterialien und Empfehlungen für Premium-Kurse verbinden.",

      footerText:
        "Eine moderne Bildungsplattform für Zahnmedizin mit Artikeln, Neuigkeiten, KI-Unterstützung, persönlichem Weg und privaten Premium-Kursen."
    },

    ru: {
      navHome: "Главная",
      navJourney: "Путь",
      navAbout: "О платформе",
      navConnect: "Связь",
      navArticles: "Статьи",
      navNews: "Новости",
      navCourses: "Курсы",
      navAI: "ИИ-чат",
      privateAccess: "Приватный доступ",

      heroEyebrow: "Стоматология • Образование • Статьи • ИИ-помощь",
      heroTitle:
        "Современная образовательная платформа по стоматологии для <span>знаний, роста и премиум-обучения</span>",
      heroText:
        "Этот сайт посвящён стоматологии и ассистированию в стоматологии. Здесь объединяются личный профессиональный путь, обучающие статьи, новости сферы, поддержка ИИ и будущие приватные платные курсы в одном современном цифровом пространстве.",
      heroBtn1: "Посмотреть путь",
      heroBtn2: "Открыть приватные курсы",

      stat1: "Языка",
      stat2: "Поддержка чата",
      stat3: "Приватные курсы",

      visionLabel: "Видение платформы",
      visionTitle:
        "От личного пути к надёжному образовательному бренду в стоматологии",
      visionText:
        "Структурированный сайт для обучения, вдохновения, профессиональных статей, актуальных новостей и премиального образовательного контента для более глубокого изучения.",

      aiTitle: "Спроси ИИ-помощника по стоматологии",
      aiDescription:
        "ИИ-помощник для вопросов об обучении, стоматологических темах, ассистировании, статьях и навигации по образовательному сайту.",
      aiHeader: "ИИ стоматологический ассистент",
      aiSubheader: "Онлайн-поддержка в обучении",
      aiPlaceholder:
        "Спросите что-нибудь о стоматологии, статьях или курсах...",
      aiSend: "Отправить",

      botWelcome:
        "Здравствуйте! Я могу помочь вам найти статьи, учебные темы и будущий образовательный контент по стоматологии.",
      userExample: "Покажи мне статьи о стоматологическом ассистировании.",
      botExample:
        "Конечно — позже этот раздел будет связывать пользователей со статьями, учебными материалами и рекомендациями по премиум-курсам.",

      footerText:
        "Современная образовательная стоматологическая платформа со статьями, новостями, ИИ-поддержкой, личным путём и приватными премиум-курсами."
    },

    uz: {
      navHome: "Bosh sahifa",
      navJourney: "Yo‘l",
      navAbout: "Haqida",
      navConnect: "Bog‘lanish",
      navArticles: "Maqolalar",
      navNews: "Yangiliklar",
      navCourses: "Kurslar",
      navAI: "AI chat",
      privateAccess: "Yopiq kirish",

      heroEyebrow: "Stomatologiya • Ta’lim • Maqolalar • AI yordam",
      heroTitle:
        "Stomatologiya uchun zamonaviy ta’lim platformasi: <span>bilim, rivojlanish va premium ta’lim</span>",
      heroText:
        "Ushbu veb-sayt stomatologiya va stomatologik assistentlikka bag‘ishlangan. Unda shaxsiy professional yo‘l, ta’limiy maqolalar, soha yangiliklari, AI yordam va kelajakdagi pullik yopiq kurslar bitta zamonaviy raqamli makonda birlashtiriladi.",
      heroBtn1: "Yo‘lni ko‘rish",
      heroBtn2: "Yopiq kurslarni ko‘rish",

      stat1: "Til",
      stat2: "Chat yordami",
      stat3: "Yopiq kurslar",

      visionLabel: "Platforma qarashi",
      visionTitle:
        "Shaxsiy yo‘ldan ishonchli stomatologik ta’lim brendiga",
      visionText:
        "Chuqurroq o‘rganish uchun ta’lim, ilhom, professional maqolalar, dolzarb yangiliklar va premium materiallar uchun tuzilgan veb-sayt.",

      aiTitle: "Stomatologik AI yordamchidan so‘rang",
      aiDescription:
        "Ta’lim, stomatologik mavzular, assistentlik, maqolalar va sayt bo‘ylab o‘quv yo‘nalishlari bo‘yicha AI yordamchi.",
      aiHeader: "AI stomatologik assistent",
      aiSubheader: "Onlayn ta’lim yordami",
      aiPlaceholder:
        "Stomatologiya, maqolalar yoki kurslar haqida yozing...",
      aiSend: "Yuborish",

      botWelcome:
        "Salom! Men sizga maqolalar, o‘quv mavzulari va kelajakdagi stomatologik ta’lim materiallarini topishda yordam bera olaman.",
      userExample: "Menga stomatologik assistentlik haqida maqolalarni ko‘rsat.",
      botExample:
        "Albatta — keyinchalik bu bo‘lim foydalanuvchilarni maqolalar, o‘quv materiallari va premium kurs tavsiyalari bilan bog‘laydi.",

      footerText:
        "Maqolalar, yangiliklar, AI yordam, shaxsiy yo‘l va premium yopiq kurslarga ega zamonaviy stomatologik ta’lim platformasi."
    }
  };

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;

    const menuLinks = document.querySelectorAll(".menu a");
    if (menuLinks[0]) menuLinks[0].textContent = t.navHome;
    if (menuLinks[1]) menuLinks[1].textContent = t.navJourney;
    if (menuLinks[2]) menuLinks[2].textContent = t.navArticles || t.navAbout;
    if (menuLinks[3]) menuLinks[3].textContent = t.navNews || t.navConnect;
    if (menuLinks[4]) menuLinks[4].textContent = t.navCourses || "";
    if (menuLinks[5]) menuLinks[5].textContent = t.navAI || "";
    if (menuLinks[6]) menuLinks[6].textContent = t.navConnect;

    setText(".btn-outline", t.privateAccess);

    setText(".hero .eyebrow", t.heroEyebrow);
    setHTML(".hero-content h1", t.heroTitle);
    setText(".hero-text", t.heroText);

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");
    if (heroButtons[0]) heroButtons[0].textContent = t.heroBtn1;
    if (heroButtons[1]) heroButtons[1].textContent = t.heroBtn2;

    const statLabels = document.querySelectorAll(".stat-card span");
    if (statLabels[0]) statLabels[0].textContent = t.stat1;
    if (statLabels[1]) statLabels[1].textContent = t.stat2;
    if (statLabels[2]) statLabels[2].textContent = t.stat3;

    const miniLabels = document.querySelectorAll(".mini-label");
    if (miniLabels[0]) miniLabels[0].textContent = t.visionLabel;

    const glassTitle = document.querySelector(".glass-card h2");
    if (glassTitle) glassTitle.textContent = t.visionTitle;

    const glassText = document.querySelector(".glass-card p:not(.mini-label)");
    if (glassText) glassText.textContent = t.visionText;

    const sectionHeadings = document.querySelectorAll(".section-heading h2");
    const sectionDescriptions = document.querySelectorAll(".section-description");

    if (sectionHeadings[2]) sectionHeadings[2].textContent = t.aiTitle;
    if (sectionDescriptions[0]) sectionDescriptions[0].textContent = t.aiDescription;

    const aiHeaderStrong = document.querySelector(".ai-chat-header strong");
    const aiHeaderSub = document.querySelector(".ai-chat-header p");
    if (aiHeaderStrong) aiHeaderStrong.textContent = t.aiHeader;
    if (aiHeaderSub) aiHeaderSub.textContent = t.aiSubheader;

    const aiMessages = document.querySelectorAll(".ai-messages .message");
    if (aiMessages[0]) aiMessages[0].textContent = t.botWelcome;
    if (aiMessages[1]) aiMessages[1].textContent = t.userExample;
    if (aiMessages[2]) aiMessages[2].textContent = t.botExample;

    const aiInput = document.querySelector(".ai-input-area input");
    const aiSendBtn = document.querySelector(".ai-input-area button");
    if (aiInput) aiInput.placeholder = t.aiPlaceholder;
    if (aiSendBtn) aiSendBtn.textContent = t.aiSend;

    const footerFirstText = document.querySelector(".footer-grid div:first-child p");
    if (footerFirstText) footerFirstText.textContent = t.footerText;

    document.documentElement.lang = lang;
    localStorage.setItem("siteLanguage", lang);
  }

  const languageSwitcher = document.querySelector(".language-switcher");
  const savedLanguage = localStorage.getItem("siteLanguage") || "en";

  if (languageSwitcher) {
    languageSwitcher.value = savedLanguage;
    applyLanguage(savedLanguage);

    languageSwitcher.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  const aiForm = document.querySelector(".ai-input-area");
  const aiInput = document.querySelector(".ai-input-area input");
  const aiMessages = document.querySelector(".ai-messages");

  function getBotReply(message) {
    const text = message.toLowerCase();

    if (
      text.includes("article") ||
      text.includes("maqola") ||
      text.includes("статья") ||
      text.includes("artikel")
    ) {
      return "You will be able to explore article sections about dentistry, assisting, and educational topics here.";
    }

    if (
      text.includes("course") ||
      text.includes("kurs") ||
      text.includes("курс") ||
      text.includes("kurse")
    ) {
      return "The private course section is planned as a premium area with paid access and structured learning content.";
    }

    if (
      text.includes("journey") ||
      text.includes("path") ||
      text.includes("путь") ||
      text.includes("yo‘l") ||
      text.includes("weg")
    ) {
      return "The journey section will share a personal and professional story in dentistry, learning, and development.";
    }

    if (
      text.includes("news") ||
      text.includes("yangilik") ||
      text.includes("новост") ||
      text.includes("neu")
    ) {
      return "The news section is designed for modern updates, trends, and useful information from the dental field.";
    }

    if (
      text.includes("language") ||
      text.includes("til") ||
      text.includes("язык") ||
      text.includes("sprache")
    ) {
      return "This platform is designed for four languages: German, Russian, English, and Uzbek.";
    }

    return "Thank you for your message. Later this AI assistant can help guide visitors through articles, learning topics, news, and private courses.";
  }

  function addMessage(text, type) {
    if (!aiMessages) return;

    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = text;
    aiMessages.appendChild(message);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  if (aiForm && aiInput && aiMessages) {
    aiForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const userText = aiInput.value.trim();
      if (!userText) return;

      addMessage(userText, "user");
      aiInput.value = "";

      setTimeout(() => {
        addMessage(getBotReply(userText), "bot");
      }, 500);
    });
  }
});
