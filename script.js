function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2 + 1);

  computerChoice =
    computerChoice === 1 ? "PEDRA" : computerChoice === 2 ? "PAPEL" : "TESOURA";

  return computerChoice;
}

// function getHumanChoice() {
//   let humanChoice = prompt(
//     "Digite sua escolha: \n✊ Pedra \n✋Papel \n✌Tesoura ",
//   );
//   humanChoice = humanChoice.toUpperCase();
//   return humanChoice;
// }

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return alert(
        `🟰 Houve um empate!\n\nVocê: ${humanChoice} | Computador: ${computerChoice}`,
      );
    } else if (humanChoice === "PEDRA" && computerChoice === "PAPEL") {
      computerScore++;
      return alert(
        `❌ Rodada perdida!\n\nVocê: ${humanChoice} | Computador: ${computerChoice} \n\n📊 PONTUAÇÃO:\n🙂 Você: ${humanScore}\n🤖 Computador:  ${computerScore} `,
      );
    } else if (humanChoice === "PAPEL" && computerChoice === "TESOURA") {
      computerScore++;
      return alert(
        `❌ Rodada perdida!\n\nVocê: ${humanChoice} | Computador: ${computerChoice} \n\n📊 PONTUAÇÃO:\n🙂 Você: ${humanScore}\n🤖 Computador:  ${computerScore} `,
      );
    } else if (humanChoice === "TESOURA" && computerChoice === "PEDRA") {
      computerScore++;
      return alert(
        `❌ Rodada perdida!\n\nVocê: ${humanChoice} | Computador: ${computerChoice} \n\n📊 PONTUAÇÃO:\n🙂 Você: ${humanScore}\n🤖 Computador: ${computerScore} `,
      );
    } else {
      humanScore++;
      return alert(
        `✅ Rodada ganha!\nVocê: ${humanChoice} | Computador: ${computerChoice} \n\n📊 PONTUAÇÃO:\n🙂 Você: ${humanScore}\n🤖 Computador: ${computerScore} `,
      );
    }
  }

const botton = document.querySelectorAll("button");
const result = document.querySelector("div");

botton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = btn.textContent;

    playRound(playerSelection, getComputerChoice());
  });
});


