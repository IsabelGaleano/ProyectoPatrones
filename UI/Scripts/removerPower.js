$(document).ready(function() {
    removerPowers();
});


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


const removerPowers = async() => {
    let personajes = [];
    let casillas = [];
    let personajesNuevos = [];
    let personaje;
    for (let i = 1; i <= 3; i++) {
        personaje = await crearPersonajeTemp(i);
        personajes.push(personaje[0]);
    }

    casillas = obtenerPower();
    for (let i = 0; i < personajes.length; i++) {

        personajes[i].powerUp = casillas[i].pU;
    }

    personajesNuevos = await visitarPersonajes(personajes);
    console.log(personajesNuevos);
}


const visitarPersonajes = async(personajes) => {
    let personajesRequest;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/visitante`,
        responseType: 'json',
        data: {
            personajes
        }
    }).then((response) => {
        personajesRequest = response.data
    }).catch((response) => {
        console.error(response);
        return null;

    });

    console.log(personajesRequest);

    return personajesRequest;

}
