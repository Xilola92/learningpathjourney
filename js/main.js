document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.connect": "Connect",

      "home.eyebrow": "Dentistry • Education • Articles • Premium Learning",
      "home.title": "A modern platform for dental education, articles, news, and private courses",
      "home.description":
        "Learning Path Journey is a modern multilingual platform dedicated to dentistry, dental assisting, educational articles, useful updates, and future premium learning.",
      "home.primaryBtn": "Discover the Platform",
      "home.secondaryBtn": "Get in Touch",
      "home.badge1": "4 Languages",
      "home.badge2": "Modern Design",
      "home.badge3": "Private Courses",
      "home.cardLabel": "Platform Focus",
      "home.cardTitle": "Built for growth, clarity, and meaningful learning",
      "home.cardText":
        "A refined digital space for personal journey, educational content, professional topics, and a future private premium area in dentistry.",
      "home.tag1": "Journey",
      "home.tag2": "Articles",
      "home.tag3": "News",
      "home.tag4": "Courses",
      "home.sectionEyebrow": "What the platform includes",
      "home.sectionTitle": "A clean structure for learning and development",
      "home.feature1Title": "Personal Journey",
      "home.feature1Text":
        "The story behind the platform, shaped by learning, experience, and growth.",
      "home.feature2Title": "Articles & News",
      "home.feature2Text":
        "Educational content, professional insights, and useful updates from the dental field.",
      "home.feature3Title": "Private Premium Courses",
      "home.feature3Text":
        "A future closed learning area for deeper and more focused study.",
      "home.languagesEyebrow": "Multilingual Access",
      "home.languagesTitle": "Available in four languages",

      "about.eyebrow": "About the Platform",
      "about.title": "A modern dental education platform built with clarity, purpose, and growth",
      "about.description":
        "Learning Path Journey is a multilingual digital space dedicated to dentistry, dental assisting, educational articles, useful updates, and future private premium learning.",
      "about.missionLabel": "Mission",
      "about.missionTitle": "Why this platform exists",
      "about.missionText1":
        "This platform is created to combine education, professional development, and meaningful content in one elegant and structured space.",
      "about.missionText2":
        "It is not only a website, but the beginning of a stronger educational direction in dentistry and dental assisting.",
      "about.focusLabel": "Core Focus",
      "about.focus1": "Dentistry",
      "about.focus2": "Dental assisting",
      "about.focus3": "Educational articles",
      "about.focus4": "Useful news and updates",
      "about.focus5": "Private premium courses",
      "about.focus6": "Multilingual learning",
      "about.valuesEyebrow": "Values",
      "about.valuesTitle": "What defines the platform",
      "about.card1Title": "Clarity",
      "about.card1Text":
        "Knowledge should be understandable, structured, and accessible.",
      "about.card2Title": "Growth",
      "about.card2Text":
        "Learning is a process of continuous personal and professional development.",
      "about.card3Title": "Depth",
      "about.card3Text":
        "The goal is not only to inform, but to create real educational value.",
      "about.visionEyebrow": "Vision",
      "about.visionTitle": "From a personal path to a trusted educational brand",
      "about.visionText":
        "The long-term vision is to build a refined and reliable dental education platform with articles, guided learning, premium courses, and meaningful multilingual access.",

      "contact.eyebrow": "Connect",
      "contact.title": "Let’s connect for learning, ideas, and meaningful collaboration",
      "contact.description":
        "This space is created for communication, educational collaboration, article ideas, professional networking, and future private course inquiries in dentistry and dental assisting.",
      "contact.infoLabel": "Contact Information",
      "contact.infoTitle": "Open for communication",
      "contact.infoText":
        "You can get in touch regarding educational content, dentistry, dental assisting, future private learning, article ideas, and professional collaboration.",
      "contact.focusLabel": "Focus",
      "contact.focusText":
        "Dentistry, dental assisting, articles, news, premium learning",
      "contact.languagesLabel": "Languages",
      "contact.languagesText": "German, Russian, English, Uzbek",
      "contact.emailLabel": "Email",
      "contact.note":
        "For direct contact, you can also send an email manually. Form integration can be connected later for automatic delivery.",
      "contact.formLabel": "Send a Message",
      "contact.formTitle": "Write to us",
      "contact.nameLabel": "Name",
      "contact.namePlaceholder": "Your name",
      "contact.emailFieldLabel": "Email",
      "contact.emailPlaceholder": "your@email.com",
      "contact.topicLabel": "Topic",
      "contact.topicPlaceholder": "Articles, courses, collaboration...",
      "contact.messageLabel": "Message",
      "contact.messagePlaceholder": "Write your message...",
      "contact.sendButton": "Send Message",
      "contact.footerText": "Prefer direct contact? Send a message manually by email.",
      "contact.directEmail": "Open email →",
      "contact.bottomEyebrow": "Multilingual Platform",
      "contact.bottomTitle": "Available in four languages",

      "footer.description":
        "A modern dental education platform with articles, news, personal journey, and premium private courses.",
      "footer.navigation": "Navigation",
      "footer.languages": "Languages"
    },

    de: {
      "nav.home": "Startseite",
      "nav.about": "Über uns",
      "nav.connect": "Kontakt",

      "home.eyebrow": "Zahnmedizin • Bildung • Artikel • Premium-Lernen",
      "home.title": "Eine moderne Plattform für zahnmedizinische Bildung, Artikel, Neuigkeiten und private Kurse",
      "home.description":
        "Learning Path Journey ist eine moderne mehrsprachige Plattform für Zahnmedizin, zahnmedizinische Assistenz, Bildungsartikel, nützliche Updates und zukünftiges Premium-Lernen.",
      "home.primaryBtn": "Plattform entdecken",
      "home.secondaryBtn": "Kontakt aufnehmen",
      "home.badge1": "4 Sprachen",
      "home.badge2": "Modernes Design",
      "home.badge3": "Private Kurse",
      "home.cardLabel": "Plattform-Fokus",
      "home.cardTitle": "Entwickelt für Wachstum, Klarheit und sinnvolles Lernen",
      "home.cardText":
        "Ein moderner digitaler Raum für den persönlichen Weg, Bildungsinhalte, berufliche Themen und einen zukünftigen privaten Premium-Bereich in der Zahnmedizin.",
      "home.tag1": "Weg",
      "home.tag2": "Artikel",
      "home.tag3": "Neuigkeiten",
      "home.tag4": "Kurse",
      "home.sectionEyebrow": "Was die Plattform umfasst",
      "home.sectionTitle": "Eine klare Struktur für Lernen und Entwicklung",
      "home.feature1Title": "Persönlicher Weg",
      "home.feature1Text":
        "Die Geschichte hinter der Plattform, geprägt von Lernen, Erfahrung und Wachstum.",
      "home.feature2Title": "Artikel & Neuigkeiten",
      "home.feature2Text":
        "Bildungsinhalte, professionelle Einblicke und nützliche Updates aus dem dentalen Bereich.",
      "home.feature3Title": "Private Premium-Kurse",
      "home.feature3Text":
        "Ein zukünftiger geschlossener Lernbereich für tieferes und fokussierteres Studium.",
      "home.languagesEyebrow": "Mehrsprachiger Zugang",
      "home.languagesTitle": "In vier Sprachen verfügbar",

      "about.eyebrow": "Über die Plattform",
      "about.title": "Eine moderne Bildungsplattform für Zahnmedizin, aufgebaut mit Klarheit, Sinn und Wachstum",
      "about.description":
        "Learning Path Journey ist ein mehrsprachiger digitaler Raum für Zahnmedizin, zahnmedizinische Assistenz, Bildungsartikel, nützliche Updates und zukünftiges privates Premium-Lernen.",
      "about.missionLabel": "Mission",
      "about.missionTitle": "Warum diese Plattform existiert",
      "about.missionText1":
        "Diese Plattform wurde geschaffen, um Bildung, berufliche Entwicklung und bedeutungsvolle Inhalte in einem eleganten und strukturierten Raum zu vereinen.",
      "about.missionText2":
        "Sie ist nicht nur eine Website, sondern der Beginn einer stärkeren Bildungsrichtung in der Zahnmedizin und zahnmedizinischen Assistenz.",
      "about.focusLabel": "Kernfokus",
      "about.focus1": "Zahnmedizin",
      "about.focus2": "Zahnmedizinische Assistenz",
      "about.focus3": "Bildungsartikel",
      "about.focus4": "Nützliche Neuigkeiten und Updates",
      "about.focus5": "Private Premium-Kurse",
      "about.focus6": "Mehrsprachiges Lernen",
      "about.valuesEyebrow": "Werte",
      "about.valuesTitle": "Was die Plattform definiert",
      "about.card1Title": "Klarheit",
      "about.card1Text":
        "Wissen sollte verständlich, strukturiert und zugänglich sein.",
      "about.card2Title": "Wachstum",
      "about.card2Text":
        "Lernen ist ein Prozess der kontinuierlichen persönlichen und beruflichen Entwicklung.",
      "about.card3Title": "Tiefe",
      "about.card3Text":
        "Das Ziel ist nicht nur zu informieren, sondern echten Bildungswert zu schaffen.",
      "about.visionEyebrow": "Vision",
      "about.visionTitle": "Von einem persönlichen Weg zu einer vertrauenswürdigen Bildungsmarke",
      "about.visionText":
        "Die langfristige Vision ist der Aufbau einer hochwertigen und verlässlichen Bildungsplattform für Zahnmedizin mit Artikeln, geführtem Lernen, Premium-Kursen und sinnvoller mehrsprachiger Zugänglichkeit.",

      "contact.eyebrow": "Kontakt",
      "contact.title": "Lassen Sie uns für Lernen, Ideen und sinnvolle Zusammenarbeit in Kontakt treten",
      "contact.description":
        "Dieser Bereich ist für Kommunikation, Bildungszusammenarbeit, Artikelideen, berufliches Networking und zukünftige Anfragen zu privaten Kursen in Zahnmedizin und Assistenz gedacht.",
      "contact.infoLabel": "Kontaktinformationen",
      "contact.infoTitle": "Offen für Kommunikation",
      "contact.infoText":
        "Sie können uns zu Bildungsinhalten, Zahnmedizin, zahnmedizinischer Assistenz, zukünftigem privatem Lernen, Artikelideen und beruflicher Zusammenarbeit kontaktieren.",
      "contact.focusLabel": "Fokus",
      "contact.focusText":
        "Zahnmedizin, zahnmedizinische Assistenz, Artikel, Neuigkeiten, Premium-Lernen",
      "contact.languagesLabel": "Sprachen",
      "contact.languagesText": "Deutsch, Russisch, Englisch, Usbekisch",
      "contact.emailLabel": "E-Mail",
      "contact.note":
        "Für direkten Kontakt können Sie auch manuell eine E-Mail senden. Eine Formularintegration kann später für die automatische Zustellung verbunden werden.",
      "contact.formLabel": "Nachricht senden",
      "contact.formTitle": "Schreiben Sie uns",
      "contact.nameLabel": "Name",
      "contact.namePlaceholder": "Ihr Name",
      "contact.emailFieldLabel": "E-Mail",
      "contact.emailPlaceholder": "ihre@email.com",
      "contact.topicLabel": "Thema",
      "contact.topicPlaceholder": "Artikel, Kurse, Zusammenarbeit...",
      "contact.messageLabel": "Nachricht",
      "contact.messagePlaceholder": "Schreiben Sie Ihre Nachricht...",
      "contact.sendButton": "Nachricht senden",
      "contact.footerText": "Bevorzugen Sie direkten Kontakt? Senden Sie eine Nachricht manuell per E-Mail.",
      "contact.directEmail": "E-Mail öffnen →",
      "contact.bottomEyebrow": "Mehrsprachige Plattform",
      "contact.bottomTitle": "In vier Sprachen verfügbar",

      "footer.description":
        "Eine moderne Bildungsplattform für Zahnmedizin mit Artikeln, Neuigkeiten, persönlichem Weg und privaten Premium-Kursen.",
      "footer.navigation": "Navigation",
      "footer.languages": "Sprachen"
    },

    ru: {
      "nav.home": "Главная",
      "nav.about": "О платформе",
      "nav.connect": "Связь",

      "home.eyebrow": "Стоматология • Образование • Статьи • Премиум-обучение",
      "home.title": "Современная платформа для стоматологического образования, статей, новостей и приватных курсов",
      "home.description":
        "Learning Path Journey — это современная многоязычная платформа, посвящённая стоматологии, стоматологическому ассистированию, обучающим статьям, полезным обновлениям и будущему премиум-обучению.",
      "home.primaryBtn": "Открыть платформу",
      "home.secondaryBtn": "Связаться",
      "home.badge1": "4 языка",
      "home.badge2": "Современный дизайн",
      "home.badge3": "Приватные курсы",
      "home.cardLabel": "Фокус платформы",
      "home.cardTitle": "Создано для роста, ясности и осмысленного обучения",
      "home.cardText":
        "Современное цифровое пространство для личного пути, образовательного контента, профессиональных тем и будущей приватной премиум-зоны в стоматологии.",
      "home.tag1": "Путь",
      "home.tag2": "Статьи",
      "home.tag3": "Новости",
      "home.tag4": "Курсы",
      "home.sectionEyebrow": "Что включает платформа",
      "home.sectionTitle": "Чистая структура для обучения и развития",
      "home.feature1Title": "Личный путь",
      "home.feature1Text":
        "История платформы, сформированная обучением, опытом и ростом.",
      "home.feature2Title": "Статьи и новости",
      "home.feature2Text":
        "Образовательный контент, профессиональные наблюдения и полезные обновления из мира стоматологии.",
      "home.feature3Title": "Приватные премиум-курсы",
      "home.feature3Text":
        "Будущая закрытая зона обучения для более глубокого и сфокусированного изучения.",
      "home.languagesEyebrow": "Многоязычный доступ",
      "home.languagesTitle": "Доступно на четырёх языках",

      "about.eyebrow": "О платформе",
      "about.title": "Современная образовательная платформа по стоматологии, созданная с ясностью, смыслом и ростом",
      "about.description":
        "Learning Path Journey — это многоязычное цифровое пространство, посвящённое стоматологии, стоматологическому ассистированию, обучающим статьям, полезным обновлениям и будущему приватному премиум-обучению.",
      "about.missionLabel": "Миссия",
      "about.missionTitle": "Почему эта платформа существует",
      "about.missionText1":
        "Эта платформа создана, чтобы объединить образование, профессиональное развитие и содержательный контент в одном элегантном и структурированном пространстве.",
      "about.missionText2":
        "Это не просто сайт, а начало более сильного образовательного направления в стоматологии и стоматологическом ассистировании.",
      "about.focusLabel": "Основной фокус",
      "about.focus1": "Стоматология",
      "about.focus2": "Стоматологическое ассистирование",
      "about.focus3": "Обучающие статьи",
      "about.focus4": "Полезные новости и обновления",
      "about.focus5": "Приватные премиум-курсы",
      "about.focus6": "Многоязычное обучение",
      "about.valuesEyebrow": "Ценности",
      "about.valuesTitle": "Что определяет платформу",
      "about.card1Title": "Ясность",
      "about.card1Text":
        "Знания должны быть понятными, структурированными и доступными.",
      "about.card2Title": "Рост",
      "about.card2Text":
        "Обучение — это процесс постоянного личного и профессионального развития.",
      "about.card3Title": "Глубина",
      "about.card3Text":
        "Цель не только информировать, но и создавать реальную образовательную ценность.",
      "about.visionEyebrow": "Видение",
      "about.visionTitle": "От личного пути к надёжному образовательному бренду",
      "about.visionText":
        "Долгосрочное видение — создать качественную и надёжную образовательную платформу по стоматологии со статьями, направляемым обучением, премиум-курсами и meaningful многоязычным доступом.",

      "contact.eyebrow": "Связь",
      "contact.title": "Давайте свяжемся для обучения, идей и осмысленного сотрудничества",
      "contact.description":
        "Это пространство создано для общения, образовательного сотрудничества, идей для статей, профессионального нетворкинга и будущих запросов по приватным курсам в стоматологии и ассистировании.",
      "contact.infoLabel": "Контактная информация",
      "contact.infoTitle": "Открыто для общения",
      "contact.infoText":
        "Вы можете связаться по вопросам образовательного контента, стоматологии, стоматологического ассистирования, будущего приватного обучения, идей для статей и профессионального сотрудничества.",
      "contact.focusLabel": "Фокус",
      "contact.focusText":
        "Стоматология, стоматологическое ассистирование, статьи, новости, премиум-обучение",
      "contact.languagesLabel": "Языки",
      "contact.languagesText": "Немецкий, русский, английский, узбекский",
      "contact.emailLabel": "Почта",
      "contact.note":
        "Для прямой связи вы также можете отправить письмо вручную. Интеграцию формы можно подключить позже для автоматической доставки.",
      "contact.formLabel": "Отправить сообщение",
      "contact.formTitle": "Напишите нам",
      "contact.nameLabel": "Имя",
      "contact.namePlaceholder": "Ваше имя",
      "contact.emailFieldLabel": "Почта",
      "contact.emailPlaceholder": "your@email.com",
      "contact.topicLabel": "Тема",
      "contact.topicPlaceholder": "Статьи, курсы, сотрудничество...",
      "contact.messageLabel": "Сообщение",
      "contact.messagePlaceholder": "Напишите ваше сообщение...",
      "contact.sendButton": "Отправить сообщение",
      "contact.footerText": "Предпочитаете прямой контакт? Отправьте письмо вручную по электронной почте.",
      "contact.directEmail": "Открыть почту →",
      "contact.bottomEyebrow": "Многоязычная платформа",
      "contact.bottomTitle": "Доступно на четырёх языках",

      "footer.description":
        "Современная образовательная стоматологическая платформа со статьями, новостями, личным путём и приватными премиум-курсами.",
      "footer.navigation": "Навигация",
      "footer.languages": "Языки"
    },

    uz: {
      "nav.home": "Bosh sahifa",
      "nav.about": "Platforma haqida",
      "nav.connect": "Bog‘lanish",

      "home.eyebrow": "Stomatologiya • Ta’lim • Maqolalar • Premium o‘qish",
      "home.title": "Stomatologik ta’lim, maqolalar, yangiliklar va yopiq kurslar uchun zamonaviy platforma",
      "home.description":
        "Learning Path Journey — bu stomatologiya, stomatologik assistentlik, ta’limiy maqolalar, foydali yangilanishlar va kelajakdagi premium o‘qishga bag‘ishlangan zamonaviy ko‘p tilli platforma.",
      "home.primaryBtn": "Platformani ko‘rish",
      "home.secondaryBtn": "Bog‘lanish",
      "home.badge1": "4 til",
      "home.badge2": "Zamonaviy dizayn",
      "home.badge3": "Yopiq kurslar",
      "home.cardLabel": "Platforma yo‘nalishi",
      "home.cardTitle": "Rivojlanish, aniqlik va mazmunli o‘rganish uchun yaratilgan",
      "home.cardText":
        "Shaxsiy yo‘l, ta’limiy kontent, professional mavzular va stomatologiyadagi kelajakdagi yopiq premium hudud uchun zamonaviy raqamli makon.",
      "home.tag1": "Yo‘l",
      "home.tag2": "Maqolalar",
      "home.tag3": "Yangiliklar",
      "home.tag4": "Kurslar",
      "home.sectionEyebrow": "Platforma nimalarni o‘z ichiga oladi",
      "home.sectionTitle": "O‘rganish va rivojlanish uchun toza tuzilma",
      "home.feature1Title": "Shaxsiy yo‘l",
      "home.feature1Text":
        "Platforma ortidagi hikoya, o‘qish, tajriba va rivojlanish bilan shakllangan.",
      "home.feature2Title": "Maqolalar va yangiliklar",
      "home.feature2Text":
        "Stomatologiya sohasidan ta’limiy kontent, professional qarashlar va foydali yangilanishlar.",
      "home.feature3Title": "Yopiq premium kurslar",
      "home.feature3Text":
        "Chuqurroq va aniqroq o‘qish uchun kelajakdagi yopiq ta’lim hududi.",
      "home.languagesEyebrow": "Ko‘p tilli kirish",
      "home.languagesTitle": "To‘rtta tilda mavjud",

      "about.eyebrow": "Platforma haqida",
      "about.title": "Aniqlik, maqsad va rivojlanish bilan yaratilgan zamonaviy stomatologik ta’lim platformasi",
      "about.description":
        "Learning Path Journey — bu stomatologiya, stomatologik assistentlik, ta’limiy maqolalar, foydali yangilanishlar va kelajakdagi yopiq premium o‘qishga bag‘ishlangan ko‘p tilli raqamli makon.",
      "about.missionLabel": "Missiya",
      "about.missionTitle": "Nega bu platforma mavjud",
      "about.missionText1":
        "Ushbu platforma ta’lim, professional rivojlanish va mazmunli kontentni bitta nafis va tuzilgan makonda birlashtirish uchun yaratilgan.",
      "about.missionText2":
        "Bu faqat veb-sayt emas, balki stomatologiya va stomatologik assistentlikdagi kuchliroq ta’lim yo‘nalishining boshlanishidir.",
      "about.focusLabel": "Asosiy yo‘nalish",
      "about.focus1": "Stomatologiya",
      "about.focus2": "Stomatologik assistentlik",
      "about.focus3": "Ta’limiy maqolalar",
      "about.focus4": "Foydali yangiliklar va yangilanishlar",
      "about.focus5": "Yopiq premium kurslar",
      "about.focus6": "Ko‘p tilli o‘rganish",
      "about.valuesEyebrow": "Qadriyatlar",
      "about.valuesTitle": "Platformani nima belgilaydi",
      "about.card1Title": "Aniqlik",
      "about.card1Text":
        "Bilim tushunarli, tuzilgan va qulay bo‘lishi kerak.",
      "about.card2Title": "Rivojlanish",
      "about.card2Text":
        "O‘rganish — bu doimiy shaxsiy va professional rivojlanish jarayoni.",
      "about.card3Title": "Chuqurlik",
      "about.card3Text":
        "Maqsad faqat ma’lumot berish emas, balki haqiqiy ta’limiy qiymat yaratishdir.",
      "about.visionEyebrow": "Qarash",
      "about.visionTitle": "Shaxsiy yo‘ldan ishonchli ta’lim brendigacha",
      "about.visionText":
        "Uzoq muddatli qarash — maqolalar, yo‘naltirilgan o‘qish, premium kurslar va mazmunli ko‘p tilli kirishga ega sifatli hamda ishonchli stomatologik ta’lim platformasini yaratishdir.",

      "contact.eyebrow": "Bog‘lanish",
      "contact.title": "O‘rganish, g‘oyalar va mazmunli hamkorlik uchun bog‘lanamiz",
      "contact.description":
        "Bu makon aloqa, ta’limiy hamkorlik, maqola g‘oyalari, professional networking va stomatologiya hamda assistentlik bo‘yicha kelajakdagi yopiq kurslar so‘rovlari uchun yaratilgan.",
      "contact.infoLabel": "Aloqa ma’lumotlari",
      "contact.infoTitle": "Muloqot uchun ochiq",
      "contact.infoText":
        "Siz ta’limiy kontent, stomatologiya, stomatologik assistentlik, kelajakdagi yopiq o‘qish, maqola g‘oyalari va professional hamkorlik bo‘yicha bog‘lanishingiz mumkin.",
      "contact.focusLabel": "Yo‘nalish",
      "contact.focusText":
        "Stomatologiya, stomatologik assistentlik, maqolalar, yangiliklar, premium o‘qish",
      "contact.languagesLabel": "Tillar",
      "contact.languagesText": "Nemis, rus, ingliz, o‘zbek",
      "contact.emailLabel": "Email",
      "contact.note":
        "To‘g‘ridan-to‘g‘ri bog‘lanish uchun emailni qo‘lda ham yuborishingiz mumkin. Formani avtomatik yetkazish uchun keyinroq ulash mumkin.",
      "contact.formLabel": "Xabar yuborish",
      "contact.formTitle": "Bizga yozing",
      "contact.nameLabel": "Ism",
      "contact.namePlaceholder": "Ismingiz",
      "contact.emailFieldLabel": "Email",
      "contact.emailPlaceholder": "your@email.com",
      "contact.topicLabel": "Mavzu",
      "contact.topicPlaceholder": "Maqolalar, kurslar, hamkorlik...",
      "contact.messageLabel": "Xabar",
      "contact.messagePlaceholder": "Xabaringizni yozing...",
      "contact.sendButton": "Xabar yuborish",
      "contact.footerText": "To‘g‘ridan-to‘g‘ri aloqa afzalmi? Email orqali qo‘lda xabar yuboring.",
      "contact.directEmail": "Emailni ochish →",
      "contact.bottomEyebrow": "Ko‘p tilli platforma",
      "contact.bottomTitle": "To‘rtta tilda mavjud",

      "footer.description":
        "Maqolalar, yangiliklar, shaxsiy yo‘l va yopiq premium kurslarga ega zamonaviy stomatologik ta’lim platformasi.",
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

  function updateActiveLanguageButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    const normalized = supportedLanguages.includes(lang) ? lang : "en";
    localStorage.setItem("siteLanguage", normalized);
    applyTranslations(normalized);
    updateActiveLanguageButtons(normalized);
  }

  function initializeLanguageButtons() {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
      });
    });
  }

  initializeLanguageButtons();
  setLanguage(getStoredLanguage());
});
