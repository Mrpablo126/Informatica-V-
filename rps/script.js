let choice = "";

function Rock() {
  choice = "Rock";
}

function Paper() {
  choice = "Paper";
}
function Scissors(){
    choice = "Scissors";
}
// opciones para el juego V:

function choose() {
  let resultText = document.getElementById("resultado");
  let messageText = document.getElementById("r");
  if (choice == "") {
    messageText.innerHTML = "Result";
    return;
  }

  let number = Math.random();
  let result;
  if (number < 0.5) {
    result = "Rock";
  }
  if (number > 0.3){
    result = "Paper";
  }
  if (number < 0.2){
    result = "scissors";
  } else {
    messageText.innerHTML = "Try again";
  }
  // probabilidades de opciones

  resultText.innerHTML = result;
  if (choice = result) {
    messageText.innerHTML = "tier";
  }
  if (choise < result) {
    messageText.innerHTML = "You lose";
  } else{
    messageText.innerHTML = "You win";
  }
}
