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
            casillaActual = casillas[7];
            let change;
            cerrarOverlayPowerUp();
            if((casillaActual.data == "MejoraAtaque" || casillaActual.data == "MejoraDefensa") && tropas[i].powerUp != null){
                //abrirModalConfirmChange();
                if(action == "3"){
                    change = true;
                    await obtenerDatosTropaCasilla(change);
                }
                cerrarOverlayConfirmChange();
            }else if(casillaActual.data == "MejoraAtaque" && tropas[i].powerUp == null){
                abrirModalPowerUp();
                switch(action)  {
                    case "1":
                        //llamar al gestor decorador y cambiar los datos
                        tropas[i].ataque.puntos += 2;
                        tropas[i].estadoDecorado = true;
                        console.log(tropas[i]);
                        break;
    
                    case "3":
                        change = false;
                        await obtenerDatosTropaCasilla(change);
                        break;
                
                }
                cerrarOverlayPowerUp();
            }else if (casillaActual.data == "MejoraDefensa" && tropas[i].powerUp == null){
                switch(action)  {
                    case "2": 
                        tropas[i].defensa += 2;
                        tropas[i].estadoDecorado = true;
                        console.log(tropas[i]);
                        break;
    
                    case "3":
                        change = false;
                        await obtenerDatosTropaCasilla(change);
                        break;
                }
                cerrarOverlayDefenseUp();

            }
            else if(casillaActual.data == "TrampaAtaque"){

                document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Ataque.";
                //
                document.getElementById("imganeMensaje").src="../Imagenes/PowerUps/PowDwnGif.gif";
                //
                tropas[i].ataque.puntos -= 2;
                tropas[i].estadoDecorado = true;
                abrirModalMensaje();

            }else if(casillaActual.data == "TrampaDefensa"){
                document.getElementById("mensajeTexto").innerHTML = "Caíste en una trampa. -2 de Defensa.";
                document.getElementById("imganeMensaje").src="../Imagenes/PowerUps/DefDwnGif.gif";
                //llamar al gestor decorador y cambiar los datos
                tropas[i].defensa -= 2;
                tropas[i].estadoDecorado = true;
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
            casillaActual = casillas[7];

            let cambio = false;

            let cambioCasilla = { data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal" };
            let dataObject = {id : tropas[i].id, 
                ataque : tropas[i].ataque, 
                defensa : tropas[i].defensa, 
                estadoDecorado : tropas[i].estadoDecorado,
                powerUp : tropas[i].powerUp,
                oro : tropas[i].cantOro,
                maxOro:  tropas[i].maxOro,
                tipoCasilla : casillaActual.data,
                cambio : change
            };

            let data = await validarCasillaTropa(dataObject);

            if(tropas[i].powerUp == null || data.cambio == true){
                tropas[i].powerUp = data.powerUp;
            }
            tropas[i].cantOro = data.oro;

            if (tropas[i].powerUp != null || tropas[i].estadoDecorado == true || change == true) {
                casillaActual = cambioCasilla;
            }
            obj.casillas = casillas;
            obj.castillos.tropas = tropas;
        }
    };
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
