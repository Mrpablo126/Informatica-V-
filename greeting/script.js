document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){
        let name = document.querySelector("#name").value;
        console.log("Hi "+ name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = new Date();

        let hour = now.getHours();
        if (hour < 12){
            document.querySelector("#time").innerHTML = "☀️good morning";
        } else if (hour < 18){
            document.querySelector("#time").innerHTML = "🌄Good afternoon!";
        } else {
            document.querySelector("#time").innerHTML = "🌕Good night!";
        }
        let v = new Date();
        let day = now.getDay();
        if (v == 5){
            document.querySelector("#day").innerHTML = "Finally Fridaaaaaay! 🕺";
        } else if (v > 4){
            document.querySelector("#day").innerHTML = "Just enjoy your weekend 🙌";
        } else{
            document.querySelector("#day").innerHTML = "Not Friday, yet!";
        }
        return false;
    }
});
