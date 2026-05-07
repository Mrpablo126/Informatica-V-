console.log("Hi");
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hi");
    document.querySelector("form").onsubmit = function(){
        console.log("Hi");

        let name = document.querySelector("#name").value;
        console.log("Hi "+ name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = newDate();

        let hour = now.getHours();
        if (hour < 12){
            document.querySelector("#time").innerHTML = "☀️good morning";
        } else if (hour < 18){
            document.querySelector("#time").innerHTML = "🌄Good afternoon!";
        } else {
            document.querySelector("#time").innerHTML = "🌕Good night!";
        }

        return false;
    }
});
