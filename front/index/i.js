const navbar = document.querySelector('.navbar');
const card = document.querySelector('.card');

function ajustarMargem() {
        // Pega a altura real da navbar em pixels naquele exato momento
    const alturaNavbar = navbar.offsetHeight;         
        // Aplica como margin-top no card
    card.style.marginTop = (alturaNavbar) + 'px'; 
}

    // Executa quando a página carrega
window.addEventListener('load', ajustarMargem);
    // Executa se o usuário mudar o tamanho da tela (o que muda a altura da navbar)
window.addEventListener('resize', ajustarMargem);
