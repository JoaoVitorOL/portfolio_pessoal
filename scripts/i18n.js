import { pt } from "./languages/pt.js";
import { en } from "./languages/en.js";

const languages = { pt, en };

export function setLanguage(lang) {
  const dict = languages[lang];
  if (!dict) return;

  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

export function applySavedLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
}

export function syncLanguageSelect() {
  const select = document.getElementById("idiomas-select");
  if (!select) return;

  const lang = localStorage.getItem("lang") || "en";
  setLanguageIcon(lang);
  select.value = lang;

}

export function setLanguageIcon(lang) {
    const img = document.getElementById("idiomas-imagem");
    if (!img) return;

    const flags = {
        pt: "../assets/brasil.png",
        en: "../assets/usa.png"
    };

    img.src = flags[lang] ?? flags.pt;
}
