function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2 + 1);

  computerChoice =
    computerChoice === 1 ? "PEDRA" : computerChoice === 2 ? "PAPEL" : "TESOURA";

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Digite sua escolha: \nPedra \nPapel \nTesoura ");
  humanChoice = humanChoice.toUpperCase();
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return alert(
        `Houve um empate!\nSua escolha: ${humanChoice}\nEscolha do computador: ${computerChoice}`,
      );
    } else if (humanChoice === "PEDRA" && computerChoice === "PAPEL") {
      computerScore++;
      return alert(
        `Você perdeu!\nVocê escolheu ${humanChoice} e o computador ${computerChoice} \n\nPONTUAÇÃO:\nVocê: ${humanScore}\nComputador: ${computerScore} `,
      );
    } else if (humanChoice === "PAPEL" && computerChoice === "TESOURA") {
      computerScore++;
      return alert(
        `Você perdeu!\nVocê escolheu ${humanChoice} e o computador ${computerChoice} \n\nPONTUAÇÃO:\nVocê: ${humanScore}\nComputador: ${computerScore} `,
      );
    } else if (humanChoice === "TESOURA" && computerChoice === "PEDRA") {
      computerScore++;
      return alert(
        `Você perdeu!\nVocê escolheu ${humanChoice} e o computador ${computerChoice} \n\nPONTUAÇÃO:\nVocê: ${humanScore}\nComputador: ${computerScore} `,
      );
    } else {
      humanScore++;
      return alert(
        `Você venceu!\nVocê escolheu ${humanChoice} e o computador ${computerChoice} \n\nPONTUAÇÃO:\nVocê: ${humanScore}\nComputador: ${computerScore} `,
      );
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    return alert(
      `Você VENCEU!\nSua pontuação:${humanScore}\nComputador: ${computerScore}`,
    );
  } else {
    return alert(
      `Você PERDEU!\nSua pontuação:${humanScore}\nComputador: ${computerScore}`,
    );
  }
}

playGame();
