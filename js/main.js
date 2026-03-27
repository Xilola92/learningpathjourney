document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.connect": "Connect",
      "nav.courses": "Private Courses",

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

      "article1.eyebrow": "Personal Story",
      "article1.title": "My Journey in Dentistry: Part 1 — Uzbekistan",
      "article1.subtitle":
        "The beginning of my path in medicine and dentistry, my first work experience, difficulties, mentors, and the journey that later led me toward Germany.",
      "article1.p1":
        "My journey in dentistry began in a rather difficult way. I loved medicine, and in 2011 I graduated in Tashkent, Uzbekistan, from the Borovsky Medical College, one of the strongest and most respected medical colleges there.",
      "article1.p2":
        "After graduation, I could not find a job. That period was not easy. I was even ready to become a volunteer at Maternity Hospital No. 12, the same place where I was born.",
      "article1.p3":
        "I worked there as a volunteer for about one or two months. Later, I was invited to the clinic Shifo Nur Ko‘z, which at that time was considered one of the best large private clinics.",
      "article1.p4":
        "I mainly worked in the physiotherapy department there. But there were difficulties. I often experienced bullying and mobbing from the senior nurse. At that time, I was very young and did not fully understand what it was. For a long time, I was not even officially employed.",
      "article1.p5":
        "Then, in 2014, I came to the dental clinic Apollonia. There I saw real dentistry with my own eyes for the first time. Natalia taught me a little, and although I worked there for free for one month during a very difficult period of my life, I am still grateful for that experience. Later, I was dismissed.",
      "article1.p6":
        "Also in 2014, when I was already 22 years old, I was accepted into Ideal Dent laboratory. Here I would like to thank the founder, Alimov Fazliddin. At first, I worked as an assistant, and later I also learned dental technical work.",
      "article1.p7":
        "That place became very meaningful for me not only professionally but also personally. Because of one important decision connected with that period of my life, I later reached a much higher international level. But because of personal difficulties, I left that place.",
      "article1.p8":
        "In 2017, I continued working in dentistry, but that period was also difficult. I left my job, and for about a month it was very hard to find another one, especially because of my stutter. Then I began to think more strategically about my personal and professional development.",
      "article1.p9":
        "I created an Instagram page called dental_assistant.uz, where I started sharing what I knew. Later, in 2018, I came to Vitali Dent, where I worked for about one year, until the clinic closed for renovation. At that time, I had already started becoming interested in Germany.",
      "article1.p10":
        "In 2018, I came to Sirius Dent. There I met my beloved mentors, Dr. Elena Kim Dmitrievna and Iza Sungarova. Working side by side with them gave me strong experience. I also met one of my closest friends there, Elena Shanshieva. Even today, we all stay in touch like a family, and I am sincerely grateful to that team.",
      "article1.p11":
        "Then the pandemic began, and everything stopped. In 2021, after quarantine, I went to Saudi Arabia. I was invited there by Dr. Sardor Mirakhmedov Sultanovich, the founder of My Dental and Dental Academy, and also one of my mentors. We even worked at night sometimes. It was a very intense and interesting experience. There I gained practical exposure to tooth extractions, infiltration anesthesia, restorations, and many other things. I am grateful to him and the team for that experience as well.",
      "article1.p12":
        "In 2023, I worked in endodontics under the microscope with Oybek Tulkunovich, and that became my last workplace in Uzbekistan. I also completed a course in dental photography, and I am grateful to Max Nur for that knowledge. In this way, step by step, I built my experience before the next chapter of my life.",

      "footer.description":
        "A modern dental education platform with articles, news, personal journey, and premium private courses.",
      "footer.navigation": "Navigation",
      "footer.languages": "Languages"
    },

    de: {
      "nav.home": "Startseite",
      "nav.about": "Über uns",
      "nav.connect": "Kontakt",
      "nav.courses": "Private Kurse",

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

      "article1.eyebrow": "Persönliche Geschichte",
      "article1.title": "Mein Weg in der Zahnmedizin: Teil 1 — Usbekistan",
      "article1.subtitle":
        "Der Beginn meines Weges in Medizin und Zahnmedizin, meine ersten Arbeitserfahrungen, Schwierigkeiten, Mentoren und der Weg, der mich später nach Deutschland führte.",
      "article1.p1":
        "Mein Weg in der Zahnmedizin begann nicht einfach. Ich liebte die Medizin und schloss 2011 in Taschkent, Usbekistan, das Borovsky Medical College ab, eines der stärksten und angesehensten medizinischen Colleges.",
      "article1.p2":
        "Nach meinem Abschluss konnte ich zunächst keine Arbeit finden. Diese Zeit war nicht einfach. Ich war sogar bereit, als Freiwillige im Entbindungsheim Nr. 12 zu arbeiten — genau dort, wo ich selbst geboren wurde.",
      "article1.p3":
        "Dort arbeitete ich etwa ein bis zwei Monate als Freiwillige. Später wurde ich in die Klinik Shifo Nur Ko‘z eingeladen, die damals als eine der besten großen Privatkliniken galt.",
      "article1.p4":
        "Dort arbeitete ich hauptsächlich in der Physiotherapie-Abteilung. Aber es gab auch Schwierigkeiten. Ich war oft mit Bullying und Mobbing durch die leitende Krankenschwester konfrontiert. Damals war ich sehr jung und verstand nicht vollständig, was geschah. Lange Zeit wurde ich nicht einmal offiziell angestellt.",
      "article1.p5":
        "Dann kam ich 2014 in die Zahnklinik Apollonia. Dort sah ich zum ersten Mal echte Zahnmedizin mit eigenen Augen. Natalia brachte mir einiges bei. Ich arbeitete dort einen Monat lang kostenlos, obwohl diese Zeit in meinem Leben sehr schwer war. Später wurde ich entlassen.",
      "article1.p6":
        "Ebenfalls 2014, als ich bereits 22 Jahre alt war, wurde ich im Labor Ideal Dent aufgenommen. Hier möchte ich dem Gründer Alimov Fazliddin danken. Zuerst arbeitete ich als Assistentin, später lernte ich auch zahntechnische Arbeit.",
      "article1.p7":
        "Dieser Ort wurde für mich nicht nur beruflich, sondern auch persönlich sehr wichtig. Wegen einer wichtigen Entscheidung, die mit dieser Lebensphase verbunden war, erreichte ich später ein viel höheres internationales Niveau. Doch wegen persönlicher Probleme musste ich diesen Ort verlassen.",
      "article1.p8":
        "2017 arbeitete ich weiter in der Zahnmedizin, aber auch diese Zeit war schwierig. Ich kündigte, und etwa einen Monat lang war es sehr schwer, eine neue Stelle zu finden, besonders wegen meines Stotterns. Dann begann ich strategischer über meine persönliche und berufliche Entwicklung nachzudenken.",
      "article1.p9":
        "Ich eröffnete eine Instagram-Seite mit dem Namen dental_assistant.uz und begann dort das zu veröffentlichen, was ich wusste. Später, im Jahr 2018, kam ich zu Vitali Dent, wo ich etwa ein Jahr arbeitete, bis die Klinik wegen Renovierung geschlossen wurde. In dieser Zeit begann ich mich bereits für Deutschland zu interessieren.",
      "article1.p10":
        "2018 kam ich zu Sirius Dent. Dort lernte ich meine geliebten Mentoren kennen — Dr. Elena Kim Dmitrievna und Iza Sungarova. Die Arbeit Seite an Seite mit ihnen gab mir starke Erfahrung. Dort fand ich auch eine meiner engsten Freundinnen — Elena Shanshieva. Bis heute bleiben wir wie eine Familie in Kontakt, und ich bin diesem Team von Herzen dankbar.",
      "article1.p11":
        "Dann begann die Pandemie, und alles kam zum Stillstand. Im Jahr 2021, nach der Quarantäne, ging ich nach Saudi-Arabien. Ich wurde von Dr. Sardor Mirakhmedov Sultanovich eingeladen — dem Gründer von My Dental und Dental Academy und zugleich einem meiner Mentoren. Wir arbeiteten manchmal sogar nachts. Es war eine sehr intensive und interessante Erfahrung. Dort sammelte ich praktische Erfahrung mit Zahnextraktionen, Infiltrationsanästhesie, Restaurationen und vielem mehr. Dafür bin ich ihm und dem Team ebenfalls dankbar.",
      "article1.p12":
        "Im Jahr 2023 arbeitete ich in der Endodontie unter dem Mikroskop mit Oybek Tulkunovich, und das wurde mein letzter Arbeitsplatz in Usbekistan. Außerdem absolvierte ich einen Kurs in Dentalfotografie, und ich bin Max Nur für dieses Wissen dankbar. So baute ich Schritt für Schritt meine Erfahrung vor dem nächsten Kapitel meines Lebens auf.",

      "footer.description":
        "Eine moderne Bildungsplattform für Zahnmedizin mit Artikeln, Neuigkeiten, persönlichem Weg und privaten Premium-Kursen.",
      "footer.navigation": "Navigation",
      "footer.languages": "Sprachen"
    },

    ru: {
      "nav.home": "Главная",
      "nav.about": "О платформе",
      "nav.connect": "Связь",
      "nav.courses": "Приватные курсы",

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
        "Долгосрочное видение — создать качественную и надёжную образовательную платформу по стоматологии со статьями, направляемым обучением, премиум-курсами и полноценным многоязычным доступом.",

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

      "article1.eyebrow": "Личная история",
      "article1.title": "Мой путь в стоматологии: часть 1 — Узбекистан",
      "article1.subtitle":
        "Начало моего пути в медицине и стоматологии, первый опыт работы, трудности, наставники и дорога, которая позже привела меня к Германии.",
      "article1.p1":
        "Мой путь в стоматологии начался довольно непросто. Я любила медицину, и в 2011 году окончила в Ташкенте, в Узбекистане, медицинский колледж Боровского — один из самых сильных и уважаемых медицинских колледжей.",
      "article1.p2":
        "После окончания я не смогла найти работу. Это было непростое время. Я даже была готова стать волонтёром в родильном доме №12 — именно там, где сама когда-то родилась.",
      "article1.p3":
        "Там я была волонтёром около одного-двух месяцев. Позже меня пригласили в клинику «Shifo Nur Ko‘z», которая в то время считалась одной из лучших крупных частных клиник.",
      "article1.p4":
        "В основном я работала там в отделении физиотерапии. Но были и трудности. Я часто сталкивалась с буллингом и моббингом со стороны старшей медсестры. Тогда я была очень молодой и не до конца понимала, что это такое. Долгое время меня даже официально не оформляли на работу.",
      "article1.p5":
        "Потом, в 2014 году, я пришла в стоматологическую клинику «Апполония». Именно там я впервые увидела настоящую стоматологию своими глазами. Наталья многому меня научила. Я работала там бесплатно один месяц, несмотря на то что в тот период моя жизнь была очень тяжёлой. Позже меня уволили.",
      "article1.p6":
        "Также в 2014 году, когда мне уже было 22 года, меня приняли в лабораторию «Ideal Dent». Здесь я хочу выразить благодарность основателю — Алимову Фазлиддину. Сначала я ассистировала, а затем начала осваивать и зуботехническую работу.",
      "article1.p7":
        "Это место стало для меня очень важным не только профессионально, но и лично. Благодаря одному важному решению, связанному с тем этапом моей жизни, позже я вышла на гораздо более высокий, почти мировой уровень. Но из-за личных проблем мне пришлось уйти оттуда.",
      "article1.p8":
        "В 2017 году я продолжала работать в стоматологии, но и тот период был трудным. Я уволилась, и около месяца мне было очень сложно найти новую работу, особенно из-за заикания. Тогда я начала думать более стратегически о своём личном и профессиональном развитии.",
      "article1.p9":
        "Я создала страницу в Instagram под названием dental_assistant.uz, где начала публиковать то, что знала. Позже, в 2018 году, я пришла в Vitali Dent, где проработала около года, пока клиника не закрылась на ремонт. Именно в то время у меня уже начал появляться интерес к Германии.",
      "article1.p10":
        "В 2018 году я пришла в Sirius Dent. Там я встретила своих любимых наставников — доктора Елену Ким Дмитриевну и Изу Сунгарову. Работа бок о бок с ними дала мне сильный опыт. Там же я обрела одну из своих самых близких подруг — Елену Шаншиеву. До сих пор мы все остаёмся на связи как семья, и я искренне благодарна этой команде.",
      "article1.p11":
        "Потом началась пандемия, и всё остановилось. В 2021 году, после карантина, я уехала в Саудовскую Аравию. Меня пригласил доктор Сардор Мирахмедов Султанович — основатель My Dental и Dental Academy, а также мой наставник. Мы иногда работали даже ночами. Это был очень интенсивный и интересный опыт. Там я получила практический опыт в удалении зубов, инфильтрационной анестезии, реставрациях и многом другом. Я также благодарна ему и всей команде за этот этап.",
      "article1.p12":
        "В 2023 году я работала в эндодонтии под микроскопом с Ойбеком Тулкуновичем, и это стало моим последним местом работы в Узбекистане. Я также прошла курс по дентальной фотографии и благодарна Максу Нуру за эти знания. Так шаг за шагом я собрала свой опыт перед следующим этапом жизни.",

      "footer.description":
        "Современная образовательная стоматологическая платформа со статьями, новостями, личным путём и приватными премиум-курсами.",
      "footer.navigation": "Навигация",
      "footer.languages": "Языки"
    },

    uz: {
      "nav.home": "Bosh sahifa",
      "nav.about": "Platforma haqida",
      "nav.connect": "Bog‘lanish",
      "nav.courses": "Yopiq kurslar",

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

      "article1.eyebrow": "Shaxsiy hikoya",
      "article1.title": "Mening stomatologiyadagi yo‘lim: 1-qism — O‘zbekiston",
      "article1.subtitle":
        "Tibbiyot va stomatologiyadagi yo‘limning boshlanishi, ilk ish tajribam, qiyinchiliklar, ustozlar va meni keyinchalik Germaniyaga olib borgan yo‘l.",
      "article1.p1":
        "Mening stomatologiyadagi yo‘lim oson boshlanmadi. Men tibbiyotni sevganman va 2011 yilda Toshkentdagi Borovskiy tibbiyot kollejini tamomladim. Bu O‘zbekistondagi eng kuchli va hurmatli tibbiyot kollejlaridan biri edi.",
      "article1.p2":
        "O‘qishni tugatganimdan keyin ish topa olmadim. Bu davr oson bo‘lmadi. Men hatto o‘zim tug‘ilgan 12-son tug‘ruqxonada volontyor bo‘lishga ham tayyor edim.",
      "article1.p3":
        "U yerda taxminan bir-ikki oy volontyor bo‘lib ishladim. Keyin meni Shifo Nur Ko‘z klinikasiga taklif qilishdi. O‘sha paytda bu eng yaxshi yirik xususiy klinikalardan biri hisoblanardi.",
      "article1.p4":
        "Men u yerda asosan fizioterapiya bo‘limida ishladim. Ammo qiyinchiliklar ham bo‘ldi. Katta hamshiradan ko‘p marta bullying va mobbing ko‘rdim. O‘sha paytda juda yosh edim va buning asl mohiyatini to‘liq tushunmasdim. Uzoq vaqtgacha meni hatto rasmiy ishga ham olishmadi.",
      "article1.p5":
        "Keyin 2014 yilda men Apollonia stomatologik klinikasiga keldim. Aynan o‘sha yerda men haqiqiy stomatologiyani o‘z ko‘zim bilan ko‘rdim. Natalya menga ko‘p narsani o‘rgatdi. O‘sha paytda hayotim juda og‘ir bo‘lishiga qaramay, men u yerda bir oy bepul ishladim. Keyin meni ishdan bo‘shatishdi.",
      "article1.p6":
        "Shuningdek, 2014 yilda, 22 yoshimda, meni Ideal Dent laboratoriyasiga qabul qilishdi. Bu yerda asoschi Alimov Fazliddinga minnatdorchilik bildiraman. Avval assistent bo‘lib ishladim, keyin esa tish texnikasi yo‘nalishini ham o‘rgandim.",
      "article1.p7":
        "Bu joy men uchun nafaqat professional, balki shaxsiy jihatdan ham juda muhim bo‘ldi. Aynan o‘sha davr bilan bog‘liq bir muhim qaror sababli keyinchalik men ancha yuqori, hatto xalqaro darajaga chiqdim. Ammo shaxsiy muammolar sababli u yerdan ketishga to‘g‘ri keldi.",
      "article1.p8":
        "2017 yilda men stomatologiyada ishlashni davom ettirdim, lekin bu davr ham qiyin bo‘ldi. Ishdan ketdim va taxminan bir oy davomida yangi ish topish juda mushkul bo‘ldi, ayniqsa duduqlanishim sababli. Shundan keyin men o‘zimning shaxsiy va professional rivojlanishim haqida strategikroq o‘ylay boshladim.",
      "article1.p9":
        "Men dental_assistant.uz nomli Instagram sahifasini ochdim va bilgan narsalarimni ulasha boshladim. Keyin 2018 yilda Vitali Dent klinikasiga keldim va u yerda bir yilcha ishladim. Keyin klinika ta’mir sababli yopildi. Aynan o‘sha paytda menda Germaniyaga qiziqish paydo bo‘la boshlagan edi.",
      "article1.p10":
        "2018 yilda men Sirius Dentga keldim. U yerda men sevimli ustozlarim — doktor Elena Kim Dmitrievna va Iza Sungarova bilan tanishdim. Ular bilan yonma-yon ishlash menga juda kuchli tajriba berdi. O‘sha yerda eng yaqin dugonalarimdan biri — Elena Shanshieva bilan ham tanishdim. Bugungacha biz hammamiz oila kabi aloqadamiz va men bu jamoaga chin yurakdan minnatdorman.",
      "article1.p11":
        "Keyin pandemiya boshlandi va hammasi to‘xtab qoldi. 2021 yilda, karantindan keyin, men Saudiya Arabistoniga ketdim. U yerga meni doktor Sardor Mirahmedov Sultanovich taklif qildi — u My Dental va Dental Academy asoschisi hamda mening ustozlarimdan biri edi. Ba’zan tunlari ham ishlardik. Bu juda qiziqarli va intensiv tajriba bo‘ldi. U yerda tish sug‘urish, infiltratsion anesteziya, restavratsiya va boshqa ko‘plab amaliy tajribalarni oldim. Bu tajriba uchun unga va jamoaga ham minnatdorman.",
      "article1.p12":
        "2023 yilda men Oybek Tulkunovich bilan mikroskop ostida endodontiyada ishladim va bu O‘zbekistondagi oxirgi ish joyim bo‘ldi. Shuningdek, dantal fotografiya bo‘yicha kurs ham oldim va bu bilim uchun Max Nurdan minnatdorman. Shu tarzda, keyingi hayot bosqichim oldidan tajribamni qadam-baqadam yig‘dim.",

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
