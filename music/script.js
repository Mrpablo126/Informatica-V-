document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const clap = new Audio("sounds/clap.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const snare = new Audio("sounds/snare.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const cowbellDiv = document.querySelector("#cowbell");
    const clapDiv = document.querySelector("#clap");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");
    const snareDiv = document.querySelector("#snare");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");

    window.addEventListener("keydown", function(event){
        if (event.key == "a"){
            kick.currenTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        } else if (event.key == "s"){
            cowbell.currenTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");
        }  else if (event.key == "d"){
            clap.currenTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        } else if (event.key == "q"){
            hihat.currenTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        } else if (event.key == "w"){
            openhat.currenTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        } else if (event.key == "e"){
            snare.currenTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        } else if (event.key == "f"){
            tom.currenTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        } else if (event.key == "r"){
            yuh.currenTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        }
    })

    window.addEventListener("keyup", function(event){
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        } else if (event.key == "s") {
            cowbellDiv.classList.remove("active");
        } else if (event.key == "d") {
            clapDiv.classList.remove("active");
        } else if (event.key == "q") {
            hihatDiv.classList.remove("active");
        } else if (event.key == "w") {
            openhatDiv.classList.remove("active");
        } else if (event.key == "e") {
            snareDiv.classList.remove("active");
        } else if (event.key == "f") {
            tomDiv.classList.remove("active");
        } else if (event.key == "r") {
            yuhDiv.classList.remove("active");
        }
    })
})
