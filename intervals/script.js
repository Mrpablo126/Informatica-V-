let counter = 15;
let c = counter


function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setTimeout(count, 10)
    setInterval(count, 1000);
    document.querySelector("button").disable = true;
    };
    if (c = 0){
        console.log("TILIN");
    }
});
