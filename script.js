/*
escolhe um numero aleatorio entre 1 e 3
retorna esse valor
*/

function getComputerChoice() { 
    let computerChoice = Math.round(Math.random() * 2 + 1);

    computerChoice = computerChoice === 1 ?
    "PEDRA" : computerChoice === 2 ?
    "PAPEL" : "TESOURA";

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Digite sua escolha: \nPedra \nPapel \nTesoura")
    humanChoice = humanChoice.toUpperCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
