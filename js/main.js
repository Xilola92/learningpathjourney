document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.journey": "Journey",
      "nav.articles": "Articles",
      "nav.news": "News",
      "nav.courses": "Courses",
      "nav.ai": "AI Chat",
      "nav.about": "About",
      "nav.connect": "Connect",

      "hero.eyebrow": "Dentistry • Education • Articles • AI Support",
      "hero.title":
        "A modern dental learning platform for knowledge, growth, and premium education",
      "hero.description":
        "This platform brings together a personal dental journey, educational articles, current news, AI-guided support, and future private paid courses in one modern and elegant digital space.",
      "hero.primaryButton": "Explore Journey",
      "hero.secondaryButton": "View Private Courses",
      "hero.badge1": "4 Languages",
      "hero.badge2": "AI Chat",
      "hero.badge3": "Private Courses",

      "heroCard.label": "Platform Vision",
      "heroCard.title":
        "From personal journey to trusted dental education platform",
      "heroCard.description":
        "A modern place for learning, articles, professional insight, current updates, and deeper premium study in dentistry and assisting.",

      "overview.eyebrow": "Core Platform",
      "overview.title": "Everything in one elegant learning space",
      "overview.card1Title": "My Dental Journey",
      "overview.card1Text":
        "A personal and professional story of growth, study, experience, and development in dentistry.",
      "overview.card2Title": "Educational Articles",
      "overview.card2Text":
        "Structured articles about dental assisting, learning, clinical topics, and professional growth.",
      "overview.card3Title": "Dental News",
      "overview.card3Text":
        "Useful updates, modern developments, and relevant topics from the world of dentistry.",
      "overview.card4Title": "Private Paid Courses",
      "overview.card4Text":
        "Exclusive premium content with restricted access for focused and deeper learning.",

      "journey.eyebrow": "Journey",
      "journey.title":
        "A path shaped by discipline, experience, and purpose",
      "journey.description":
        "This section is dedicated to the story behind the platform: the learning path, the real challenges, the professional development, and the deeper meaning behind growth in dentistry.",
      "journey.link": "Read full journey →",
      "journey.sideLabel": "What will be here",
      "journey.point1": "Personal timeline",
      "journey.point2": "Professional milestones",
      "journey.point3": "Lessons and reflections",
      "journey.point4": "Growth in dental field",

      "articles.eyebrow": "Articles",
      "articles.title":
        "Clear, structured, and useful educational content",
      "articles.description":
        "The article section is built for learners, assistants, and anyone interested in dentistry. It will provide useful knowledge in a clear and elegant form.",
      "articles.sideLabel": "Article Directions",
      "articles.point1": "Dental assisting knowledge",
      "articles.point2": "Study support",
      "articles.point3": "Practical insights",
      "articles.point4": "Professional topics",

      "news.eyebrow": "News",
      "news.title": "Modern updates from the dental world",
      "news.tag1": "Trends",
      "news.card1Title": "Latest developments in modern dentistry",
      "news.card1Text":
        "A future space for important updates, innovations, and useful changes in the dental field.",
      "news.tag2": "Education",
      "news.card2Title": "Learning and professional updates",
      "news.card2Text":
        "New opportunities, study-related information, and relevant educational topics can be presented here.",
      "news.tag3": "Community",
      "news.card3Title": "Useful information with real value",
      "news.card3Text":
        "Not just news, but meaningful information that connects learning and professional identity.",

      "courses.eyebrow": "Private Premium Area",
      "courses.title": "Exclusive paid courses with restricted access",
      "courses.description":
        "This platform will include private premium learning for users who want deeper, more focused, and more serious study in dentistry and dental assisting.",
      "courses.badge1": "Private Access",
      "courses.badge2": "Premium Lessons",
      "courses.badge3": "Structured Learning",
      "courses.sideLabel": "Premium Preview",
      "courses.sideTitle": "Closed educational space",
      "courses.sideText":
        "Only registered users with paid access will later be able to enter this premium area and study exclusive materials.",
      "courses.locked": "Members Only",

      "ai.eyebrow": "AI Assistant",
      "ai.title": "Ask the dental learning assistant",
      "ai.description":
        "Ask about articles, dentistry topics, educational directions, and the future premium course area.",
      "ai.chatTitle": "AI Dental Assistant",
      "ai.chatSubtitle": "Online learning support",
      "ai.status": "Active",
      "ai.welcome":
        "Hello! I can help you navigate articles, learning topics, and future dental education content.",
      "ai.placeholder":
        "Ask something about dentistry, articles, or courses...",
      "ai.send": "Send",

      "languages.eyebrow": "Multilingual Platform",
      "languages.title": "Accessible in four languages",

      "footer.description":
        "A modern dental education platform with articles, news, AI support, personal journey, and premium private courses.",
      "footer.navigation": "Navigation",
      "footer.languages": "Languages"
    },

    de: {
      "nav.home": "Startseite",
      "nav.journey": "Weg",
      "nav.articles": "Artikel",
      "nav.news": "Neuigkeiten",
      "nav.courses": "Kurse",
      "nav.ai": "KI-Chat",
      "nav.about": "Über uns",
      "nav.connect": "Kontakt",

      "hero.eyebrow": "Zahnmedizin • Bildung • Artikel • KI-Unterstützung",
      "hero.title":
        "Eine moderne Lernplattform für Zahnmedizin mit Wissen, Wachstum und Premium-Bildung",
      "hero.description":
        "Diese Plattform vereint einen persönlichen Weg in der Zahnmedizin, Bildungsartikel, aktuelle Neuigkeiten, KI-gestützte Unterstützung und zukünftige private kostenpflichtige Kurse in einem modernen und eleganten digitalen Raum.",
      "hero.primaryButton": "Weg entdecken",
      "hero.secondaryButton": "Private Kurse ansehen",
      "hero.badge1": "4 Sprachen",
      "hero.badge2": "KI-Chat",
      "hero.badge3": "Private Kurse",

      "heroCard.label": "Plattform-Vision",
      "heroCard.title":
        "Vom persönlichen Weg zu einer vertrauenswürdigen Bildungsplattform für Zahnmedizin",
      "heroCard.description":
        "Ein moderner Ort für Lernen, Artikel, professionelle Einblicke, aktuelle Entwicklungen und vertieftes Premium-Studium in Zahnmedizin und Assistenz.",

      "overview.eyebrow": "Plattform-Kern",
      "overview.title": "Alles in einem eleganten Lernraum",
      "overview.card1Title": "Mein zahnmedizinischer Weg",
      "overview.card1Text":
        "Eine persönliche und berufliche Geschichte von Wachstum, Lernen, Erfahrung und Entwicklung in der Zahnmedizin.",
      "overview.card2Title": "Bildungsartikel",
      "overview.card2Text":
        "Strukturierte Artikel über zahnmedizinische Assistenz, Lernen, klinische Themen und berufliche Entwicklung.",
      "overview.card3Title": "Neuigkeiten aus der Zahnmedizin",
      "overview.card3Text":
        "Nützliche Updates, moderne Entwicklungen und relevante Themen aus der Welt der Zahnmedizin.",
      "overview.card4Title": "Private bezahlte Kurse",
      "overview.card4Text":
        "Exklusive Premium-Inhalte mit eingeschränktem Zugang für fokussiertes und tieferes Lernen.",

      "journey.eyebrow": "Weg",
      "journey.title":
        "Ein Weg, geprägt von Disziplin, Erfahrung und Sinn",
      "journey.description":
        "Dieser Bereich ist der Geschichte hinter der Plattform gewidmet: dem Lernweg, den echten Herausforderungen, der beruflichen Entwicklung und der tieferen Bedeutung des Wachstums in der Zahnmedizin.",
      "journey.link": "Gesamten Weg lesen →",
      "journey.sideLabel": "Was hier sein wird",
      "journey.point1": "Persönliche Zeitleiste",
      "journey.point2": "Berufliche Meilensteine",
      "journey.point3": "Lektionen und Reflexionen",
      "journey.point4": "Wachstum im dentalen Bereich",

      "articles.eyebrow": "Artikel",
      "articles.title":
        "Klare, strukturierte und nützliche Bildungsinhalte",
      "articles.description":
        "Der Artikelbereich ist für Lernende, Assistentinnen und Assistenten sowie alle gedacht, die sich für Zahnmedizin interessieren. Er bietet wertvolles Wissen in klarer und eleganter Form.",
      "articles.sideLabel": "Artikelrichtungen",
      "articles.point1": "Wissen zur Assistenz",
      "articles.point2": "Lernunterstützung",
      "articles.point3": "Praktische Einblicke",
      "articles.point4": "Berufliche Themen",

      "news.eyebrow": "Neuigkeiten",
      "news.title": "Moderne Updates aus der Dentalwelt",
      "news.tag1": "Trends",
      "news.card1Title": "Neueste Entwicklungen in der modernen Zahnmedizin",
      "news.card1Text":
        "Ein zukünftiger Bereich für wichtige Updates, Innovationen und nützliche Veränderungen im dentalen Feld.",
      "news.tag2": "Bildung",
      "news.card2Title": "Lernen und berufliche Updates",
      "news.card2Text":
        "Neue Möglichkeiten, lernbezogene Informationen und relevante Bildungsthemen können hier präsentiert werden.",
      "news.tag3": "Community",
      "news.card3Title": "Nützliche Informationen mit echtem Wert",
      "news.card3Text":
        "Nicht nur Nachrichten, sondern bedeutungsvolle Informationen, die Lernen und berufliche Identität verbinden.",

      "courses.eyebrow": "Privater Premium-Bereich",
      "courses.title": "Exklusive bezahlte Kurse mit eingeschränktem Zugang",
      "courses.description":
        "Diese Plattform wird privates Premium-Lernen für Nutzerinnen und Nutzer enthalten, die ein tieferes, fokussierteres und ernsteres Studium in Zahnmedizin und Assistenz wünschen.",
      "courses.badge1": "Privater Zugang",
      "courses.badge2": "Premium-Lektionen",
      "courses.badge3": "Strukturiertes Lernen",
      "courses.sideLabel": "Premium-Vorschau",
      "courses.sideTitle": "Geschlossener Bildungsraum",
      "courses.sideText":
        "Nur registrierte Nutzer mit bezahltem Zugang können später diesen Premium-Bereich betreten und exklusive Materialien lernen.",
      "courses.locked": "Nur für Mitglieder",

      "ai.eyebrow": "KI-Assistent",
      "ai.title": "Frage den dentalen Lernassistenten",
      "ai.description":
        "Frage nach Artikeln, zahnmedizinischen Themen, Bildungsrichtungen und dem zukünftigen Premium-Kursbereich.",
      "ai.chatTitle": "KI-Zahnmedizinischer Assistent",
      "ai.chatSubtitle": "Online-Lernunterstützung",
      "ai.status": "Aktiv",
      "ai.welcome":
        "Hallo! Ich kann dir helfen, Artikel, Lernthemen und zukünftige Inhalte zur zahnmedizinischen Bildung zu finden.",
      "ai.placeholder":
        "Frage etwas über Zahnmedizin, Artikel oder Kurse...",
      "ai.send": "Senden",

      "languages.eyebrow": "Mehrsprachige Plattform",
      "languages.title": "In vier Sprachen zugänglich",

      "footer.description":
        "Eine moderne Bildungsplattform für Zahnmedizin mit Artikeln, Neuigkeiten, KI-Unterstützung, persönlichem Weg und privaten Premium-Kursen.",
      "footer.navigation": "Navigation",
      "footer.languages": "Sprachen"
    },

    ru: {
      "nav.home": "Главная",
      "nav.journey": "Путь",
      "nav.articles": "Статьи",
      "nav.news": "Новости",
      "nav.courses": "Курсы",
      "nav.ai": "ИИ-чат",
      "nav.about": "О платформе",
      "nav.connect": "Связь",

      "hero.eyebrow": "Стоматология • Образование • Статьи • ИИ-помощь",
      "hero.title":
        "Современная образовательная платформа по стоматологии для знаний, роста и премиум-обучения",
      "hero.description":
        "Эта платформа объединяет личный путь в стоматологии, обучающие статьи, актуальные новости, поддержку на базе ИИ и будущие приватные платные курсы в одном современном и элегантном цифровом пространстве.",
      "hero.primaryButton": "Посмотреть путь",
      "hero.secondaryButton": "Открыть приватные курсы",
      "hero.badge1": "4 языка",
      "hero.badge2": "ИИ-чат",
      "hero.badge3": "Приватные курсы",

      "heroCard.label": "Видение платформы",
      "heroCard.title":
        "От личного пути к надёжной образовательной платформе по стоматологии",
      "heroCard.description":
        "Современное пространство для обучения, статей, профессиональных наблюдений, актуальных обновлений и углублённого премиум-обучения в стоматологии и ассистировании.",

      "overview.eyebrow": "Основа платформы",
      "overview.title": "Всё в одном элегантном пространстве обучения",
      "overview.card1Title": "Мой путь в стоматологии",
      "overview.card1Text":
        "Личная и профессиональная история роста, учёбы, опыта и развития в стоматологии.",
      "overview.card2Title": "Обучающие статьи",
      "overview.card2Text":
        "Структурированные статьи о стоматологическом ассистировании, обучении, клинических темах и профессиональном развитии.",
      "overview.card3Title": "Новости стоматологии",
      "overview.card3Text":
        "Полезные обновления, современные изменения и важные темы из мира стоматологии.",
      "overview.card4Title": "Приватные платные курсы",
      "overview.card4Text":
        "Эксклюзивный премиум-контент с ограниченным доступом для более глубокого и сфокусированного обучения.",

      "journey.eyebrow": "Путь",
      "journey.title":
        "Путь, сформированный дисциплиной, опытом и смыслом",
      "journey.description":
        "Этот раздел посвящён истории платформы: пути обучения, реальным трудностям, профессиональному развитию и более глубокому смыслу роста в стоматологии.",
      "journey.link": "Читать весь путь →",
      "journey.sideLabel": "Что здесь будет",
      "journey.point1": "Личная хронология",
      "journey.point2": "Профессиональные этапы",
      "journey.point3": "Уроки и размышления",
      "journey.point4": "Рост в стоматологической сфере",

      "articles.eyebrow": "Статьи",
      "articles.title":
        "Понятный, структурированный и полезный образовательный контент",
      "articles.description":
        "Раздел статей создан для учащихся, ассистентов и всех, кто интересуется стоматологией. Он будет давать ценные знания в ясной и красивой форме.",
      "articles.sideLabel": "Направления статей",
      "articles.point1": "Знания по ассистированию",
      "articles.point2": "Поддержка в обучении",
      "articles.point3": "Практические наблюдения",
      "articles.point4": "Профессиональные темы",

      "news.eyebrow": "Новости",
      "news.title": "Современные обновления из мира стоматологии",
      "news.tag1": "Тренды",
      "news.card1Title": "Последние изменения в современной стоматологии",
      "news.card1Text":
        "Будущее пространство для важных обновлений, инноваций и полезных изменений в стоматологической сфере.",
      "news.tag2": "Образование",
      "news.card2Title": "Обучение и профессиональные обновления",
      "news.card2Text":
        "Здесь могут появляться новые возможности, учебная информация и важные образовательные темы.",
      "news.tag3": "Сообщество",
      "news.card3Title": "Полезная информация с реальной ценностью",
      "news.card3Text":
        "Не просто новости, а содержательная информация, которая соединяет обучение и профессиональную идентичность.",

      "courses.eyebrow": "Приватная премиум-зона",
      "courses.title": "Эксклюзивные платные курсы с закрытым доступом",
      "courses.description":
        "Эта платформа будет включать приватное премиум-обучение для пользователей, которым нужно более глубокое, серьёзное и сфокусированное изучение стоматологии и ассистирования.",
      "courses.badge1": "Приватный доступ",
      "courses.badge2": "Премиум-уроки",
      "courses.badge3": "Структурированное обучение",
      "courses.sideLabel": "Превью премиум-зоны",
      "courses.sideTitle": "Закрытое образовательное пространство",
      "courses.sideText":
        "Только зарегистрированные пользователи с платным доступом позже смогут войти в эту премиум-зону и изучать эксклюзивные материалы.",
      "courses.locked": "Только для участников",

      "ai.eyebrow": "ИИ-помощник",
      "ai.title": "Спроси обучающего стоматологического ассистента",
      "ai.description":
        "Спрашивай о статьях, стоматологических темах, образовательных направлениях и будущем премиум-разделе курсов.",
      "ai.chatTitle": "ИИ стоматологический ассистент",
      "ai.chatSubtitle": "Онлайн-поддержка в обучении",
      "ai.status": "Активен",
      "ai.welcome":
        "Здравствуйте! Я могу помочь вам найти статьи, учебные темы и будущий образовательный контент по стоматологии.",
      "ai.placeholder":
        "Спросите что-нибудь о стоматологии, статьях или курсах...",
      "ai.send": "Отправить",

      "languages.eyebrow": "Многоязычная платформа",
      "languages.title": "Доступно на четырёх языках",

      "footer.description":
        "Современная образовательная стоматологическая платформа со статьями, новостями, ИИ-поддержкой, личным путём и приватными премиум-курсами.",
      "footer.navigation": "Навигация",
      "footer.languages": "Языки"
    },

    uz: {
      "nav.home": "Bosh sahifa",
      "nav.journey": "Yo‘l",
      "nav.articles": "Maqolalar",
      "nav.news": "Yangiliklar",
      "nav.courses": "Kurslar",
      "nav.ai": "AI chat",
      "nav.about": "Haqida",
      "nav.connect": "Bog‘lanish",

      "hero.eyebrow": "Stomatologiya • Ta’lim • Maqolalar • AI yordam",
      "hero.title":
        "Stomatologiya uchun zamonaviy ta’lim platformasi: bilim, rivojlanish va premium ta’lim",
      "hero.description":
        "Ushbu platforma stomatologiyadagi shaxsiy yo‘l, ta’limiy maqolalar, dolzarb yangiliklar, AI yordam va kelajakdagi pullik yopiq kurslarni bitta zamonaviy va nafis raqamli makonda birlashtiradi.",
      "hero.primaryButton": "Yo‘lni ko‘rish",
      "hero.secondaryButton": "Yopiq kurslarni ko‘rish",
      "hero.badge1": "4 til",
      "hero.badge2": "AI chat",
      "hero.badge3": "Yopiq kurslar",

      "heroCard.label": "Platforma qarashi",
      "heroCard.title":
        "Shaxsiy yo‘ldan ishonchli stomatologik ta’lim platformasiga",
      "heroCard.description":
        "Stomatologiya va assistentlikda ta’lim, maqolalar, professional qarashlar, dolzarb yangiliklar va chuqur premium o‘rganish uchun zamonaviy makon.",

      "overview.eyebrow": "Platforma asosi",
      "overview.title": "Hammasi bitta nafis ta’lim makonida",
      "overview.card1Title": "Mening stomatologik yo‘lim",
      "overview.card1Text":
        "Stomatologiyadagi o‘sish, ta’lim, tajriba va rivojlanishning shaxsiy hamda professional hikoyasi.",
      "overview.card2Title": "Ta’limiy maqolalar",
      "overview.card2Text":
        "Stomatologik assistentlik, o‘qish, klinik mavzular va professional rivojlanish haqidagi tuzilgan maqolalar.",
      "overview.card3Title": "Stomatologiya yangiliklari",
      "overview.card3Text":
        "Stomatologiya olamidan foydali yangilanishlar, zamonaviy o‘zgarishlar va muhim mavzular.",
      "overview.card4Title": "Pullik yopiq kurslar",
      "overview.card4Text":
        "Chuqurroq va aniqroq o‘rganish uchun cheklangan kirishga ega eksklyuziv premium kontent.",

      "journey.eyebrow": "Yo‘l",
      "journey.title":
        "Intizom, tajriba va maqsad bilan shakllangan yo‘l",
      "journey.description":
        "Bu bo‘lim platforma ortidagi hikoyaga bag‘ishlangan: o‘quv yo‘li, haqiqiy qiyinchiliklar, professional rivojlanish va stomatologiyadagi o‘sishning chuqur ma’nosi.",
      "journey.link": "To‘liq yo‘lni o‘qish →",
      "journey.sideLabel": "Bu yerda nima bo‘ladi",
      "journey.point1": "Shaxsiy vaqt chizig‘i",
      "journey.point2": "Professional bosqichlar",
      "journey.point3": "Darslar va mulohazalar",
      "journey.point4": "Dental sohada rivojlanish",

      "articles.eyebrow": "Maqolalar",
      "articles.title":
        "Aniq, tuzilgan va foydali ta’limiy kontent",
      "articles.description":
        "Maqolalar bo‘limi o‘quvchilar, assistentlar va stomatologiyaga qiziqqan barcha uchun yaratilgan. U foydali bilimlarni tushunarli va nafis shaklda taqdim etadi.",
      "articles.sideLabel": "Maqola yo‘nalishlari",
      "articles.point1": "Assistentlik bo‘yicha bilimlar",
      "articles.point2": "O‘qish yordami",
      "articles.point3": "Amaliy qarashlar",
      "articles.point4": "Professional mavzular",

      "news.eyebrow": "Yangiliklar",
      "news.title": "Stomatologiya olamidan zamonaviy yangilanishlar",
      "news.tag1": "Trendlar",
      "news.card1Title": "Zamonaviy stomatologiyadagi so‘nggi rivojlanishlar",
      "news.card1Text":
        "Dental sohadagi muhim yangilanishlar, innovatsiyalar va foydali o‘zgarishlar uchun kelajak bo‘limi.",
      "news.tag2": "Ta’lim",
      "news.card2Title": "O‘qish va professional yangilanishlar",
      "news.card2Text":
        "Bu yerda yangi imkoniyatlar, o‘qishga oid ma’lumotlar va muhim ta’limiy mavzular berilishi mumkin.",
      "news.tag3": "Hamjamiyat",
      "news.card3Title": "Haqiqiy qiymatga ega foydali ma’lumot",
      "news.card3Text":
        "Shunchaki yangilik emas, balki o‘qish va professional o‘zlikni bog‘laydigan mazmunli ma’lumot.",

      "courses.eyebrow": "Yopiq premium hudud",
      "courses.title": "Cheklangan kirishga ega eksklyuziv pullik kurslar",
      "courses.description":
        "Bu platforma stomatologiya va assistentlikni chuqurroq, aniqroq va jiddiyroq o‘rganmoqchi bo‘lgan foydalanuvchilar uchun yopiq premium ta’limni o‘z ichiga oladi.",
      "courses.badge1": "Yopiq kirish",
      "courses.badge2": "Premium darslar",
      "courses.badge3": "Tuzilgan o‘qish",
      "courses.sideLabel": "Premium ko‘rinish",
      "courses.sideTitle": "Yopiq ta’lim makoni",
      "courses.sideText":
        "Faqat pullik kirishga ega ro‘yxatdan o‘tgan foydalanuvchilar keyinchalik bu premium hududga kirib, eksklyuziv materiallarni o‘rganishlari mumkin bo‘ladi.",
      "courses.locked": "Faqat a’zolar uchun",

      "ai.eyebrow": "AI yordamchi",
      "ai.title": "Stomatologik o‘quv yordamchisidan so‘rang",
      "ai.description":
        "Maqolalar, stomatologik mavzular, ta’lim yo‘nalishlari va kelajakdagi premium kurs hududi haqida so‘rang.",
      "ai.chatTitle": "AI stomatologik assistent",
      "ai.chatSubtitle": "Onlayn ta’lim yordami",
      "ai.status": "Faol",
      "ai.welcome":
        "Salom! Men sizga maqolalar, o‘quv mavzulari va kelajakdagi stomatologik ta’lim kontentini topishda yordam bera olaman.",
      "ai.placeholder":
        "Stomatologiya, maqolalar yoki kurslar haqida yozing...",
      "ai.send": "Yuborish",

      "languages.eyebrow": "Ko‘p tilli platforma",
      "languages.title": "To‘rtta tilda mavjud",

      "footer.description":
        "Maqolalar, yangiliklar, AI yordam, shaxsiy yo‘l va premium yopiq kurslarga ega zamonaviy stomatologik ta’lim platformasi.",
      "footer.navigation": "Navigatsiya",
      "footer.languages": "Tillar"
    }
  };

  const supportedLanguages = ["en", "de", "ru", "uz"];

  function getStoredLanguage() {
    const saved = localStorage.getItem("siteLanguage");
    return supportedLanguages.includes(saved) ? saved : "en";
  }

  function applyTranslations(lang) {
    const dictionary = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) {
        element.placeholder = dictionary[key];
      }
    });

    document.documentElement.lang = lang;
  }

  function updateActiveLanguageButton(lang) {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    const normalizedLanguage = supportedLanguages.includes(lang) ? lang : "en";
    localStorage.setItem("siteLanguage", normalizedLanguage);
    applyTranslations(normalizedLanguage);
    updateActiveLanguageButton(normalizedLanguage);
  }

  function getBotReply(message, lang) {
    const text = message.toLowerCase();

    const responses = {
      en: {
        articles:
          "You will be able to explore article sections about dentistry, assisting, and educational topics here.",
        courses:
          "The private course section is planned as a premium area with paid access and structured learning content.",
        journey:
          "The journey section shares a personal and professional story about dentistry, learning, and development.",
        news:
          "The news section is designed for modern updates, trends, and useful information from the dental field.",
        languages:
          "This platform is designed for four languages: German, Russian, English, and Uzbek.",
        default:
          "Thank you for your message. Later this AI assistant can help visitors navigate articles, learning topics, news, and private courses."
      },
      de: {
        articles:
          "Hier können Sie später Artikelbereiche über Zahnmedizin, Assistenz und Bildungsthemen erkunden.",
        courses:
          "Der Bereich für private Kurse ist als Premium-Zone mit bezahltem Zugang und strukturierten Lerninhalten geplant.",
        journey:
          "Der Weg-Bereich erzählt eine persönliche und berufliche Geschichte über Zahnmedizin, Lernen und Entwicklung.",
        news:
          "Der Neuigkeiten-Bereich ist für moderne Updates, Trends und nützliche Informationen aus dem dentalen Bereich gedacht.",
        languages:
          "Diese Plattform ist für vier Sprachen vorgesehen: Deutsch, Russisch, Englisch und Usbekisch.",
        default:
          "Danke für Ihre Nachricht. Später kann dieser KI-Assistent Besucher durch Artikel, Lernthemen, Neuigkeiten und private Kurse führen."
      },
      ru: {
        articles:
          "Здесь позже можно будет смотреть разделы со статьями о стоматологии, ассистировании и образовательных темах.",
        courses:
          "Раздел приватных курсов задуман как премиум-зона с платным доступом и структурированным обучением.",
        journey:
          "Раздел пути рассказывает личную и профессиональную историю о стоматологии, обучении и развитии.",
        news:
          "Раздел новостей создан для современных обновлений, трендов и полезной информации из стоматологической сферы.",
        languages:
          "Эта платформа рассчитана на четыре языка: немецкий, русский, английский и узбекский.",
        default:
          "Спасибо за ваше сообщение. Позже этот ИИ-ассистент сможет помогать посетителям ориентироваться в статьях, темах обучения, новостях и приватных курсах."
      },
      uz: {
        articles:
          "Bu yerda keyinchalik stomatologiya, assistentlik va ta’lim mavzulariga oid maqolalar bo‘limlarini ko‘rish mumkin bo‘ladi.",
        courses:
          "Yopiq kurslar bo‘limi pullik kirishga ega premium hudud va tuzilgan o‘quv kontenti sifatida rejalashtirilgan.",
        journey:
          "Yo‘l bo‘limi stomatologiya, o‘qish va rivojlanish haqidagi shaxsiy hamda professional hikoyani ulashadi.",
        news:
          "Yangiliklar bo‘limi dental sohadagi zamonaviy yangilanishlar, trendlar va foydali ma’lumotlar uchun yaratilgan.",
        languages:
          "Ushbu platforma to‘rtta til uchun mo‘ljallangan: nemis, rus, ingliz va o‘zbek tillari.",
        default:
          "Xabaringiz uchun rahmat. Keyinchalik bu AI yordamchi tashrif buyuruvchilarga maqolalar, o‘quv mavzulari, yangiliklar va yopiq kurslar bo‘ylab yo‘l ko‘rsatishi mumkin."
      }
    };

    const dict = responses[lang] || responses.en;

    if (
      text.includes("article") ||
      text.includes("articles") ||
      text.includes("artikel") ||
      text.includes("maqola") ||
      text.includes("maqolalar") ||
      text.includes("статья") ||
      text.includes("статьи")
    ) {
      return dict.articles;
    }

    if (
      text.includes("course") ||
      text.includes("courses") ||
      text.includes("kurs") ||
      text.includes("kurslar") ||
      text.includes("kurse") ||
      text.includes("курс") ||
      text.includes("курсы")
    ) {
      return dict.courses;
    }

    if (
      text.includes("journey") ||
      text.includes("path") ||
      text.includes("weg") ||
      text.includes("yo‘l") ||
      text.includes("yol") ||
      text.includes("путь")
    ) {
      return dict.journey;
    }

    if (
      text.includes("news") ||
      text.includes("neuigkeiten") ||
      text.includes("yangilik") ||
      text.includes("новост")
    ) {
      return dict.news;
    }

    if (
      text.includes("language") ||
      text.includes("languages") ||
      text.includes("sprache") ||
      text.includes("sprachen") ||
      text.includes("til") ||
      text.includes("tillar") ||
      text.includes("язык") ||
      text.includes("языки")
    ) {
      return dict.languages;
    }

    return dict.default;
  }

  function createChatMessage(text, type) {
    const message = document.createElement("div");
    message.className = `chat-message ${type}`;
    message.textContent = text;
    return message;
  }

  function initializeChat() {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    if (!chatForm || !chatInput || !chatMessages) return;

    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const userText = chatInput.value.trim();
      if (!userText) return;

      const currentLanguage = getStoredLanguage();

      chatMessages.appendChild(createChatMessage(userText, "user"));
      chatInput.value = "";

      window.setTimeout(() => {
        const botReply = getBotReply(userText, currentLanguage);
        chatMessages.appendChild(createChatMessage(botReply, "bot"));
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 450);

      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  function initializeLanguageButtons() {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.lang;
        setLanguage(selectedLanguage);
      });
    });
  }

  initializeLanguageButtons();
  initializeChat();
  setLanguage(getStoredLanguage());
});
