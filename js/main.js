const translations = {
  en:{ nav_home:"Home", nav_journey:"Journey", nav_about:"About", nav_contact:"Contact",
    home_title:"My Learning Path", home_subtitle:"A personal journey through education, discipline, and growth."},
  ru:{ nav_home:"Главная", nav_journey:"Путь", nav_about:"О сайте", nav_contact:"Контакты",
    home_title:"Мой путь обучения", home_subtitle:"Личный путь через образование и рост."}
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = translations[lang][el.dataset.i18n];
  });
  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".language-switcher button")
  .forEach(b=>b.onclick=()=>setLang(b.dataset.lang));

setLang(localStorage.getItem("lang") || "en");
