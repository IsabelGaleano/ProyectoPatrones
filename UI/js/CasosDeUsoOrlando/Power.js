//let elementsArray = document.querySelectorAll("#btn-PowerUp");
//cuando llame este metodo dentro de otro le descomenta el llamado al metodo
//const obtenerDatosTropaCasilla = async () => {
async function obtenerDatosTropaCasilla() {
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
            casillaActual = casillas[42];

            //validacion PowerUps
            //if(){
                
            //}

            //validacionGema
            //if(){

            //}
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
                cambio : cambio
            };

            let data = await validarCasillaTropa(dataObject);

            if(tropas[i].powerUp == null){
                tropas[i].powerUp = data.powerUp;
            }
            tropas[i].cantOro = data.oro;

            if (tropas[i].powerUp != null || tropas[i].estadoDecorado == true) {
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

const cambiarPowerUp = async (tropas, tipoCasilla, answer) => {
    await axios({
        method: 'put',
        url: `http://localhost:8080/api/personajes/activarPowerUp/${tropas}/${tipoCasilla}/${answer}`,
        responseType: 'json',
        data: {
            tropas: tropas
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
        console.log(console.error())
    });


}