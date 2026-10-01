/*
escolhe um numero aleatorio entre 1 e 3
retorna esse valor
*/

function getComputerChoice() { 
    return Math.round(Math.random() * 2 + 1);
}

console.log(getComputerChoice())

function getHumanChoice(){
    let humanChoice = prompt("Digite o número da sua escolha: \n [1] - Pedra \n [2] - Papel \n [3] - Tesoura")
    return humanChoice;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;