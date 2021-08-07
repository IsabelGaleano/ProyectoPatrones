$(document).ready(function () {
    removerPowers();
});


const crearPersonajeTemp = async (opcion) => {
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
    console.log(personajes);
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


const removerPowers = async () => {
    let casillas = [];
    let personajesNuevos = [];
    let personajes = [];
    let tipoPower;
    /*for (let i = 1; i <= 3; i++) {
        personaje = await crearPersonajeTemp(i);
        personajes.push(personaje[0]);
    }*/

    personajes = await crearPersonajeTemp(1);

    casillas = obtenerPower();
    for (let i = 0; i < personajes.length; i++) {
        tipoPower = casillas[i].pU;
        personajes[i].powerUp = tipoPower;
    }

    let objVisitantePersonajes = personajes.map(function (element) {
        return {
            id: element.id,
            defensa: element.defensa,
            ataque: element.ataque.puntos,
            tipoPowerUp: element.powerUp.tipo
        }
    });


    personajesNuevos = await visitarPersonajes(objVisitantePersonajes);
    console.log(personajesNuevos);
}


const visitarPersonajes = async (personajes) => {
    let personajeResponse;
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

    //console.log(personajesRequest);

    return personajeResponse;

}

const visitarPersonaje = async (arquero) => {
    let personajeResponse;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/visitante/visitarPersonaje`,
        responseType: 'json',
        Data: {
            arquero: arquero
        }
    }).then((response) => {
        personajesResponse = response.data
    }).catch((response) => {
        console.log(response);
        return null;

    });


    return personajeResponse;

}

