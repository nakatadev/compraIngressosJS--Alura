
let qtdPista = document.getElementById('qtd-pista');
let qtdSuperior = document.getElementById('qtd-superior');
let qtdInferior = document.getElementById('qtd-inferior');


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    switch (tipoIngresso) {
        case "inferior":
            qtdInferior.textContent = parseInt(qtdInferior.textContent) - quantidade;
            break;
        case "pista":
            qtdPista.textContent = parseInt(qtdPista.textContent) - quantidade;
            break;
        case "superior":
            qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - quantidade;
            break;
    }
}