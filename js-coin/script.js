let choice = "";

function Heads() {
  choice = "Heads";
}

function chooseTails() {
  choice = "Tails";
}

function coin() {
  let resultText = document.getElementById("resultado");
  let messageText = document.getElementById("r");
  if (choice == "") {
    messageText.innerHTML = "Result";
    return;
  }

  let number = Math.random();
  let result;
  if (number < 0.5) {
    result = "Heads";
  } else {
    result = "Tails";
  }
  resultText.innerHTML = result;
  if (choice == result) {
    messageText.innerHTML = "You win";
  } else {
    messageText.innerHTML = "You lose";
  }
}
