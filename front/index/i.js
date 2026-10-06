//VARIAVEIS ========================================================
const navbar = document.querySelector('.navbar');
const card = document.querySelector('.card');
const buttonNavBar = document.getElementById('btn-nav');
const lista = document.querySelector('.lista');
const it = document.querySelectorAll('.it');

//coloca o nome certo no butão =====================================
function buttonName() { 

    const it_malia = document.querySelector('.it-malia');
    buttonNavBar.textContent = it_malia.textContent;
}

//move até a tela e modifica quem está escolhido como -malia =======
function windowPosition(element) {
    //variáveis
    const id = element.id;
    const section = document.querySelector(`section.${id}`);
    const it_malia = document.querySelector('.it-malia');

    //verificação da existência
    if (!id) {
        return;
    }

    //caso seja "inicio" pois ele não está numa section
    if (id === "inicio"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        _malia(it_malia, element);

        return;
    }

    //verificação da existencia 2
    if (!section) {
        return;
    }

    //calcula para manter a asection bem no meio
    const posicao = section.getBoundingClientRect();
    const scroll = posicao.top - window.innerHeight / 2;
    //scroola até
    window.scrollTo({
        top: window.scrollY + scroll,
        behavior: 'smooth'
    });

    _malia(it_malia, element);
}

function _malia(it_malia, element){
    //tira o -malia do atual
    if (it_malia) {
        it_malia.classList.remove('it-malia');
        it_malia.classList.add('it');
    }
    //coloca o -malia no escolhido
    element.classList.remove('it');
    element.classList.add('it-malia');

    //chama função dos mobile
    buttonName();
}

//executa quando a página carrega ==================================
window.addEventListener('load', buttonName);

//executa quando clica no button declarado na variavel buttonNavBar=
buttonNavBar.addEventListener('click', menuMobile);

function menuMobile() {
    buttonNavBar.style.backgroundColor = "var(--verde)";
    lista.classList.toggle('open');
}

