var btns = document.querySelectorAll(".pw");

btns.forEach(function(elem) {
    elem.addEventListener("click", async function() {
        validarDatosModal(elem.value);
    });
});



const validarDatosModal = async (action) => {
    
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    let casillas = obj.casillas;
    let tropas = [];
    let casillaActual;
    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            tropas = castillos[i].tropas;
        }
    }


    for (let i = 0; i < tropas.length; i++) {
        if (tropas[i].estado.toLowerCase() == "activo") {
            let index = casillas.findIndex((obj => obj.id == tropas[i].idCasilla));
            casillaActual = casillas[85];
            let change;
            let activar = 0;
            cerrarOverlayPowerUp();
            if((casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") && tropas[i].powerUp != null){
                //abrirModalConfirmChange();
                if(action == "3"){
                    change = true;
                    await obtenerDatosTropaCasilla(change);
                }
                cerrarOverlayConfirmChange();
            }else if(casillaActual.data == "MejoraAtaque" && tropas[i].powerUp == null){
                //abrirModalPowerUp();
                switch(action)  {
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
            }else if (casillaActual.data == "MejoraDefensa" && tropas[i].powerUp == null){
                switch(action)  {
                    case "2": 
                        activar = 2;
                        activacionPW_A_D(activar);
                        console.log(tropas[i]);
                        break;
    
                    case "3":
                        change = true;
                        await obtenerDatosTropaCasilla(change);
                        break;
                }
                cerrarOverlayDefenseUp();

            }
            else if(casillaActual.data == "TrampaAtaque"){
                document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Ataque.";
                document.getElementById("imganeMensaje").src="../Imagenes/PowerUps/PowDwnGif.gif";
                change = false;
                obtenerDatosTropaCasilla(change);
                abrirModalMensaje();

            }else if(casillaActual.data == "TrampaDefensa"){
                document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Defensa.";
                document.getElementById("imganeMensaje").src="../Imagenes/PowerUps/DefDwnGif.gif";
                change = false;
                obtenerDatosTropaCasilla(change);
                abrirModalMensaje();
            }
            
        }
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

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    let casillas = obj.casillas;
    let tropas = [];
    let casillaActual;


    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            tropas = castillos[i].tropas;
        }
    }



    for (let i = 0; i < tropas.length; i++) {
        if (tropas[i].estado.toLowerCase() == "activo") {
            let index = casillas.findIndex((obj => obj.id == tropas[i].idCasilla));
            casillaActual = casillas[6];

            let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };
            let dataObject = {id : tropas[i].id, 
                ataque : tropas[i].ataque, 
                defensa : tropas[i].defensa, 
                estadoDecorado : tropas[i].estadoDecorado,
                powerUp : tropas[i].powerUp,
                oro : tropas[i].cantOro,
                maxOro:  tropas[i].maxOro,
                tipoCasilla : casillaActual.data,
                cambio : change,
                activar : 0
            };

            let data = await validarCasillaTropa(dataObject);

            if((tropas[i].powerUp == null || data.cambio == true) && (casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") ){
                tropas[i].powerUp = data.powerUp;
            }

            if(casillaActual.data == "GemaVerde" || casillaActual.data == "GemaBlanca" || casillaActual.data == "GemaAzul"){
            tropas[i].cantOro = data.oro;
            }

            if(casillaActual.data == "TrampaAtaque"){
                tropas[i].ataque.puntos = data.ataque.puntos;
                tropas[i].estadoDecorado = data.estadoDecorado;

            } else if (casillaActual.data == "TrampaDefensa"){
                tropas[i].defensa = data.defensa;
                tropas[i].estadoDecorado = data.estadoDecorado;
            }

            if (tropas[i].powerUp != null || tropas[i].estadoDecorado == true || change == true) {
                casillaActual = cambioCasilla;
                casillas[6] = casillaActual;
            }
            obj.casillas = casillas;
            obj.castillos.tropas = tropas;
        }
    }
    sessionStorage.setItem('tablero', JSON.stringify(obj));
}


async function activacionPW_A_D(activar) {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    let casillas = obj.casillas;
    let tropas = [];
    let casillaActual;


    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            tropas = castillos[i].tropas;
        }
    }



    for (let i = 0; i < tropas.length; i++) {
        if (tropas[i].estado.toLowerCase() == "activo") {
            let index = casillas.findIndex((obj => obj.id == tropas[i].idCasilla));
            casillaActual = casillas[85];

            let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };
            
            
            let dataObject = {id : tropas[i].id, 
                ataque : tropas[i].ataque, 
                defensa : tropas[i].defensa, 
                estadoDecorado : tropas[i].estadoDecorado,
                powerUp : casillaActual.pU,
                oro : tropas[i].cantOro,
                maxOro:  tropas[i].maxOro,
                tipoCasilla : casillaActual.data,
                cambio : false,
                activar : activar
            };

            let data = await activarPowerUpBackend(dataObject);


            if (activar == 1){
                tropas[i].ataque.puntos = data.ataque.puntos;
                tropas[i].estadoDecorado = data.estadoDecorado;
            } else {
                tropas[i].defensa = data.defensa;
                tropas[i].estadoDecorado = data.estadoDecorado;
            }
            casillaActual = cambioCasilla;
            casillas[6] = casillaActual;

            obj.casillas = casillas;
            obj.castillos.tropas = tropas;
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