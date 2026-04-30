let choice = "";

function Rock() {
  choice = "Rock";
  let rock = 0.2;
}

function Paper() {
  choice = "Paper";
  let rock = 0.3;
}
function Scissors(){
    choice = "Scissors";
    let scissors = 0.5
}
// opciones para el juego V:

function choose() {
  let resultText = document.getElementById("resultado");
  let messageText = document.getElementById("r");
  if (choice == "") {
    messageText.innerHTML = "Result";
    return;
  }

  let number = Math.random(0.2,0.3,0.5);
  let result;
  if (number = 0.2) {
    result = "Rock";

  } if (number = 0.3 ) {
    result = "Paper";
  } if (number = 0.5) {
    result = "Scissors";
  }
  // probabilidades de opciones

  resultText.innerHTML = result;
  if (choice == result) {
    messageText.innerHTML = "You win";
  } else {
    messageText.innerHTML = "You lose";
  }
}
