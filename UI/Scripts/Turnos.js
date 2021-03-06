let tableroJSON = JSON.parse(sessionStorage.getItem('tablero'));
let botonDado = document.getElementById("boton-dado");
let cuadroMovimientos = document.getElementById("Movimientos");
let cantidadJugadores = tableroJSON.jugadores.length;
let jugadorActual;
let castilloActual;
let dadoTirado = false;
let tropaCompradaXTurno = false;
let numeroDadoSacado;
let posicionCastilloActual;
let turnoCancelado = false;
let okAtaque= document.getElementById("btn-Ataque-OK");

let movimientosRestantesPersonaje;
const diceSound = new Audio('../Sounds/diceRoll.wav');

$(document).ready(function() {

    turnos();
    //console.log(tableroJSON);
    partida();
    //juego();
});


botonDado.addEventListener('click', function() {
    if (dadoTirado == false) {
        dado();
        dadoTirado = true;
    }

});
//Terminar turno después de ataque
document.getElementById("btn-Ataque-OK").addEventListener('click', function() {
    turnoCancelado = true;
});


//BOTON DE TERMINAR TURNO
document.getElementById("endTurn").addEventListener('click', function() {
    turnoCancelado = true;
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dado() {
    imagenDado.style.backgroundImage = 'url(../Imagenes/CarasDado/diceRollGif.gif)';
    diceSound.play();
    await sleep(2000);
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let urlDado;

    switch (randomNumber) {
        case 1:
            urlDado = 'url(../Imagenes/CarasDado/Cara1.png)';
            numeroDadoSacado = 1;
            break;
        case 2:
            urlDado = 'url(../Imagenes/CarasDado/Cara2.png)';
            numeroDadoSacado = 2;
            break;
        case 3:
            urlDado = 'url(../Imagenes/CarasDado/Cara3.png)';
            numeroDadoSacado = 3;
            break;
        case 4:
            urlDado = 'url(../Imagenes/CarasDado/Cara4.png)';
            numeroDadoSacado = 4;
            break;
        case 5:
            urlDado = 'url(../Imagenes/CarasDado/Cara5.png)';
            numeroDadoSacado = 5;
            break;
        case 6:
            urlDado = 'url(../Imagenes/CarasDado/Cara6.png)';
            numeroDadoSacado = 6;
            break;
    }
    imagenDado.style.backgroundImage = urlDado;
    cuadroMovimientos.textContent = numeroDadoSacado;

    //imagenDado.className = "dado" + numeroDadoSacado;
}

function turnos() {
    tableroJSON.jugadores[1].estado = 2;
    if (cantidadJugadores == 3) {
        tableroJSON.jugadores[2].estado = 2;
    } else if (cantidadJugadores == 4) {
        tableroJSON.jugadores[2].estado = 2;
        tableroJSON.jugadores[3].estado = 2;
    }
}

//FUNCION PRINCIPAL DEL JUEGO
//MANEJA LOS TURNOS, COMPRAS DE PERSONAJES, ETC
//FLUJO PRINCIPAL DE LA PARTIDA CON LOS TURNOS DE LOS JUGADORES INGRESADOS
let partida = async() => {
    //Esta variable determina si la partida se acabó
    let estadoPartida = false;
    //Jugador ganador de la partida
    let ganadorPartida;
    let jugadores = tableroJSON.jugadores;
    let partidaIniciada = false;

    let posicionJugadorActual = 0;

    //SI NO HAY NINGÚN JUGADOR, SE CONTINUA EL CICLO
    while (estadoPartida == false) {
        //console.log("Turno diferente" + posicionJugadorActual);

        if (posicionJugadorActual == jugadores.length + 1) {
            posicionJugadorActual = 0;
        }
        //ESTABLECE EL ESTADO
        for (let i = 0; i < jugadores.length; i++) {
            if (i != posicionJugadorActual) {
                jugadores[i].estado = 1;
            }
        }
        jugadores[posicionJugadorActual].estado = 2;

        jugadores = await visitarJugadores(jugadores);
        //console.log(jugadores);

        //JUGADOR ACTUAL
        for (let i = 0; i < jugadores.length; i++) {
            if (jugadores[i].turno == true) {
                jugadorActual = jugadores[i];

            }
        }

        //TURNOS OVERLAY
        await cambioTurno(jugadorActual.alias, partidaIniciada);

        //console.log(jugadorActual);
        jugadorActivo.textContent = jugadorActual.alias;
        let tableroActual = JSON.parse(sessionStorage.getItem('tablero'));
        tableroActual.jugadores = jugadores;

        //ESTABLECER LA POSICION DEL CASTILLO DEL JUGADOR ACTUAL
        for (let i = 0; i < tableroActual.castillos.length; i++) {
            if (tableroActual.castillos[i].id == jugadorActual.idCastillo) {
                posicionCastilloActual = i;                
                
            }

        }

        if(jugadorActual.id == 1){
            let ant = document.getElementById('c91').style.backgroundImage;
                       
            if(ant.split(',')[0] == 'url("../Imagenes/BigBangGif.gif")') {
                ant = ant.split(',')[1];  
            }else {
                ant = ant.split(',')[0]; 
            }
            
                       
            document.getElementById('c91').style.backgroundImage = ant + ',url(../Imagenes/ui/frame_blue.png)';

            let ant2 = document.getElementById('c10').style.backgroundImage;
           
            if(ant2.split(',')[0] == 'url("../Imagenes/BigBangGif.gif")') {
                ant2 = ant2.split(',')[1];  
            }else {
                ant2 = ant2.split(',')[0]; 
            }
            
            
            document.getElementById('c10').style.backgroundImage = ant2 +', url(../Imagenes/ui/frame_red.png) ' ;
        }else{
            if (jugadorActual.id == 2){
                let ant2 = document.getElementById('c10').style.backgroundImage;
                               
                if(ant2.split(',')[0] == 'url("../Imagenes/BigBangGif.gif")') {
                    ant2 = ant2.split(',')[1];  
                }else {
                    ant2 = ant2.split(',')[0]; 
                }

                
                document.getElementById('c10').style.backgroundImage = ant2 + ', url(../Imagenes/ui/frame_blue.png) ';

                let ant = document.getElementById('c91').style.backgroundImage;
                
                if(ant.split(',')[0] == 'url("../Imagenes/BigBangGif.gif")') {
                    ant = ant.split(',')[1];  
                }else {
                    ant = ant.split(',')[0]; 
                }
                
                document.getElementById('c91').style.backgroundImage = ant + ',url(../Imagenes/ui/frame_red.png) ';
            }
        }


        sessionStorage.setItem('tablero', JSON.stringify(tableroActual));
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        visualDefensas();
        let tiempo = await timer(document.getElementById("timer"));
        if (posicionJugadorActual == jugadores.length - 1) {
            posicionJugadorActual = 0;
        } else {
            posicionJugadorActual++;
        }

        //MOVIMIENTOS
        eliminarFondoCasillasMovimientos();

        dadoTirado = false;
        tropaCompradaXTurno = false;
        numeroDadoSacado = 0;
        cuadroMovimientos.textContent = '';
        partidaIniciada = true;
        movimientoXTurno = false;
        turnoCancelado = false;

        //PERSONAJES USADOS
        arqueroUsado = false;
        espadachinUsado = false;
        asesinoUsado = false;
        bersequerUsado = false;
        espiaUsado = false;
        jineteUsado = false;
        magoUsado = false;
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

        if (i == 40) {
            await removerPowersTurnos();
        }

        //VERIFICA QUE LE DIO CLICK AL BOTON DE TERMINAR TURNO
        if (turnoCancelado == true) {
            break;
        }

        await waitFor(1000);
    }


};


//CAMBIO DE TURNO
async function cambioTurno(turnoPersona, partidaComenzada) {
    abrirModalCambioTurno();
    if (partidaComenzada == false) {
        document.getElementById("titulo-cambio-turno").textContent = "Inicio de partida";
        document.getElementById("overlay-info-turno").textContent = "Turno de: " + turnoPersona;
    } else {
        document.getElementById("titulo-cambio-turno").textContent = "Cambio de turno";
        document.getElementById("overlay-info-turno").textContent = "Turno de: " + turnoPersona;
    }

    for (let i = 3; i >= 0; i--) {
        await waitFor(1000);
    }
    cerrarOverlayAtaquePersonaje();
    cerrarOverlayCambioTurno();
   
}


const removerPowersTurnos = async() => {
    let castillosTablero = [];
    castillosTablero = tableroJSON.castillos;
    let personajesTablero = [];
    let personajesConPower = [];
    let personajesNuevos = [];
    for (let i = 0; i < castillosTablero.length; i++) {

        if (jugadorActual.idCastillo == castillosTablero[i].id) {
            personajesTablero = castillosTablero[i].tropas;
        }
    }

    for (let i = 0; i < personajesTablero; i++) {

        if (personajesTablero[i].powerUp != null) {
            personajesConPower.push(personajesTablero[i]);
        }

    }

    let objVisitantePersonajes = personajesConPower.map(function(element) {
        return {
            id: element.id,
            defensa: element.defensa,
            ataque: element.ataque.puntos,
            tipoPowerUp: element.powerUp.tipo,
            estadoDecorado: element.estadoDecorado
        }
    });


    personajesNuevos = await visitarPersonajes(objVisitantePersonajes);
    //console.log(personajesNuevos);
}


/*
window.onload = function() {
    startTimer(45, document.getElementById("timer"));
};*/