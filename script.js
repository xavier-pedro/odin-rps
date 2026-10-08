function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2 + 1);

  computerChoice =
    computerChoice === 1 ? "PEDRA" : computerChoice === 2 ? "PAPEL" : "TESOURA";

  return computerChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const botton = document.querySelectorAll("button");
  const result = document.querySelector("ul");

  botton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const playerSelection = btn.textContent;

      playRound(playerSelection, getComputerChoice());
    });
  });

  function playRound(humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5) {
      if (humanChoice === computerChoice) {
        const resultHistory = document.createElement("li");
        resultHistory.textContent = `EMPATE!: Você: ${humanChoice} | Computador: ${computerChoice} | Pontuação: Você: ${humanScore} | Computador: ${computerScore}`;
        return result.appendChild(resultHistory);
      } else if (humanChoice === "PEDRA" && computerChoice === "PAPEL") {
        computerScore++;
        const resultHistory = document.createElement("li");
        resultHistory.textContent = `RODADA PERDIDA!: Você: ${humanChoice} | Computador: ${computerChoice} | Pontuação: Você: ${humanScore} | Computador: ${computerScore}`;
        return result.appendChild(resultHistory);
      } else if (humanChoice === "PAPEL" && computerChoice === "TESOURA") {
        computerScore++;
        const resultHistory = document.createElement("li");
        resultHistory.textContent = `RODADA PERDIDA!: Você: ${humanChoice} | Computador: ${computerChoice} | Pontuação: Você: ${humanScore} | Computador: ${computerScore}`;
        return result.appendChild(resultHistory);
      } else if (humanChoice === "TESOURA" && computerChoice === "PEDRA") {
        computerScore++;
        const resultHistory = document.createElement("li");
        resultHistory.textContent = `RODADA PERDIDA!: Você: ${humanChoice} | Computador: ${computerChoice} | Pontuação: Você: ${humanScore} | Computador: ${computerScore}`;
        return result.appendChild(resultHistory);
      } else {
        humanScore++;
        const resultHistory = document.createElement("li");
        resultHistory.textContent = `RODADA GANHA!: Você: ${humanChoice} | Computador: ${computerChoice} | Pontuação: Você: ${humanScore} | Computador: ${computerScore}`;
        return result.appendChild(resultHistory);
      }
    } else {
      const resultHistory = document.createElement("li");
      resultHistory.textContent = `O VENCEDOR FINAL FOI... ${humanScore < 5 ? `Computador com ${computerScore}` : `Você com ${humanScore}`}`;
      return result.appendChild(resultHistory);
    }
  }
}

playGame();
