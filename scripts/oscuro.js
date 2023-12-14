
window.addEventListener("load", init);



function init() {

    document.querySelector(".modoOscuro").addEventListener("click", activar);


}


function activar(elemento) {
    var contenedor = document.querySelector(".contenedor");
    mover(contenedor);
    cambiarColor();

}

function mover(contenedor) {

    switch (contenedor.style.justifyContent) {
        case "flex-start":
            contenedor.style.justifyContent = "flex-end";
            break;
        case "flex-end":
            contenedor.style.justifyContent = "flex-start";
            break;
        default:
            contenedor.style.justifyContent = "flex-end";
    }

}

function cambiarColor() {


    if(document.body.style.filter =="invert(100%)"){
        document.body.style.filter ="invert(0%)";
    }else{
        document.body.style.filter ="invert(100%)";
    }
}



