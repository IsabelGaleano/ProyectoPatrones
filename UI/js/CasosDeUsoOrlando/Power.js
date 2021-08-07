function obtenerDataTC(){
    obtenerDatosTropaCasilla();
}

const obtenerDatosTropaCasilla = async () => {
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
    let tropasActivas = [];
    let casillaActual;
    

    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            tropas = castillos[i].tropas;
        }
    }

    for (let i = 0; i < tropas.length; i++) {
        if (tropas[i].estado == "Activo") {
            tropasActivas = [...tropasActivas, ...tropas[i]];
        }
    }

    for (let i = 0; i < tropasActivas.length; i++) {
        let index = casillas.findIndex((obj => obj.idCasilla == tropasActivas[i].idCasilla));

        /*
        for (let j = 0; j > casillas.length; j++) {
            if (tropasActivas[i].idCasilla == casillas[j].id) {
                casillaActual = casillas[j];
            }
        }
        */

        let cambioCasilla = {data: "CasillaNormal", id: casillaActual.id, tipo: "CasillaNormal"};

        await validarCasillaTropa(tropasActivas[i], casillaActual.data);
        if(tropasActivas[i].powerUp != null || tropasActivas[i].estadoDecorado == true){
            casillaActual = cambioCasilla;
        }
        obj.casilla
    }
}


const validarCasillaTropa = async (tropas, tipoCasilla) => {
    await axios({
        method: 'put',
        url: `http://localhost:8080/api/personajes/validacionCasilla/${tropas}/${tipoCasilla}`,
        responseType: 'json',
        data: {
            tropas : tropas
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
        console.log(console.error())
    });


}