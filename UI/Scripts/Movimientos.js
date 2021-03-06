//HACER UN EVENTLISTENER PARA TODOS LOS BOTONES DE LOS PERSONAJES QUE PUEDE USAR EL JUGADOR
let botonesUsarPersonaje = document.querySelectorAll(".usar-personaje");
let arrayCeldasConPersonajes = [];
let personajeActualMovimiento;
let clickMovimiento = 0;
let clickMovActual = 0;
let celdaClickeada;
let movimientosPersonaje;

let movimientoXTurno = false;
//let celdaAnteriorPersonaje;
let celdaAnteriorPersonajeJ1;
let celdaAnteriorPersonajeJ2;

let celdasAnteriores = [];
let celdasActuales = [];
//let primerMovimiento = false;
let tipoPersonajeActual;
let celdaJ1;
let celdaJ2;

//COMPRA PERSONAJES
//1 ARQUERO COSTO: 10
let primerMovimientoArqueroJ1 = false;
let primerMovimientoArqueroJ2 = false;
//2 ESPADACHIN COSTO: 15
let primerMovimientoEspadachinJ1 = false;
let primerMovimientoEspadachinJ2 = false;
//3 ASESINO COSTO: 5
let primerMovimientoAsesinoJ1 = false;
let primerMovimientoAsesinoJ2 = false;
//4 BERSEQUER COSTO: 25
let primerMovimientoBersequerJ1 = false;
let primerMovimientoBersequerJ2 = false;
//5 ESPIA COSTO: 5
let primerMovimientoEspiaJ1 = false;
let primerMovimientoEspiaJ2 = false;
//6 JINETE COSTO: 15
let primerMovimientoJineteJ1 = false;
let primerMovimientoJineteJ2 = false;
//7 MAGO COSTO: 10
let primerMovimientoMagoJ1 = false;
let primerMovimientoMagoJ2 = false;

//PARA EVITAR REPETIR UN PERSONAJE POR TURNO
let arqueroUsado = false;
let espadachinUsado = false;
let asesinoUsado = false;
let bersequerUsado = false;
let espiaUsado = false;
let jineteUsado = false;
let magoUsado = false;

//--ARRAYS PARA ESTADOS DE LOS JUGADORES DEL TABLERO--
let posicionPersonajeArray;

//ESTA FUNCION VALIDA SI YA EL JUGADOR ACTUAL TIENE 3 PERSONAJES EN EL TABLERO
//RETORNA TRUE SI HAY MAS O IGUAL A 3. RETORNA FALSE SI HAY MENOS DE 3
async function cantidadPersonajesTablero() {
    let contadorPersonajes = 0;
    let arrayPersonajes = [];
    for (let i = 1; i <= 10; i++) {
        let sumatoriaCeldas = 1;
        if (i > 1) {
            sumatoriaCeldas = (10 * (i - 1)) + 1;
        }
        //CELDAS DE CADA FILA
        for (let c = sumatoriaCeldas; c <= 10 * i; c++) {
            let celda = "c" + c;
            let celdaElement = document.getElementById(celda);
            if (celdaElement.personajeActivo != null) {
                if (celdaElement.personajeActivo.id == jugadorActual.id) {
                    arrayPersonajes.push(celdaElement.personajeActivo);
                }
            }
        }
    }
    return arrayPersonajes;

    //EVALUA SI HAY MAS DE 3 Y RETORNA
    /*
    if (contadorPersonajes >= 3) {
        return true;
    } else {
        return false;
    }*/

}

//RETORNA TRUE SI EL PERSONAJE SI EST?? EN EL TABLERO
async function verificarPersonajeActivoTablero(array, tipo) {
    let variable = true;
    let contador = 0;
    //console.log(array);
    if (array.length != 0) {

        for (let i = 0; i < array.length; i++) {
            if (array[i].id == jugadorActual.id) {
                contador++;
            }
        }
        //console.log(contador);
        if (contador >= 3) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].tipo == tipo) {

                    //console.log("True");
                    //return true;
                    variable = true;
                    break;
                } else {
                    variable = false;
                }

            }

        } else {
            //console.log("else");
            variable = true;
        }
    } else {
        variable = true;
    }


    return variable;
}


//EL JUGADOR 1 TIENE EL CASTILLO INFERIOR IZQUIERDO
//EL JUGADOR 2 TIENE EL CASTILLO SUPERIOR DERECHO
botonesUsarPersonaje.forEach(function(elem) {
    elem.addEventListener("click", async function() {
        let obj = JSON.parse(sessionStorage.getItem('tablero'));

        //VALIDA SI TIR?? DEL DADO
        if (document.getElementById("Movimientos").textContent === "undefined" || document.getElementById("Movimientos").textContent == "") {
            //console.log("entra en undefined");
            setMensaje("Debe tirar del dado", "../Imagenes/ui/checkbox_01.png");
            abrirModalMensaje();
        } else {

            //ARQUERO
            if (elem.classList.contains("arquero") && elem.textContent == "Usar") {
                console.log(await cantidadPersonajesTablero());
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Arquero") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && arqueroUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(1);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();


                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoArqueroJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoArqueroJ2 == true) {
                                movActual = true
                            }
                        }
                        arqueroUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;

                        console.log("jugadoractual: " + jugadorActual.id);
                        
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 1;
                        }else{
                            tipoPersonajeActual = 8;
                        }

                        


                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoArqueroJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoArqueroJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = "c82";                             
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = "c19";
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            //console.log(objComb);
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //ESPADACHIN
            if (elem.classList.contains("espadachin") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Espadachin") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && espadachinUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(2);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();

                        //VALIDAR ESTADO DEL PERSONAJE
                        //ESTADOS POSIBLES: NU (NO USADO) Y USADO

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoEspadachinJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoEspadachinJ2 == true) {
                                movActual = true
                            }
                        }
                        espadachinUsado = true;


                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 2;
                        }else{
                            tipoPersonajeActual = 9;
                        }
                        
                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoEspadachinJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoEspadachinJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;                              
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //ASESINO
            if (elem.classList.contains("asesino") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Asesino") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && asesinoUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(3);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();
                        //let obj = JSON.parse(sessionStorage.getItem('tablero'));

                        //VALIDAR ESTADO DEL PERSONAJE
                        //ESTADOS POSIBLES: NU (NO USADO) Y USADO

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoAsesinoJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoAsesinoJ2 == true) {
                                movActual = true
                            }
                        }
                        asesinoUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 3;
                        }else{
                            tipoPersonajeActual = 10;
                        }
                        
                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoAsesinoJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoAsesinoJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //BERSEQUER
            if (elem.classList.contains("bersequer") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Berserquer") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && bersequerUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(4);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();
                        //let obj = JSON.parse(sessionStorage.getItem('tablero'));

                        //VALIDAR ESTADO DEL PERSONAJE
                        //ESTADOS POSIBLES: NU (NO USADO) Y USADO

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoBersequerJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoBersequerJ2 == true) {
                                movActual = true
                            }
                        }
                        bersequerUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;

                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        console.log(movimientosPersonaje);
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 4;
                        }else{
                            tipoPersonajeActual = 11;
                        }
                        
                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoBersequerJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoBersequerJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //ESPIA
            if (elem.classList.contains("espia") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Espia") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && espiaUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(5);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();
                        //let obj = JSON.parse(sessionStorage.getItem('tablero'));

                        //VALIDAR ESTADO DEL PERSONAJE
                        //ESTADOS POSIBLES: NU (NO USADO) Y USADO

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoEspiaJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoEspiaJ2 == true) {
                                movActual = true
                            }
                        }
                        espiaUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 5;
                        }else{
                            tipoPersonajeActual = 12;
                        }
                        
                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoEspiaJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoEspiaJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //JINETE
            if (elem.classList.contains("jinete") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Jinete") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && jineteUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(6);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();
                        //let obj = JSON.parse(sessionStorage.getItem('tablero'));

                        //VALIDAR ESTADO DEL PERSONAJE
                        //ESTADOS POSIBLES: NU (NO USADO) Y USADO

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoJineteJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoJineteJ2 == true) {
                                movActual = true
                            }
                        }
                        jineteUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        console.log(personajeActualMovimiento);
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 6;
                        }else{
                            tipoPersonajeActual = 13;
                        }
                        
                        let primerMovimiento;
                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";
                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            primerMovimiento = true;
                            console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoJineteJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoJineteJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }
            }
            //MAGO
            if (elem.classList.contains("mago") && elem.textContent == "Usar") {
                if (await verificarPersonajeActivoTablero(await cantidadPersonajesTablero(), "Mago") == true) {
                    if (document.getElementById("Movimientos").textContent >= 1 && magoUsado == false) {
                        let estadoPersonaje;
                        let estadoActualPer = "NU";
                        personajeActualMovimiento = obtenerPersonajeDeTropas(7);
                        posicionPersonajeArray = await buscarCeldaYPersonaje();

                        let movActual = false;
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            if (primerMovimientoMagoJ1 == true) {
                                movActual = true
                            }
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            if (primerMovimientoMagoJ2 == true) {
                                movActual = true
                            }
                        }
                        magoUsado = true;

                        //let objCombinado = buscarCeldaYPersonaje(1);
                        let idCelda;
                        movimientosPersonaje = personajeActualMovimiento.cantMovimientos;
                        console.log(movimientosPersonaje);
                        if(jugadorActual.id == 1){
                            tipoPersonajeActual = 7;
                        }else{
                            tipoPersonajeActual = 14;
                        }
                        
                        let primerMovimiento;
                        console.log(arrayCeldasConPersonajes);

                        movimientoXTurno = true;
                        //SI NO HA SIDO INCIALIZADO EN EL TABLERO
                        //if (posicionPersonajeArray != undefined) {
                        if (movActual == true) {

                            //arrayCeldasConPersonajes[posicionPersonajeArray].estado = "USADO";
                            estadoPersonaje = "USADO";


                            for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                                if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                    idCelda = arrayCeldasConPersonajes[i].celda;

                                    break;
                                }
                            }
                            console.log(idCelda);
                            //idCelda = arrayCeldasConPersonajes[posicionPersonajeArray].celda;
                            primerMovimiento = true;
                            //console.log("Entra en mov usado");
                        } else {
                            elem.classList += " usado";
                            primerMovimiento = false;
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                primerMovimientoMagoJ1 = true;
                            } else if (obj.jugadores[1].id == jugadorActual.id) {
                                primerMovimientoMagoJ2 = true;
                            }
                            let objComb = {};
                            objComb.personaje = personajeActualMovimiento;

                            objComb.estado = "NU";
                            if (obj.jugadores[0].id == jugadorActual.id) {
                                idCelda = "c82";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ1 = idCelda;

                                objComb.celda = idCelda;
                            } else {
                                idCelda = "c19";
                                document.getElementById(idCelda).style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                                document.getElementById(idCelda).personajeActivo = personajeActualMovimiento;
                                //celdaAnteriorPersonaje = idCelda;

                                celdaAnteriorPersonajeJ2 = idCelda;

                                objComb.celda = idCelda;
                            }
                            if (posicionPersonajeArray == undefined) {
                                posicionPersonajeArray = 0;
                            }
                            arrayCeldasConPersonajes.push(objComb);
                            console.log("Se a??ade");
                        }
                        validarCasilla();
                        //PERMITE MOVERSE AUNQUE SEA UNA VEZ
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            console.log(idCelda);
                            movimientoPersonaje(personajeActualMovimiento, idCelda, primerMovimiento);
                        }
                    }
                } else {
                    setMensaje("Solo pueden haber 3 personajes en el tablero a la vez!", "../Imagenes/ui/checkbox_01.png");
                    abrirModalMensaje();
                }

            }

        }

    });
});

function movimientoPersonaje(personaje, idCelda, primerMovimiento) {
    //console.log("entra");
    //let clickMovActual = clickMovimiento;

    //console.log(idCelda);
    let celda = document.getElementById(idCelda);
    if (movimientosPersonaje != 0) {
        if (primerMovimiento == false) {
            console.log("Primer mov");

            let movimientos = movimientosPosibles(idCelda);

            for (let i = 0; i < movimientos.length; i++) {
                console.log(movimientos[i]);
                console.log(document.getElementById(movimientos[i]).style.backgroundImage);
                if(document.getElementById(movimientos[i]).style.backgroundImage == 'url("../Imagenes/green_texture2.png")'){
                    document.getElementById(movimientos[i]).style.backgroundImage = 'url(../Imagenes/blue_tex.png)';   
                    document.getElementById(movimientos[i]).style.backgroundColor = 'rgba(0, 144, 234, 0.74)';                 
                }else{
                    document.getElementById(movimientos[i]).style.backgroundColor = 'rgba(0, 144, 234, 0.74)';
                }
                
                
            }
            celdasAnteriores = movimientos;
            //movimientoPersonaje(personajeActualMovimiento, idCelda);

        } else {
            let obj = JSON.parse(sessionStorage.getItem('tablero'));
            /*
            if (obj.jugadores[0].id == jugadorActual.id) {
                idCelda = celdaJ1.id;
            } else if (obj.jugadores[1].id == jugadorActual.id) {
                idCelda = celdaJ2.id;
            }*/

            if (movimientosPersonaje != 0) {
                console.log("Movimiento normal");
                //ELIMINAR ANTERIORES
                //SOLO LAS VERDES
                eliminarFondoCasillasMovimientos();

                let movimientos = movimientosPosibles(idCelda);

                for (let i = 0; i < movimientos.length; i++) {

                    if(document.getElementById(movimientos[i]).style.backgroundImage == 'url("../Imagenes/green_texture2.png")'){                        
                        document.getElementById(movimientos[i]).style.backgroundImage = 'url(../Imagenes/blue_tex.png)';
                        document.getElementById(movimientos[i]).style.backgroundColor = 'rgba(0, 144, 234, 0.74)';
                    }else{
                        document.getElementById(movimientos[i]).style.backgroundColor = 'rgba(0, 144, 234, 0.74)';
                    }
                }
                celdasAnteriores = movimientos;
                //movimientoPersonaje(personajeActualMovimiento, celdaClickeada.id);
            } else {
                eliminarFondoCasillasMovimientos();

            }
        }

    } else {
        movimientosPersonaje = 0;
        tipoPersonajeActual = 0;
    }
    //RESTABLECER LOS CLICKS
    clickMovimiento = 0;
}

//COMPRA PERSONAJES
//1 ARQUERO COSTO: 10
//2 ESPADACHIN COSTO: 15
//3 ASESINO COSTO: 5
//4 BERSEQUER COSTO: 25
//5 ESPIA COSTO: 5
//6 JINETE COSTO: 15
//7 MAGO COSTO: 10
function obtenerPersonajeDeTropas(tipo) {
    let idCastillo = jugadorActual.idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let personaje;
    if (obj.castillos[posicionCastilloActual].tropas != null) {
        let tropas = obj.castillos[posicionCastilloActual].tropas;
        for (let i = 0; i < tropas.length; i++) {

            if (tropas[i].tipo == "Arquero" && (tipo == 1 || tipo == 8)) {
                personaje = tropas[i];
                break;
            }
            //ESPADACHIN 
            if (tropas[i].tipo == "Espadachin" && (tipo == 2 || tipo == 9)) {
                personaje = tropas[i];
                break;
            }
            //BERSEQUER 
            if (tropas[i].tipo == "Berserquer" && (tipo == 4|| tipo == 11)) {
                personaje = tropas[i];
                break;
            }
            //MAGO 
            if (tropas[i].tipo == "Mago" && (tipo == 7|| tipo == 14)) {
                personaje = tropas[i];
                break;
            }
            //ASESINO 
            if (tropas[i].tipo == "Asesino" && (tipo == 3|| tipo == 10)) {
                personaje = tropas[i];
                break;
            }
            //JINETE 
            if (tropas[i].tipo == "Jinete" && (tipo == 6|| tipo == 13)) {
                personaje = tropas[i];
                break;
            }
            //ESPIA 
            if (tropas[i].tipo == "Espia" && (tipo == 5|| tipo == 12)) {
                personaje = tropas[i];
                break;
            }
        }

    }
    return personaje;
}



async function buscarCeldaYPersonaje() {
    //let objCeldaPersonaje = {};
    let idArray;
    for (let i = 1; i <= 10; i++) {
        let sumatoriaCeldas = 1;
        if (i > 1) {
            sumatoriaCeldas = (10 * (i - 1)) + 1;
        }
        //CELDAS DE CADA FILA
        for (let c = sumatoriaCeldas; c <= 10 * i; c++) {
            let celda = "c" + c;
            let celdaPersonaje = document.getElementById(celda);
            //VALIDAR SI HAY UN PERSONAJE ACTIVO
            if (celdaPersonaje != null || celdaPersonaje != '') {
                for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {

                    //COMPARAR OBJETOS CON STRINGIFY Y 3 IGUALES ***
                    if (JSON.stringify(arrayCeldasConPersonajes[i].personaje) === JSON.stringify(celdaPersonaje.personajeActivo)) {
                        if (arrayCeldasConPersonajes[i].personaje.id == jugadorActual.id) {
                            //console.log(personajeActualMovimiento);
                            //console.log(arrayCeldasConPersonajes[i]);
                            //VERIFICAR ESTO
                            if (personajeActualMovimiento.tipo == arrayCeldasConPersonajes[i].personaje.tipo) {
                                //console.log("Entra en id");
                                idArray = i;
                                break;
                            }


                        }
                    }

                }
            }

        }
    }
    return idArray;
}


function eliminarFondoCasillasMovimientos() {
    //MOVIMIENTOS
    for (let i = 1; i <= 10; i++) {
        let sumatoriaCeldas = 1;
        if (i > 1) {
            sumatoriaCeldas = (10 * (i - 1)) + 1;
        }
        //CELDAS DE CADA FILA
        for (let c = sumatoriaCeldas; c <= 10 * i; c++) {
            let celda = "c" + c;
            
            if(document.getElementById(celda).style.backgroundImage == 'url("../Imagenes/blue_tex.png")'){
                document.getElementById(celda).style.backgroundImage = 'url(../Imagenes/green_texture2.png)';
                document.getElementById(celda).style.backgroundColor = '';
            }else{
                document.getElementById(celda).style.backgroundColor = '';
            }

        }
    }
}

//RECORRE TODAS LAS CASILLAS Y DEVUELVE LA CASILLA CON EL PERSONAJE ACTUAL
function buscarCasillaConPersonaje() {
    //MOVIMIENTOS
    for (let i = 1; i <= 10; i++) {
        let sumatoriaCeldas = 1;
        if (i > 1) {
            sumatoriaCeldas = (10 * (i - 1)) + 1;
        }
        //CELDAS DE CADA FILA
        for (let c = sumatoriaCeldas; c <= 10 * i; c++) {
            let celda = "c" + c;
            let celdaElement = document.getElementById(celda);
            if (celdaElement.personajeActivo != null) {
                if (celdaElement.personajeActivo == personajeActualMovimiento) {
                    return celda;
                }
            }
        }
    }
}


//INDICACIONES DE POSIBLES CASILLAS A LAS QUE SE PUEDA MOVER UN PERSONAJE
function movimientosPosibles(celda) {
    let arrayMovimientos = [];
    console.log(celda);

    //console.log(String(celda).charAt(3));
    //console.log(String(celda).charAt(1));
    let conversionCeldaC = String(celda).charAt(2);
    let columnaCelda = Number(conversionCeldaC);
    let conversionCeldaF = String(celda).charAt(1);
    let filaCelda = Number(conversionCeldaF);

    let stringNumeroCelda = conversionCeldaF + conversionCeldaC;
    let numeroCelda = Number(stringNumeroCelda);

    console.log("general columna: " + columnaCelda);
    //****VALIDACIONES SI ES LA PRIMERA FILA****

    if (celda.substring(1) < 10) {
        console.log("No definido");
        //PRIMERA FILA ABAJO
        if (celda.substring(1) < 10) {
            let idCeldaSig = "c" + (1) + filaCelda;

            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(1) + String(filaCelda);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }

        //PRIMERA FILA IZQUIERDA
        if (filaCelda - 1 > 0 && filaCelda - 1 <= 9) {
            let idCeldaSig = "c" + (filaCelda - 1);

            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda - 1);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }

        //PRIMERA FILA DERECHA
        if (filaCelda + 1 > 0 && filaCelda + 1 <= 9) {
            let idCeldaSig = "c" + (filaCelda + 1);

            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda + 1);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }


        //****FIN VALIDACIONES SI ES LA PRIMERA FILA****
    } else {
        if (columnaCelda == 0) {
            //--VALIDACIONES SI ES LA ULTIMA COLUMNA--
            //ARRIBA ULTIMA COLUMNA
            if (columnaCelda == 0) {
                let idCeldaSig = "c" + (filaCelda - 1) + 0;
                let celdaElement = document.getElementById(idCeldaSig);
                let idCelda = String(filaCelda - 1) + String(0);
                //console.log("Arriba: " + idCelda);
                if (idCelda != 91 && idCelda != 10) {
                    //VALIDAR SI HAY UN PERSONAJE
                    if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                        //SE INTRODUCE LA POSIBILIDAD
                        arrayMovimientos.push(idCeldaSig);
                    }

                }
            }
            //ABAJO ULTIMA COLUMNA
            if (columnaCelda == 0) {
                let idCeldaSig = "c" + (filaCelda + 1) + 0;
                let celdaElement = document.getElementById(idCeldaSig);
                let idCelda = String(filaCelda + 1) + String(0);
                if (idCelda != 91 && idCelda != 10) {
                    //VALIDAR SI HAY UN PERSONAJE
                    if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                        //SE INTRODUCE LA POSIBILIDAD
                        arrayMovimientos.push(idCeldaSig);
                    }

                }
            }
            //IZQUIERDA ULTIMA COLUMNA
            if (columnaCelda == 0) {
                let celdaNueva = numeroCelda - 1;
                //console.log("Nueva celda: " + celdaNueva);
                let conversionColumna = String(celdaNueva).charAt(1);
                let columnaCelda = Number(conversionColumna);
                let conversionFila = String(celdaNueva).charAt(0);
                let filaCelda = Number(conversionFila);

                let idCeldaSig = "c" + (filaCelda) + (columnaCelda);

                let celdaElement = document.getElementById(idCeldaSig);
                let idCelda = String(filaCelda) + String(columnaCelda);

                if (idCelda != 91 && idCelda != 10) {
                    //VALIDAR SI HAY UN PERSONAJE
                    if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                        //SE INTRODUCE LA POSIBILIDAD
                        arrayMovimientos.push(idCeldaSig);
                    }

                }
            } else {
                //VALIDAR DERECHA 
                if (columnaCelda + 1 > 0 && columnaCelda + 1 <= 9) {

                    //DERECHA ULTIMA COLUMNA
                    if (columnaCelda == 9) {
                        let idCeldaSig = "c" + (filaCelda + 1) + 0;
                        let celdaElement = document.getElementById(idCeldaSig);
                        let idCelda = String(filaCelda + 1) + String(0);
                        if (idCelda != 91 && idCelda != 10) {
                            //VALIDAR SI HAY UN PERSONAJE
                            if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                                //SE INTRODUCE LA POSIBILIDAD
                                arrayMovimientos.push(idCeldaSig);
                            }

                        }
                    }
                    let idCeldaSig = "c" + (filaCelda) + (columnaCelda + 1);
                    let celdaElement = document.getElementById(idCeldaSig);
                    let idCelda = String(filaCelda) + String(columnaCelda + 1);
                    if (idCelda != 91 && idCelda != 10) {
                        //VALIDAR SI HAY UN PERSONAJE
                        if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                            //SE INTRODUCE LA POSIBILIDAD
                            arrayMovimientos.push(idCeldaSig);
                        }

                    }
                }
            }

            //--FIN VALIDACIONES ULTIMA COLUMNA--

        }

        //VALIDACIONES SI ES LA SEGUNDA FILA (11-20)
        if (numeroCelda >= 10 && numeroCelda <= 20) {
            console.log("entra segunda fila");

            //VALIDAR ARRIBA
            if (columnaCelda >= 1 && columnaCelda <= 9) {
                let idCeldaSig = "c" + (columnaCelda);
                let celdaElement = document.getElementById(idCeldaSig);
                let idCelda = String(columnaCelda);
                if (idCelda != 91 && idCelda != 10) {
                    //VALIDAR SI HAY UN PERSONAJE
                    if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                        //SE INTRODUCE LA POSIBILIDAD
                        arrayMovimientos.push(idCeldaSig);
                    }

                }
            }


        }

        //DERECHA ULTIMA COLUMNA
        if (columnaCelda == 9) {
            let idCeldaSig = "c" + (filaCelda + 1) + 0;
            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda + 1) + String(0);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }


        //---VALIDACIONES NORMALES---

        //VALIDAR DERECHA 

        if (columnaCelda != 0) {
            if (columnaCelda + 1 > 0 && columnaCelda + 1 <= 9) {

                //NORMAL
                let idCeldaSig = "c" + (filaCelda) + (columnaCelda + 1);
                let celdaElement = document.getElementById(idCeldaSig);
                let idCelda = String(filaCelda) + String(columnaCelda + 1);
                if (idCelda != 91 && idCelda != 10) {
                    //VALIDAR SI HAY UN PERSONAJE
                    if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                        //SE INTRODUCE LA POSIBILIDAD
                        arrayMovimientos.push(idCeldaSig);
                    }

                }
            }
        }

        //VALIDAR ARRIBA
        if (filaCelda - 1 >= 1 && filaCelda - 1 <= 9) {
            console.log("arriba normal");
            let idCeldaSig = "c" + (filaCelda - 1) + (columnaCelda);
            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda - 1) + String(columnaCelda);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }


        //VALIDAR IZQUIERDA 
        if (columnaCelda - 1 > 0 && columnaCelda - 1 <= 9) {
            console.log("izq normal");
            let idCeldaSig = "c" + (filaCelda) + (columnaCelda - 1);
            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda) + String(columnaCelda - 1);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }





        //VALIDAR ABAJO
        if (filaCelda + 1 >= 1 && filaCelda + 1 <= 9) {
            console.log("Entra abajo");
            let idCeldaSig = "c" + (filaCelda + 1) + (columnaCelda);
            let celdaElement = document.getElementById(idCeldaSig);
            let idCelda = String(filaCelda + 1) + String(columnaCelda);
            if (idCelda != 91 && idCelda != 10) {
                //VALIDAR SI HAY UN PERSONAJE
                if (celdaElement.personajeActivo === null || celdaElement.personajeActivo === undefined || celdaElement.personajeActivo === '') {
                    //SE INTRODUCE LA POSIBILIDAD
                    console.log("Entra abajo 2");
                    arrayMovimientos.push(idCeldaSig);
                }

            }
        }


    }



    return arrayMovimientos;
}