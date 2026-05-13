let counter = 5;
let minute = counter / 60;
let zero = 0;
function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    const damn = new Audio("damn-bird_KTWlhCD.mp3");
    if (counter == 0){
            damn.currenTime = 0;
            damn.play();

        }

    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    };
});
