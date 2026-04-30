let eleccion = "";

function elegirCara(){
    eleccion = "Heads";
}

function elegirSello(){
    eleccion = "Tails";
}

function coin(){
    let randomNum = Math.random();
    let subtitle = document.querySelector("#resultado");
    let mensaje = document.querySelector("#mensaje");

    if (!subtitle || !mensaje){
        console.error("No se encontraron los elementos en el HTML");
        return;
    }

    if (eleccion === ""){
        mensaje.innerHTML = "Primero elige cara o sello";
        return;
    }

    let resultado;

    if (randomNum < 0.5){
        resultado = "Heads";
    } else {
        resultado = "Tails";
    }

    subtitle.innerHTML = resultado;

    if (eleccion === resultado){
        mensaje.innerHTML = "¡Ganaste!";
    } else {
        mensaje.innerHTML = "Perdiste";
    }
}
