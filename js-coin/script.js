function coin(){
    let randomNum = Math.random();
    console.log(randomNum);

    let subtitle = document.querySelector("h2");
    if (randomNum < 0.5){
        subtitle.innerHTML = "Heads";
    }
    else{
        subtitle.innerHTML = "Tails";
    }

}
