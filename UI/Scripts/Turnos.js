let tablero = document.getElementById("tablero");
let mas2Jugadores = false;
let imagenDado = document.getElementById("imagen-dado");
let botonDado = document.getElementById("boton-dado");
let btn_ver_personajes = document.getElementById("btn-ver-personajes")
let celdaActual;
let turnoJugador = document.getElementById("turno-jugador");

let tablero = JSON.parse(sessionStorage.getItem('tablero'));


$(document).ready(function() {

    partida();
    //juego();
});

let partida = async() => {
    //Esta variable determina si la partida se acabó
    let estadoPartida = false;
    //Jugador ganador de la partida
    let ganadorPartida;

    //let jugadores = localStorage.getObj("jugadores");
    let jugadores = await obtener_jugadores();
    console.log(jugadores);
    let posicionJugadorActual = 1;
    let jugadorActual;
    //SI NO HAY NINGÚN JUGADOR, SE CONTINUA EL CICLO
    while (estadoPartida == false) {

        if (posicionJugadorActual == jugadores.length + 1) {
            posicionJugadorActual = 1;
        }
        for (let i = 1; i <= jugadores.length; i++) {
            let verif;
            console.log(jugadores[i]);
            if (i == posicionJugadorActual) {
                verif = await verificar_jugador(jugadores[i].alias, 1);
                console.log(verif);
            }
            //PROXY
            if (verif == true) {
                jugadorActual = jugadores[i];
            }
        }
        console.log(jugadorActual);
        turnoJugador.textContent = "Turno de: " + jugadorActual.alias;
        startTimer(45, document.getElementById("timer"));

        posicionJugadorActual++;
    }
}

//PROXY REQUEST
const verificar_jugador = async(nombre, turno) => {
    let jugador;
    let direccion = 'http://localhost:8080/api/jugadores/jugador-proxy/' + turno + '/' + nombre;
    await axios({
            method: 'get',
            url: direccion,
            responseType: 'json',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        .then((response) => {
            jugador = response.data;
            console.log(jugador);
        })
        .catch((error) => {
            console.log(error);
        });
    return jugador;
};

const obtener_jugadores = async() => {
    let jugadores;
    let direccion = 'http://localhost:8080/api/jugadores';
    await axios({
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            url: direccion,
            responseType: 'json'

        })
        .then((response) => {
            jugadores = response.data;

        })
        .catch((error) => {
            console.log(error);
        });
    return jugadores;
};


//TIEMPO DE LA PARTIDA
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function() {
    //startTimer(45, document.getElementById("timer"));
};