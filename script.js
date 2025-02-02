
let humanScore = 0;
let computerScore = 0;

let humanScoreDisplay = document.getElementById("humanScore");
let computerScoreDisplay = document.getElementById("computerScore");
let humanChoice = document.getElementById("yourChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");

function computerRandom(){
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(humanSelection){
  const computerSelection = computerRandom();

  humanChoice.innerText = `You Chose:${humanSelection}`
  computerChoice.innerText = `Computer Chose:${computerSelection}`

  if(
    humanSelection === computerSelection
  ){
  result.innerText = "It's Tie!";
  }
  else if(
    humanSelection === "Rock" && computerSelection === "Scissors" ||
    humanSelection === "Paper" && computerSelection === "Rock" ||
    humanSelection === "Scissors" && computerSelection === "Paper" 
  ){
    result.innerText = "You Win!";
    humanScore += 1;
  }
  else{
    result.innerText = "Computer Wins!";
    computerScore += 1;
  }

  updateScore();
  checkWinner();
}

  function checkWinner(){
    if(humanScore >= 5){
      result.innerText = `You Win! The Game Will Restart!`
      setTimeout(resetTime, 2000)
    }
    else if(computerScore >= 5){
      result.innerText = `Computer Wins! The Game Will Restart!`
      setTimeout(resetTime, 2000)
    }
  }

function updateScore(){
  humanScoreDisplay.innerText = `Your Score: ${humanScore}`
  computerScoreDisplay.innerText = `Your Score: ${computerScore}`
}

function resetTime(){
  humanScore = 0;
  computerScore = 0;
  updateScore();
  result.innerText = "The Game Restarted!";
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"))
document.getElementById("paper").addEventListener("click", () => playRound("Paper"))
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"))