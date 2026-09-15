/* Reset básico e tipografia */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #fdfcf6; 
    color: #333;
}

h1, h2, h3 {
    font-family: 'Lora', serif;
}

:root {
    --cor-primaria: #1b5e20; 
    --cor-secundaria: #0288d1; 
    --cor-destaque: #c18b45;
    --cor-branca: #ffffff;
    --cor-texto: #333333;
}

/* ==========================================
   Cabeçalho
   ========================================== */
header {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background-color: rgba(27, 94, 32, 0.98); 
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logos h2 {
    color: #e8c78f; 
    font-weight: 700;
}

.titulos-header {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.titulos-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--cor-branca);
    margin: 0;
}

.titulos-header p {
    font-size: 0.85rem;
    font-weight: 600;
    color: #dce9e1; 
    margin: 0;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: #e8f5e9;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.3s;
}

nav a:hover {
    color: #e8c78f;
}

/* ==========================================
   Capa Inicial (Hero)
   ========================================== */
.hero {
    height: 60vh;
    min-height: 350px;
    color: var(--cor-branca);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    /* Imagem da baleia direto do Wikimedia */
    background-image: linear-gradient(rgba(23, 53, 47, 0.6), rgba(23, 53, 47, 0.8)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20whale%20underwater.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed;
}

.hero h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero p {
    font-size: 1.2rem;
}

/* ==========================================
   Seções de Texto e Imagem (Sobre)
   ========================================== */
.section-title {
    color: var(--cor-primaria);
    text-align: center;
    margin: 50px 0 30px;
    font-size: 2.2rem;
}

.text-left {
    text-align: left;
    margin: 0 0 20px 0;
}

.sobre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 50px;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.sobre-texto {
    flex: 1;
    background-color: var(--cor-branca); 
    padding: 35px 40px; 
    border-radius: 15px; 
    box-shadow: 0 8px 25px rgba(23, 53, 47, 0.08); 
    border: 1px solid #dce8df; 
}

.sobre-texto p {
    line-height: 1.7;
    margin-bottom: 15px;
    color: var(--cor-texto);
}

img.sobre-img {
    width: 450px;
    height: 350px;
    border-radius: 15px;
    object-fit: cover; 
    box-shadow: 0 8px 25px rgba(23, 53, 47, 0.15); 
}

/* ==========================================
   Cards de Classificação
   ========================================== */
.fotos {
    padding: 20px 50px 60px;
    max-width: 1200px;
    margin: 0 auto;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.card {
    background: var(--cor-branca); 
    box-shadow: 0 5px 20px rgba(23, 53, 47, 0.08);
    border: 1px solid #dce8df;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(23, 53, 47, 0.15);
}

.card-content {
    padding: 20px;
}

.tag {
    display: inline-block;
    background: #e8f0e8;
    color: var(--cor-primaria);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.card h3 {
    font-size: 1.25rem;
    color: var(--cor-primaria);
    margin-bottom: 10px;
}

.card p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 8px;
}

img.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-bottom: 3px solid var(--cor-destaque);
}

/* ==========================================
   Elementos Especiais (Note e Timeline)
   ========================================== */
.note {
    background: #fff8e9;
    border-left: 5px solid var(--cor-destaque);
    padding: 18px;
    border-radius: 8px;
    margin-top: 25px;
    font-size: 0.95rem;
    color: var(--cor-texto);
}

.timeline {
    border-left: 4px solid var(--cor-destaque);
    padding-left: 25px;
    margin: 30px 0 10px;
}

.timeline h3 {
    color: var(--cor-primaria);
    font-size: 1.2rem;
    margin-top: 25px;
    margin-bottom: 5px;
}

.timeline h3:first-child {
    margin-top: 0;
}

.timeline p {
    font-size: 0.95rem;
    margin-bottom: 0;
}

/* ==========================================
   Footer
   ========================================== */
footer {
    background-color: var(--cor-primaria);
    color: var(--cor-branca);
    text-align: center;
    padding: 25px 20px;
    font-size: 0.9rem;
}

/* ==========================================
   Responsividade
   ========================================== */
@media (max-width: 900px) {
    header {
        flex-direction: column;
        gap: 15px;
        padding: 15px 20px;
    }

    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }

    .sobre {
        flex-direction: column !important;
        padding: 40px 20px;
        gap: 30px;
    }

    .sobre-texto {
        width: 100%;
        padding: 25px;
    }

    img.sobre-img {
        width: 100%;
        height: 250px;
    }

    .fotos {
        padding: 30px 20px;
    }
        }
