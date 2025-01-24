let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let tentativas = 1;

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

function limparInput() {
    document.getElementById("chute-jogador").value = "";
}

function chutar() {
    let chute = document.getElementById("chute-jogador").value;
    if (!chute) {
        alert("Informe um número entre 1 e 10");
        return;
    }

    chute = parseInt(chute);
    if (chute < 1 || chute > 10) {
        alert("Informe um número entre 1 e 10");
        return;
    }

    let { titulo, desc, img } = "";

    if (chute == numeroSecreto) {
        titulo = "Acertou!";
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        desc = `Você acertou o número secreto (${chute}) com ${tentativas} ${palavraTentativa}!`;
        img = "./assets/img/acertou.png";

        document.querySelector(".btn-chutar").style.display = "none";
        document.querySelector(".btn-novo-jogo").style.display = "block";
        document.querySelector("#chute-jogador").style.display = "none";
    } else {
        titulo = "Foi quase!";
        desc = numeroSecreto < chute ? `O número secreto é menor que ${chute}` : `O número secreto é maior que ${chute}`;
        img = "./assets/img/quase.png";
        tentativas++;
    }

    alterarImagem(img);
    alterarInfos(titulo, desc);
    limparInput();
}

function reiniciarJogo() {
    numeroSecreto = parseInt(Math.random() * 10 + 1);
    console.log(numeroSecreto)
    tentativas = 1;
    alterarImagem("./assets/img/inicio.png");
    alterarInfos("Chute Ninja", "Escolha um número entre 1 e 10");
    document.querySelector(".btn-chutar").style.display = "block";
    document.querySelector(".btn-novo-jogo").style.display = "none";
    document.querySelector("#chute-jogador").style.display = "block";
}