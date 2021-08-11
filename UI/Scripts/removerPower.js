/*$(document).ready(function() {
    removerPowers();
});*/


const crearPersonajeTemp = async(opcion) => {
    let personajes;
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/personajes/${opcion}`,
        responseType: 'json'
    }).then((response) => {
        personajes = response.data;
    }).catch((response) => {
        console.error;
        return null;

    });
    //console.log(personajes);
    return personajes;

}


const obtenerPower = () => {
    let tablero = JSON.parse(sessionStorage.getItem('tablero'));
    let casillas = [];
    let casillasPower = [];
    casillas = tablero.casillas;
    for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].tipo == "CasillaPowerUp") {
            casillasPower.push(casillas[i]);
        }

    }

    return casillasPower;

}
const obtenerJugadoresPrueba = () => {
    let tablero = JSON.parse(sessionStorage.getItem('tablero'));
    let jugadores = [];
    jugadores = tablero.jugadores;

    return jugadores;

}



const removerPowers = async() => {
    let casillas = [];
    let personajesNuevos = [];
    let personajes = [];
    let tipoPower;
    let jugadores = [];
    personajes = await crearPersonajeTemp(1);

    casillas = obtenerPower();
    for (let i = 0; i < personajes.length; i++) {
        tipoPower = casillas[i].pU;
        personajes[i].powerUp = tipoPower;
    }

    let objVisitantePersonajes = personajes.map(function(element) {
        return {
            id: element.id,
            defensa: element.defensa,
            ataque: element.ataque.puntos,
            tipoPowerUp: element.powerUp.tipo,
            estadoDecorado: element.estadoDecorado
        }
    });


    personajesNuevos = await visitarPersonajes(objVisitantePersonajes);
    jugadores = obtenerJugadoresPrueba();
    await visitarJugadores(jugadores);
    //console.log(personajesNuevos);
}


const visitarPersonajes = async(personajes) => {
    let personajesResponse;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/visitante`,
        responseType: 'json',
        data: personajes
    }).then((response) => {
        personajesResponse = response.data
    }).catch((response) => {
        console.log(response);
        return null;

    });

    //console.log(personajesResponse);

    return personajesResponse;

}

//PROXY
const visitarJugadores = async(jugadores) => {
    let personajesResponse;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/jugadores/pasarPersonajes`,
        responseType: 'json',
        data: jugadores
    }).then((response) => {
        personajesResponse = response.data
    }).catch((response) => {
        console.log(response);
        return null;

    });

    //console.log(personajesResponse);

    return personajesResponse;

}