const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) {   
        cartaoAtual = 0;
    } else {
        cartaoAtual++;
    }
    
    esconderCartaoSelecionado();
    cartoes[cartaoAtual].classList.add("selecionado");
})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) {
        cartaoAtual = cartoes.length - 1;
    } else {
        cartaoAtual--;        
    }

    esconderCartaoSelecionado();
    cartoes[cartaoAtual].classList.add("selecionado");
})

function esconderCartaoSelecionado() {
    const cartaoSelecioando = document.querySelector(".selecionado");
    cartaoSelecioando.classList.remove("selecionado");
}
