let playerOption = "";
let computerOption ="";
let contadorHomem = 0;
let contadorComputador = 0;
let resultadoFinal = "";
const divBotoes = document.querySelector(".botões");
const opcoes = ["Pedra", "Papel", "Tesoura"];
let contadorPrimeiro = document.querySelector("#primeiro");
let contadorSegundo = document.querySelector("#segundo");


function sortearItem(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

divBotoes.addEventListener("click", (evento) => {
    if (evento.target.className === "btn-option") {
        playerOption = evento.target.value;
        const resultadoHomem = document.querySelector("#homem");
        resultadoHomem.textContent = playerOption;
        console.log("Jogador: " + playerOption);
    } else if (evento.target.className !== "btn-option") return;
    const resultadoComputador = document.querySelector("#computador");
    resultadoComputador.textContent = sortearItem(opcoes);
    computerOption = resultadoComputador.textContent;
    console.log("Computador: " + computerOption);

    if (computerOption === "Pedra") {
        if (playerOption === "Papel") {
            contadorHomem += 1;
        } else if (playerOption === "Tesoura") {
            contadorComputador += 1;
        }
    } else if (computerOption === "Papel") {
        if (playerOption === "Pedra") {
            contadorComputador += 1;
        } else if (playerOption === "Tesoura") {
            contadorHomem += 1;
        }
    } else if (computerOption === "Tesoura") {
        if (playerOption === "Pedra") {
            contadorHomem += 1;
        } else if (playerOption === "Papel") {
            contadorComputador += 1;
        }
    }
    
    console.log("Jogador: " + contadorHomem);
    console.log("Computador: " + contadorComputador);

    contadorPrimeiro.textContent = contadorHomem;
    contadorSegundo.textContent = contadorComputador;

    if (contadorHomem === 5 || contadorComputador === 5) {
        if (contadorHomem > contadorComputador) {
            resultadoFinal = "Você venceu!";
        } else {
            resultadoFinal = "Você perdeu!"
        }
        divBotoes.innerHTML = "<div>" + resultadoFinal + "</div>";
    } 
})

