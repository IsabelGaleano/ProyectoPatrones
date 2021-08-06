//PARAMETRO TIPO 
//1 ES SI ES DE TIENDA
//2 ES SI SOLO SE ACTUALIZA POR TURNO

//***--FALTA ACTUALIZAR LA TABLA DE PERSONAJES SEGUN LAS TROPAS COMPRADAS DE CADA JUGADOR POR TURNO--***
function actualizarPersonajesJugador(tipo) {
    //console.log(jugadorActual);

    //JUGADOR ACTUAL ES DE TURNOS.JS
    let idCastillo = jugadorActual.idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    console.log(obj);
    console.log(obj.castillos[idCastillo - 1].tropas);
    if (tipo == 1) {
        if (obj.castillos[idCastillo - 1].tropas != null) {
            //VALIDA SI SOLO ES 1 OBJETO
            console.log(obj.castillos[idCastillo - 1].tropas == Array);
            if (obj.castillos[idCastillo - 1].tropas != Array) {
                let element = obj.castillos[idCastillo - 1].tropas;
                console.log(element);
                //ARQUERO
                if (element.tipo == "Arquero") {
                    document.getElementById("icon-usabilidad-arquero").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-arquero").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

                } else {
                    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPADACHIN 
                if (element.tipo == "Espadachin") {
                    document.getElementById("icon-usabilidad-bersequer").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //BERSEQUER 
                if (element.tipo == "Berserquer") {
                    let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //MAGO 
                if (element.tipo == "Mago") {
                    document.getElementById("icon-usabilidad-bersequer").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ASESINO 
                if (element.tipo == "Asesino") {
                    document.getElementById("icon-usabilidad-asesino").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //JINETE 
                if (element.tipo == "Jinete") {
                    document.getElementById("icon-usabilidad-jinete").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPIA 
                if (element.tipo == "Espia") {
                    let iconUsar = document.getElementById("Espia").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
            } else {
                obj.castillos[idCastillo - 1].tropas.forEach(function(element) {
                    //ARQUERO
                    if (element.tipo == "Arquero") {
                        document.getElementById("icon-usabilidad-arquero").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-arquero").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

                    } else {
                        document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ESPADACHIN 
                    if (element.tipo == "Espadachin") {
                        document.getElementById("icon-usabilidad-bersequer").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //BERSEQUER 
                    if (element.tipo == "Berserquer") {
                        let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                        iconUsar.className = "fab fa-superpowers";
                        iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //MAGO 
                    if (element.tipo == "Mago") {
                        document.getElementById("icon-usabilidad-bersequer").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ASESINO 
                    if (element.tipo == "Asesino") {
                        document.getElementById("icon-usabilidad-asesino").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-asesino").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //JINETE 
                    if (element.tipo == "Jinete") {
                        document.getElementById("icon-usabilidad-jinete").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-jinete").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ESPIA 
                    if (element.tipo == "Espia") {
                        let iconUsar = document.getElementById("Espia").getElementsByClassName("fas")[3];
                        iconUsar.className = "fab fa-superpowers";
                        iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                });
            }
        }
    } else {
        if (obj.castillos[idCastillo - 1].tropas != null) {
            //VALIDA SI SOLO ES 1 OBJETO
            console.log(obj.castillos[idCastillo - 1].tropas == Array);
            if (obj.castillos[idCastillo - 1].tropas != Array) {
                let element = obj.castillos[idCastillo - 1].tropas;
                console.log(element);
                //ARQUERO
                if (element.tipo == "Arquero") {
                    document.getElementById("icon-usabilidad-arquero").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-arquero").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

                } else {
                    document.getElementById("icon-usabilidad-arquero").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-arquero").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPADACHIN 
                if (element.tipo == "Espadachin") {
                    document.getElementById("icon-usabilidad-espadachin").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-espadachin").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //BERSEQUER 
                if (element.tipo == "Berserquer") {
                    let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                    iconUsar.className = "fab fa-superpowers";
                    iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //MAGO 
                if (element.tipo == "Mago") {
                    document.getElementById("icon-usabilidad-mago").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-mago").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-mago").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-mago").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ASESINO 
                if (element.tipo == "Asesino") {
                    document.getElementById("icon-usabilidad-asesino").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //JINETE 
                if (element.tipo == "Jinete") {
                    document.getElementById("icon-usabilidad-jinete").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
                //ESPIA 
                if (element.tipo == "Espia") {
                    document.getElementById("icon-usabilidad-espia").className = "fab fa-superpowers";
                    document.getElementById("icon-usabilidad-espia").style = "color:rgb(0,255,0);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                } else {
                    document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
                    document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
                    document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                }
            } else {
                obj.castillos[idCastillo - 1].tropas.forEach(function(element) {
                    //ARQUERO
                    if (element.tipo == "Arquero") {
                        document.getElementById("icon-usabilidad-arquero").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-arquero").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "Usar";

                    } else {
                        document.getElementById("icon-usabilidad-arquero").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-arquero").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ESPADACHIN 
                    if (element.tipo == "Espadachin") {
                        document.getElementById("icon-usabilidad-espadachin").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-espadachin").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //BERSEQUER 
                    if (element.tipo == "Berserquer") {
                        let iconUsar = document.getElementById("Bersequer").getElementsByClassName("fas")[3];
                        iconUsar.className = "fab fa-superpowers";
                        iconUsar.style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //MAGO 
                    if (element.tipo == "Mago") {
                        document.getElementById("icon-usabilidad-mago").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-mago").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-mago").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-mago").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ASESINO 
                    if (element.tipo == "Asesino") {
                        document.getElementById("icon-usabilidad-asesino").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-asesino").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //JINETE 
                    if (element.tipo == "Jinete") {
                        document.getElementById("icon-usabilidad-jinete").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-jinete").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                    //ESPIA 
                    if (element.tipo == "Espia") {
                        document.getElementById("icon-usabilidad-espia").className = "fab fa-superpowers";
                        document.getElementById("icon-usabilidad-espia").style = "color:rgb(0,255,0);font-size:18px;"
                        document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "Usar";
                    } else {
                        document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
                        document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
                        document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
                    }
                });
            }
        } else {
            console.log("ninguna tropa");
            document.getElementById("icon-usabilidad-arquero").className = "fas fa-times";
            document.getElementById("icon-usabilidad-arquero").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Arquero").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            document.getElementById("icon-usabilidad-espadachin").className = "fas fa-times";
            document.getElementById("icon-usabilidad-espadachin").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Espadachin").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //BERSEQUER

            document.getElementById("icon-usabilidad-bersequer").className = "fas fa-times";
            document.getElementById("icon-usabilidad-bersequer").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Bersequer").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //MAGO
            document.getElementById("icon-usabilidad-mago").className = "fas fa-times";
            document.getElementById("icon-usabilidad-mago").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Mago").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //ASESINO
            document.getElementById("icon-usabilidad-asesino").className = "fas fa-times";
            document.getElementById("icon-usabilidad-asesino").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Asesino").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //JINETE
            document.getElementById("icon-usabilidad-jinete").className = "fas fa-times";
            document.getElementById("icon-usabilidad-jinete").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Jinete").getElementsByClassName("usar-personaje")[0].textContent = "N/D";

            //ESPIA
            document.getElementById("icon-usabilidad-espia").className = "fas fa-times";
            document.getElementById("icon-usabilidad-espia").style = "color:rgb(204, 4, 4);font-size:18px;"
            document.getElementById("Espia").getElementsByClassName("usar-personaje")[0].textContent = "N/D";
        }

    }
}

//<i class="fab fa-superpowers" style="color:rgb(0,255,0);font-size:18px;">