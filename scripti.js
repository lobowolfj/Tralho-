document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE ABERTURA ---
    const btnSaberMais = document.getElementById("btn-saber-mais");
    const conteudoPrincipal = document.getElementById("conteudo-principal");
    const heroSection = document.getElementById("hero-section");
    const cabecalho = document.getElementById("cabecalho-principal");

    if (btnSaberMais) {
        btnSaberMais.addEventListener("click", () => {
            cabecalho.classList.add("visivel");
            conteudoPrincipal.style.display = "block";
            // Restante da lógica do site e modais
        });
    }
});