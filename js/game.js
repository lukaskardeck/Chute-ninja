let limiteMax = 10;
let numeroSecreto = parseInt(Math.random() * limiteMax + 1);
console.log(numeroSecreto)
let tentativas = 1;

let inputJogador = document.getElementById("chute-jogador");
let btnChutar = document.querySelector(".btn-chutar");
let btnNovoJogo = document.querySelector(".btn-novo-jogo");

inputJogador.focus();

function botaoVisivel(btn) {
    const style = window.getComputedStyle(btn);
    return style.display !== "none";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (botaoVisivel(btnChutar)) {
            btnChutar.click();
        } else {
            btnNovoJogo.click();
        }
    }
});

function alterarTexto(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function alterarInfos(titulo, desc) {
    alterarTexto("h1", titulo);
    alterarTexto("p", desc);
}

function alterarImagem(src) {
    document.querySelector("img").src = src;
}

function exibirInfoInicial() {
    alterarInfos("Chute Ninja", `Escolha um número entre 1 e ${limiteMax}`);
}

exibirInfoInicial();

function limparInput() {
    inputJogador.value = "";
}

function chutar() {
    let chute = inputJogador.value;
    if (!chute) {
        alert(`Informe um número entre 1 e ${limiteMax}`);
        inputJogador.focus();
        return;
    }

    chute = parseInt(chute);
    if (chute < 1 || chute > limiteMax) {
        alert(`Informe um número entre 1 e ${limiteMax}`);
        limparInput();
        inputJogador.focus();
        return;
    }

    let { titulo, desc, img } = "";

    if (chute == numeroSecreto) {
        titulo = "É isso aí!";
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        desc = `Você acertou o número secreto (${chute}) com ${tentativas} ${palavraTentativa}!`;
        img = "./assets/img/acertou.png";

        btnChutar.style.display = "none";
        btnNovoJogo.style.display = "block";
        inputJogador.style.display = "none";
    } else {
        titulo = "Foi quase!";
        desc = numeroSecreto < chute ? `O número secreto é menor que ${chute}` : `O número secreto é maior que ${chute}`;
        img = "./assets/img/quase.png";
        tentativas++;
    }

    alterarImagem(img);
    alterarInfos(titulo, desc);
    limparInput();
    inputJogador.focus();
}

function reiniciarJogo() {
    numeroSecreto = parseInt(Math.random() * limiteMax + 1);
    console.log(numeroSecreto)
    tentativas = 1;
    exibirInfoInicial();
    alterarImagem("./assets/img/inicio.png");
    btnChutar.style.display = "block";
    btnNovoJogo.style.display = "none";
    inputJogador.style.display = "block";
    inputJogador.focus();
}