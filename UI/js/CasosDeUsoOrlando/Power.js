var btnAct = document.getElementById("pU-P").value;


var btns = document.querySelectorAll(".pw");

btns.forEach(function (elem) {
    elem.addEventListener("click", async function () {
        validarDatosModal(elem.value);
    });
});

const obtenerTropa = async () => {
    var tropa; 
    for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
        switch (btnAct) {
            case "1":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "arquero") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "2":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "espadachin") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "3":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "bersequer") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "4":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "mago") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "5":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "asesino") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "6":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "jinete") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;

            case "7":
                if (arrayCeldasConPersonajes[i].personaje.tipo.toLowerCase() == "espia") {
                    tropa = arrayCeldasConPersonajes[i].personaje;
                }
                break;
        }
    }
}

const validarCasilla = async (action) => {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    let lastDigits = arrayCeldasConPersonajes[0].celda.id;


    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;
    let casillaActual = casillas[lastDigits.slice(-2)];
    let tropa = obtenerTropa(action);
    
    if((casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") && tropa.powerUp != null) {
        abrirModalConfirmChange();
    }else if(casillaActual.data == "MejoraAtaque" && tropa.powerUp == null){
        abrirModalPowerUp();
    }else if(casillaActual.data == "MejoraDefensa" && tropa.powerUp == null){
        abrirModalDefenseUp();
    }
        
}

const validarDatosModal = async (action) => {
    

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    let lastDigits = arrayCeldasConPersonajes[0].celda.id;


    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;
    let casillaActual = casillas[lastDigits.slice(-2)];
    let tropa;
    
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
                console.log(tropa);
                break;
    
            case "3":
                change = true;
                await obtenerDatosTropaCasilla(change);
                break;
        }
        cerrarOverlayDefenseUp();
    
    }
    else if (casillaActual.data == "TrampaAtaque") {
        document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Ataque.";
        document.getElementById("imganeMensaje").src = "../Imagenes/PowerUps/PowDwnGif.gif";
        change = false;
        obtenerDatosTropaCasilla(change);
        abrirModalMensaje();
    
    } else if (casillaActual.data == "TrampaDefensa") {
        document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Defensa.";
        document.getElementById("imganeMensaje").src = "../Imagenes/PowerUps/DefDwnGif.gif";
        change = false;
        obtenerDatosTropaCasilla(change);
        abrirModalMensaje();
    }
}






async function obtenerDatosTropaCasilla(change) {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    let lastDigits = arrayCeldasConPersonajes[0].celda.id;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;
    let tropa = arrayCeldasConPersonajes[0].personaje;
    let casillaActual = casillas[lastDigits.slice(-2)];

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
        tropa.cantOro = data.oro;
    }

    if (casillaActual.data == "TrampaAtaque") {
        tropa.ataque.puntos = data.ataque.puntos;
        tropa.estadoDecorado = data.estadoDecorado;

    } else if (casillaActual.data == "TrampaDefensa") {
        tropa.defensa = data.defensa;
        tropa.estadoDecorado = data.estadoDecorado;
    }

    if (tropa.powerUp != null || tropa.estadoDecorado == true || change == true) {
        casillaActual = cambioCasilla;
        casillas[6] = casillaActual;
    }
    obj.casillas = casillas;
    obj.castillos.tropas = tropas;


    sessionStorage.setItem('tablero', JSON.stringify(obj));
}


async function activacionPW_A_D(activar) {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    let lastDigits = arrayCeldasConPersonajes[0].celda.id;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let casillas = obj.casillas;
    let tropa = arrayCeldasConPersonajes[0].personaje;
    let casillaActual = casillas[lastDigits.slice(-2)];



    let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };


    let dataObject = {
        id: tropa.id,
        ataque: tropa.ataque,
        defensa: tropa.defensa,
        estadoDecorado: tropa.estadoDecorado,
        powerUp: casillaActual.pU,
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
    } else {
        tropa.defensa = data.defensa;
        tropa.estadoDecorado = data.estadoDecorado;
    }
    casillaActual = cambioCasilla;
    casillas[6] = casillaActual;

    obj.casillas = casillas;
    obj.castillos.tropas = tropas;

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