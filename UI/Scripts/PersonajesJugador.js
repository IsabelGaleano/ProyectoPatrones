//PARAMETRO TIPO 
//1 ES SI ES DE TIENDA
//2 ES SI SOLO SE ACTUALIZA POR TURNO

//***--FALTA ACTUALIZAR LA TABLA DE PERSONAJES SEGUN LAS TROPAS COMPRADAS DE CADA JUGADOR POR TURNO--***
function actualizarPersonajesJugador(tipo) {
    //console.log(jugadorActual);

    //JUGADOR ACTUAL ES DE TURNOS.JS
    let idCastillo = jugadorActual.idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));

    if (tipo == 1) {
        //ESTA FUNCION SOLO SE UTILIZA AL COMPRAR UN PERSONAJE POR LO QUE DEBERÍA TENER EL ARRAY EN MINIMO 1
        obj.castillos[idCastillo - 1].tropas.forEach(function(element) {
            //ARQUERO
            if (element.tipo == "Arquero") {
                let iconUsar = document.getElementById("Arquero").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

            } //ESPADACHIN 
            else if (element.tipo == "Espadachin") {
                let iconUsar = document.getElementById("Espadachin").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            } //BERSEQUER 
            else if (element.tipo == "Bersequer") {
                let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            } //MAGO 
            else if (element.tipo == "Mago") {
                let iconUsar = document.getElementById("Mago").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            } //ASESINO 
            else if (element.tipo == "Asesino") {
                let iconUsar = document.getElementById("Asesino").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            } //JINETE 
            else if (element.tipo == "Jinete") {
                let iconUsar = document.getElementById("Jinete").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            } //ESPIA 
            else if (element.tipo == "Espia") {
                let iconUsar = document.getElementById("Espia").getElementsByClassName("fas")[3];
                iconUsar.className = "fab fa-superpowers";
                iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
            }
        });
    } else {
        if (obj.castillos[idCastillo - 1].tropas != null) {
            obj.castillos[idCastillo - 1].tropas.forEach(function(element) {
                //ARQUERO
                if (element.tipo == "Arquero") {
                    let iconUsar = document.getElementById("Arquero").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

                } else {
                    let iconUsar = document.getElementById("Arquero").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPADACHIN 
                if (element.tipo == "Espadachin") {
                    let iconUsar = document.getElementById("Espadachin").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Espadachin").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //BERSEQUER 
                if (element.tipo == "Bersequer") {
                    let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //MAGO 
                if (element.tipo == "Mago") {
                    let iconUsar = document.getElementById("Mago").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Mago").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ASESINO 
                if (element.tipo == "Asesino") {
                    let iconUsar = document.getElementById("Asesino").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Asesino").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //JINETE 
                if (element.tipo == "Jinete") {
                    let iconUsar = document.getElementById("Jinete").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Jinete").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPIA 
                if (element.tipo == "Espia") {
                    let iconUsar = document.getElementById("Espia").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    let iconUsar = document.getElementById("Espia").getElementsByClassName("fas")[3];
                    iconUsar.className = "fas fa-times";
                    iconUsar.style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
            });
        } else {
            document.getElementById("Arquero").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Arquero").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            document.getElementById("Espadachin").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Espadachin").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //BERSEQUER
            document.getElementById("Bersequer").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Bersequer").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //MAGO
            document.getElementById("Mago").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Mago").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //ASESINO
            document.getElementById("Asesino").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Asesino").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //JINETE
            document.getElementById("Jinete").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Jinete").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //ESPIA
            document.getElementById("Espia").getElementsByClassName("fas")[3].className = "fas fa-times";
            document.getElementById("Espia").getElementsByClassName("fas")[3].style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
        }
    }

    //<i class="fab fa-superpowers" style="color:rgb(0,255,0);font-size:18px;">
}