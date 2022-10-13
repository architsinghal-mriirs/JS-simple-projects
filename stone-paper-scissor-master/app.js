//Selectors
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const imagePlayer = document.getElementById("imagePlayer");
let score = 0;

const computerChoiceGenerate = (e) => {
  result.innerText = "";
  inlineDisplayer();
  let pChoice = e.target.value;
  const choice = ["stone", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  let cChoice = choice[index];
  playerChoice.innerText = pChoice;
  computerChoice.innerText = cChoice;
  let resulter = resultCalculator(pChoice, cChoice);
  if (resulter == "winner") {
    imagePlayer.innerHTML =
      '<img src="hungry-lunch.gif" width = 40% height = 40%>';
  } else if (resulter == "loser") {
    imagePlayer.innerHTML = '<img src="200.gif" width = 60% height = 60%>';
  } else {
    imagePlayer.innerHTML =
      '<img src="kid-thinking.gif" width = 40% height = 25%>';
  }
};

const inlineDisplayer = () => {
  playerChoice.style.display = "inline";
  computerChoice.style.display = "inline";
  result.style.display = "inline";
};

const resultCalculator = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
    result.innerText = "Draw";
    return "draw";
  }
  if (pChoice === "stone") {
    if (cChoice === "paper") {
      result.innerText = "Computer Wins!";
      return "loser";
    } else {
      result.innerText = "You Win !";
      return "winner";
    }
  }
  if (pChoice === "paper") {
    if (cChoice === "scissor") {
      result.innerText = "Computer Wins!";
      return "loser";
    } else {
      result.innerText = "You Win !";
      return "winner";
    }
  }
  if (pChoice === "scissor") {
    if (cChoice === "stone") {
      result.innerText = "Computer Wins!";
      return "loser";
    } else {
      result.innerText = "You Win !";
      return "winner";
    }
  }
};

//Event Listeners
stone.addEventListener("click", computerChoiceGenerate);
paper.addEventListener("click", computerChoiceGenerate);
scissor.addEventListener("click", computerChoiceGenerate);
