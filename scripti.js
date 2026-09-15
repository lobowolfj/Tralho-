document.addEventListener("DOMContentLoaded", () => {
    
    // Função para rolagem suave ao clicar nos links do menu
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const id = this.getAttribute('href');
            const secaoAlvo = document.querySelector(id);
            
            // Compensa a altura do cabeçalho que é fixo
            const alturaCabecalho = document.querySelector('header').offsetHeight;
            
            if (secaoAlvo) {
                window.scrollTo({
                    top: secaoAlvo.offsetTop - alturaCabecalho - 20, // -20px para dar um respiro
                    behavior: 'smooth'
                });
            }
        });
    });

});
