// let choice = "";

// function Rock() {
//   choice = "Rock";
// }

// function Paper() {
//   choice = "Paper";
// }
// function Scissors(){
//     choice = "Scissors";
// }
// // opciones para el juego V:

// function choose() {
//   let resultText = document.getElementById("resultado");
//   let messageText = document.getElementById("r");
//   if (choice == "") {
//     messageText.innerHTML = "Result";
//     return;
//   }

//   let number = Math.random();
//   let result;
//   if (number < 0.5) {
//     result = "Rock";
//   }
//   if (number > 0.3){
//     result = "Paper";
//   }
//   if (number < 0.2){
//     result = "scissors";
//   } else {
//     messageText.innerHTML = "Try again";
//   }
//   // probabilidades de opciones

//   resultText.innerHTML = result;
//   if (choice = result) {
//     messageText.innerHTML = "tier";
//   }
//   if (choise < result) {
//     messageText.innerHTML = "You lose";
//   } else{
//     messageText.innerHTML = "You win";
//   }
// }
function game(userChoice){
  let randomNum = Math.random();
  let compChoice;
  if (randomNum < 0.33){
    compChoice = "Rock";
  } else if (randomNum < 0.66){
    compChoice = "Paper";
  } else if (randomNum < 1){
    compChoice = "Scissors";
  }
  console.log(compChoice);


  let result = document.querySelector("#result");
  if(userChoice == compChoice){
    result.innerHTML = "Tie";
  } else if (userChoice == "Rock"){
    if (compChoice == "Paper"){
      result.innerHTML = "You Lose";
    }
  } else {
    result.innerHTML = "You won";
  }
}

  // document.addEventListener('DOMContentLoaded', function()){
  //   //Your code here
  //   document.querySelector("#rock-button").onclick = ;

  //});
