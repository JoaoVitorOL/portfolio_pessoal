import { carregarComponente } from "./component-loader.js";
import { setLanguage, syncLanguageSelect, setLanguageIcon} from "./i18n.js";


document.addEventListener("DOMContentLoaded", async () => {
    await carregarComponente("header", "../pages/header.html");
    await carregarComponente("footer", "../pages/footer.html");

    syncLanguageSelect();

});


document.addEventListener("change", e => {
    if (e.target.id === "idiomas-select") {
        setLanguage(e.target.value);
        setLanguageIcon(e.target.value);
    }
});
