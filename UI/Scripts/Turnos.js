let tableroJSON = JSON.parse(sessionStorage.getItem('tablero'));
let cantidadJugadores = tableroJSON.jugadores.length;
let jugadorActual;


$(document).ready(function() {

    turnos();
    console.log(tableroJSON);
    partida();
    //juego();
});

function turnos() {
    tableroJSON.jugadores[1].estado = 2;
    if (cantidadJugadores == 3) {
        tableroJSON.jugadores[2].estado = 2;
    } else if (cantidadJugadores == 4) {
        tableroJSON.jugadores[2].estado = 2;
        tableroJSON.jugadores[3].estado = 2;
    }
}

let partida = async() => {
    //Esta variable determina si la partida se acabó
    let estadoPartida = false;
    //Jugador ganador de la partida
    let ganadorPartida;
    let jugadores = tableroJSON.jugadores;
    let aliasJugadores = [];
    //obtener alias
    for (let i = 0; i < jugadores.length; i++) {
        aliasJugadores.push(jugadores[i].alias);
    }


    console.log(JSON.stringify(jugadores));
    //jugadores = JSON.parse(jugadores);
    let posicionJugadorActual = 0;
    //SI NO HAY NINGÚN JUGADOR, SE CONTINUA EL CICLO
    while (estadoPartida == false) {
        console.log("Turno diferente" + posicionJugadorActual);
        //console.log(jugadores.length - 1);

        jugadores[posicionJugadorActual].estado = 1;
        //
        //ARREGLAR BIEN EL PROXY PARA CAMBIAR EL TURNO DEL JUGADOR
        //
        jugadores = await verificar_jugadores(aliasJugadores.join(), posicionJugadorActual);
        //jugadores = await verificar_jugadores(JSON.parse(jugadores));
        console.log(aliasJugadores.join());
        if (posicionJugadorActual == jugadores.length + 1) {
            posicionJugadorActual = 0;
        }
        for (let i = 0; i < jugadores.length; i++) {
            if (jugadores[i].turno == true) {
                jugadorActual = jugadores[i];

            }
        }
        //console.log(jugadorActual);
        jugadorActivo.textContent = "Turno de: " + jugadorActual.alias;


        let tiempo = await timer(document.getElementById("timer"));
        if (posicionJugadorActual == jugadores.length - 1) {
            posicionJugadorActual = 0;
        } else {
            posicionJugadorActual++;
        }

    }
}

//PROXY REQUEST
const verificar_jugadores = async(jugadores, jugador) => {
    let api = 'http://localhost:8080/proxy/turnos/' + jugador;
    let jugadoresEvaluados;

    await axios({
        method: 'POST',
        url: api,
        responseType: 'json',
        data: {
            jugadores: jugadores
        }

        //body: jugadores
    })

    .then((response) => {
            jugadoresEvaluados = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return jugadoresEvaluados;
};


const waitFor = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), time);
    });
};

//EL TIEMPO DE CADA TURNO. EL VALOR DE LA VARIABLE i ES LA CANTIDAD DE SEGUNDOS DEL TIMER
async function timer(display) {
    for (let i = 45; i >= 0; i--) {
        if (i < 10) {
            display.textContent = "00" + ":0" + i;
        } else {
            display.textContent = "00" + ":" + i;
        }

        await waitFor(1000);
    }
};

//TIEMPO DE LA PARTIDA
async function startTimer(duration, display) {
    return new Promise((resolve, reject) => {
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
        return true;
    });

}




/*
window.onload = function() {
    startTimer(45, document.getElementById("timer"));
};*/