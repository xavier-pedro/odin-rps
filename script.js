/*
escolhe um numero aleatorio entre 1 e 3
retorna esse valor
*/

function getComputerChoice() { 
    return Math.round(Math.random() * (3 - 1) + 1);
}

console.log(getComputerChoice())
