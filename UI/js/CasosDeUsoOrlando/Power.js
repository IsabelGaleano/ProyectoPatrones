let btnTropaActual;
var btnAct = document.querySelectorAll(".btnAct");
btnAct.forEach(function (elem) {
    elem.addEventListener("click", async function () {
        obtenerTropa(elem.value);
        btnTropaActual = elem.value;
    });
});


var btns = document.querySelectorAll(".pw");
var bt;
btns.forEach(function (elem) {
    elem.addEventListener("click", async function () {
        validarDatosModal(elem.value);

    });
});

const obtenerTropa = (btn) => {

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;


    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastle = jugador.idCastillo;
    let castillos = obj.castillos;
    let tropas = [];
    let tropasActivas = [];

    for (let i = 0; i < castillos.length; i++) {
        if (idCastle == castillos[i].id) {
            tropas = castillos[i].tropas;
        }
    }

    for (let i = 0; i < tropas.length; i++) {
        if (tropas[i].estado.toLowerCase() == "activo") {
            tropasActivas.push(tropas[i]);
        }
    }

    let casilla;

    var tropaMovimiento;
    for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
        switch (btn) {
            case "1":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "arquero") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "2":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "espadachin") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "3":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "berserquer") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "4":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "mago") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "5":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "asesino") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "6":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "jinete") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

            case "7":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "espia") {
                    if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                        casilla = arrayCeldasConPersonajes[i].celda;
                        tropaMovimiento = tropasActivas.find(element => element.tipo == arrayCeldasConPersonajes[i].personaje.tipo);
                        tropaMovimiento.idCasilla = parseInt(casilla.slice(-2));
                        return tropaMovimiento;
                    }
                }
                break;

        }
        if (tropaMovimiento != null) {
            return tropaMovimiento;
        }
    }
}

const validarCasilla = async () => {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;


    let tropaMov = obtenerTropa(btnTropaActual);


    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;

    let casillaActual = casillas[tropaMov.idCasilla];

    if ((casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") && tropaMov.powerUp != null) {
        abrirModalConfirmChange();
    } else if (casillaActual.data == "MejoraAtaque" && tropaMov.powerUp == null) {
        abrirModalPowerUp();
    } else if (casillaActual.data == "MejoraDefensa" && tropaMov.powerUp == null) {
        abrirModalDefenseUp();
    } else if(casillaActual.data == "GemaVerde" || casillaActual.data == "GemaBlanca" || casillaActual.data == "GemaAzul"
        || casillaActual.data == "TrampaAtaque" || casillaActual.data == "TrampaDefensa"){
        let change = false;
        await obtenerDatosTropaCasilla(change);
    }

}

const validarDatosModal = async (action) => {


    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;


    let tropa = obtenerTropa(btnTropaActual);

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;
    let casillaActual = casillas[tropa.idCasilla];

    let change;
    let activar = 0;
    if ((casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") && tropa.powerUp != null) {

        if (action == "3") {
            change = true;
            await obtenerDatosTropaCasilla(change);
        }
        cerrarOverlayConfirmChange();
    } else if (casillaActual.data == "MejoraAtaque" && tropa.powerUp == null) {

        switch (action) {
            case "1":
                activar = 1;
                activacionPW_A_D(activar);
                break;

            case "3":
                change = true;
                await obtenerDatosTropaCasilla(change);
                break;

        }
        cerrarOverlayPowerUp();
    } else if (casillaActual.data == "MejoraDefensa" && tropa.powerUp == null) {
        switch (action) {
            case "2":
                activar = 2;
                activacionPW_A_D(activar);
                break;

            case "3":
                change = true;
                await obtenerDatosTropaCasilla(change);
                break;
        }
        cerrarOverlayDefenseUp();

    }
    
}






async function obtenerDatosTropaCasilla(change) {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastle = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    let castilloActual;
    let casillas = obj.casillas;
    let tropa = obtenerTropa(btnTropaActual);
    let casillaActual = casillas[tropa.idCasilla];

    let numCastle;
    for (let i = 0; i < castillos.length; i++){
        if(idCastle == castillos[i].id){
            castilloActual = castillos[i];
            numCastle = i;
        }
    }

    let indexTropa;
    for (let i = 0; i < obj.castillos[numCastle].tropas.length; i++){
        if (obj.castillos[numCastle].tropas[i].tipo == tropa.tipo){
            indexTropa = i;
        }
    }

    let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };
    let dataObject = {
        id: tropa.id,
        ataque: tropa.ataque,
        defensa: tropa.defensa,
        estadoDecorado: tropa.estadoDecorado,
        powerUp: tropa.powerUp,
        oro: tropa.cantOro,
        maxOro: tropa.maxOro,
        tipoCasilla: casillaActual.data,
        cambio: change,
        activar: 0
    };

    let data = await validarCasillaTropa(dataObject);

    if ((tropa.powerUp == null || data.cambio == true) && (casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa")) {
        tropa.powerUp = data.powerUp;
    }

    if (casillaActual.data == "GemaVerde" || casillaActual.data == "GemaBlanca" || casillaActual.data == "GemaAzul") {
        if(casillaActual.data == "GemaAzul"){
            abrirModalGemaAzul();

        }else if(casillaActual.data == "GemaBlanca") {
            abrirModalGemaBlanca();

        }else if (casillaActual.data == "GemaVerde") {
            abrirModalGemaVerde();
        }
        casillaActual = cambioCasilla;
        casillas[tropa.idCasilla] = casillaActual;
        castilloActual.oro += data.oro;
    }

    if (casillaActual.data == "TrampaAtaque") {
        document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Ataque.";
        document.getElementById("imganeMensaje").src = "../Imagenes/PowerUps/PowDwnGif.gif";
        tropa.ataque.puntos = data.ataque.puntos;
        tropa.estadoDecorado = data.estadoDecorado;
        abrirModalMensaje();
    } else if (casillaActual.data == "TrampaDefensa") {
        document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Defensa.";
        document.getElementById("imganeMensaje").src = "../Imagenes/PowerUps/DefDwnGif.gif";
        tropa.defensa = data.defensa;
        tropa.estadoDecorado = data.estadoDecorado;
        abrirModalMensaje();
    }

    if (tropa.powerUp != null || tropa.estadoDecorado == true || change == true) {
        casillaActual = cambioCasilla;
        casillas[tropa.idCasilla] = casillaActual;
    }
    obj.casillas = casillas;
    obj.castillos[numCastle] = castilloActual;
    obj.castillos[numCastle].tropas[indexTropa] = tropa;

    for (let i = 0; i < arrayCeldasConPersonajes.length; i++){
        if (arrayCeldasConPersonajes[i].personaje.tipo == tropa.tipo) {
            if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                arrayCeldasConPersonajes[i].personaje = tropa;
            }
        }
    }

    sessionStorage.setItem('tablero', JSON.stringify(obj));
    actualizarInfoCastilloJugador();
}


async function activacionPW_A_D(activar) {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastle = jugadorActual.idCastillo;
    let casillas = obj.casillas;
    let castillos = obj.castillos;
    let tropa = obtenerTropa(btnTropaActual);
    let casillaActual = casillas[tropa.idCasilla];

    let numCastle;
    for (let i = 0; i < castillos.length; i++){
        if(idCastle == castillos[i].id){
            castilloActual = castillos[i];
            numCastle = i;
        }
    }

    let indexTropa;
    for (let i = 0; i < obj.castillos[numCastle].tropas.length; i++){
        if (obj.castillos[numCastle].tropas[i].tipo == tropa.tipo){
            indexTropa = i;
        }
    }

    let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };


    let dataObject = {
        id: tropa.id,
        ataque: tropa.ataque,
        defensa: tropa.defensa,
        estadoDecorado: tropa.estadoDecorado,
        powerUp: tropa.powerUp,
        oro: tropa.cantOro,
        maxOro: tropa.maxOro,
        tipoCasilla: casillaActual.data,
        cambio: false,
        activar: activar
    };

    let data = await activarPowerUpBackend(dataObject);


    if (activar == 1) {
        tropa.ataque.puntos = data.ataque.puntos;
        tropa.estadoDecorado = data.estadoDecorado;
        //Funcion que genera la imagen
    } else {
        tropa.defensa = data.defensa;
        tropa.estadoDecorado = data.estadoDecorado;
        //Funcion que genera la imagen
    }
    casillaActual = cambioCasilla;
    casillas[tropa.idCasilla] = casillaActual;

    obj.casillas = casillas;
    obj.castillos[numCastle].tropas[indexTropa] = tropa;

    for (let i = 0; i < arrayCeldasConPersonajes.length; i++){
        if (arrayCeldasConPersonajes[i].personaje.tipo == tropa.tipo) {
            if (arrayCeldasConPersonajes[i].personaje.id == jugador.id) {
                arrayCeldasConPersonajes[i].personaje = tropa;
            }
        }
    }

    sessionStorage.setItem('tablero', JSON.stringify(obj));
}


const validarCasillaTropa = async (objeto) => {
    let objectResponse;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/cadena`,
        responseType: 'json',
        data: objeto
    }).then((response) => {
        objectResponse = response.data
    }).catch((response) => {
        console.log(console.error())
    });

    return objectResponse;
}


const activarPowerUpBackend = async (objeto) => {
    let objectResponse;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/decorador`,
        responseType: 'json',
        data: objeto
    }).then((response) => {
        objectResponse = response.data
    }).catch((response) => {
        console.log(console.error())
    });

    return objectResponse;
}