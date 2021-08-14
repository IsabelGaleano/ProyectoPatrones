//***--FALTA ACTUALIZAR LA TABLA DE PERSONAJES SEGUN LAS TROPAS COMPRADAS DE CADA JUGADOR POR TURNO--***
function actualizarPersonajesJugador() {

    //JUGADOR ACTUAL ES DE TURNOS.JS
    let idCastillo = jugadorActual.idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    console.log(obj.castillos[posicionCastilloActual]);
    //console.log(obj.castillos[idCastillo - 1].tropas);
    let arqueroPasado = false;
    let espadachinPasado = false;
    let berserquerPasado = false;
    let magoPasado = false;
    let asesinoPasado = false;
    let jinetePasado = false;
    let espiaPasado = false;

    if (obj.castillos[posicionCastilloActual].tropas != null) {
        obj.castillos[posicionCastilloActual].tropas.forEach(function(element) {
            //ARQUERO
            if (element.tipo == "Arquero" && arqueroPasado == false) {
                iconoUsarArquero();
                console.log("Arquero");
                arqueroPasado = true;
            } else if (arqueroPasado == false) {
                NDArquero();
            }
            //ESPADACHIN 
            if (element.tipo == "Espadachin" && espadachinPasado == false) {
                iconoUsarEspadachin();
                espadachinPasado = true;
            } else if (espadachinPasado == false) {
                NDEspadachin();
            }
            //BERSEQUER 
            if (element.tipo == "Berserquer" && berserquerPasado == false) {
                iconoUsarBersequer();
                berserquerPasado = true;
            } else if (berserquerPasado == false) {
                NDBersequer();
            }
            //MAGO 
            if (element.tipo == "Mago" && magoPasado == false) {
                iconoUsarMago();
                magoPasado = true;
            } else if (magoPasado == false) {
                NDMago
            }
            //ASESINO 
            if (element.tipo == "Asesino" && asesinoPasado == false) {
                iconoUsarAsesino();
                asesinoPasado = true;
                console.log("Asesino");
            } else if (asesinoPasado == false) {
                NDAsesino();
            }
            //JINETE 
            if (element.tipo == "Jinete" && jinetePasado == false) {
                iconoUsarJinete();
                jinetePasado = true;
            } else if (jinetePasado == false) {
                NDJinete();
            }
            //ESPIA 
            if (element.tipo == "Espia" && espiaPasado == false) {
                iconoUsarEspia();
                espiaPasado = true;
            } else if (espiaPasado == false) {
                NDEspia();
            }
        });

    } else {
        //console.log("ninguna tropa");
        NDArquero();
        NDAsesino();
        NDEspadachin();
        NDBersequer();
        NDEspia();
        NDJinete();
        NDMago();
    }
}



//FUNCIONES PARA CAMBIAR LOS ICONOS DE PERSONAJES

//ICONO VERDE DE DISPONIBILIDAD
function iconoUsarArquero() {
    document.getElementById("icon-usabilidad-arquero").setAttribute('class', 'fab fa-superpowers');
    document.getElementById("icon-usabilidad-arquero").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-arquero").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarEspadachin() {
    document.getElementById("icon-usabilidad-espadachin").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarAsesino() {
    document.getElementById("icon-usabilidad-asesino").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarBersequer() {
    document.getElementById("icon-usabilidad-bersequer").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarEspia() {
    document.getElementById("icon-usabilidad-espia").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-espia").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarJinete() {
    document.getElementById("icon-usabilidad-jinete").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

function iconoUsarMago() {
    document.getElementById("icon-usabilidad-mago").className = "fab fa-superpowers";
    document.getElementById("icon-usabilidad-mago").style = "color:rgb(0,255,0);font-size:18px;"
    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
}

//ICONO ROJO DE NO DISPONIBLE (N/D)
function NDArquero() {
    document.getElementById("icon-usabilidad-arquero").className = "fas fa-times";
    document.getElementById("icon-usabilidad-arquero").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDEspadachin() {
    document.getElementById("icon-usabilidad-espadachin").className = "fas fa-times";
    document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDAsesino() {
    document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDBersequer() {
    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDEspia() {
    document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
    document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDJinete() {
    document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

function NDMago() {
    document.getElementById("icon-usabilidad-mago").className = "fas fa-times";
    document.getElementById("icon-usabilidad-mago").style = "color:rgb(204, 4, 4);font-size:18px;"
    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
}

//<i class="fab fa-superpowers" style="color:rgb(0,255,0);font-size:18px;">