/**
 * Carrega uma página interna na área de conteúdo.
 * @param {string} nomePagina - Nome da página sem extensão.
 */
function carregarPagina(nomePagina) {
    fetch(`${nomePagina}.html`)
        .then(r => {
            if (!r.ok) {
                throw new Error("Página não encontrada");
            }
            return r.text();
        })
        .then(html => {
            document.getElementById("conteudo").innerHTML = html;

            // Força o scroll para o topo
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

        })
        .catch(err => {
            document.getElementById("conteudo").innerHTML =
                "<p>Erro ao carregar página.</p>";
            console.error(err);
        });
}

// Carrega a página inicial ao abrir o site
document.addEventListener("DOMContentLoaded", () => carregarPagina("../pages/habilidades"));