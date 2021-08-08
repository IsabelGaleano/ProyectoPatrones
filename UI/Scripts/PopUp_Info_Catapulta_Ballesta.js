const popAudio = new Audio('../Sounds/PopUpSound.wav');
const OVAudio = new Audio('../Sounds/OverlaySound.wav');

var overlayBallesta = document.getElementById('idOverlayBallesta'),
    popupBallesta = document.getElementById('idPopupBallesta'),
    btnCerrarPopupBallesta = document.getElementById('btn-cerrar-popupBallesta');

var overleyCatapulta = document.getElementById('idOverlayCatapulta'),
    popupCatapulta = document.getElementById('idPopupCatapulta'),
    btnCerrarPopupCatapulta = document.getElementById('btn-cerrar-popupCatapulta')

function abrirModalBallesta(id, ballesta) {
    popAudio.volume = 1;
    popAudio.play();
    var jugador = obtenerDatosUsuario(id);
    console.log("jugadorX", jugador);
    document.getElementById('vidaBallestaModal').innerHTML = jugador.datos.ballestas[ballesta].vida;
    overlayBallesta.classList.add('active');
    popupBallesta.classList.add('active');
}

function abrirModalCatapulta(id, catapulta) {
    popAudio.volume = 1;
    popAudio.play();
    var jugador = obtenerDatosUsuario(id);
    console.log("jugadorX", jugador);
    document.getElementById('vidaCatapultaModal').innerHTML = jugador.datos.catapulta[catapulta].vida;
    overleyCatapulta.classList.add('active');
    popupCatapulta.classList.add('active');
}

function cerrarModalBallesta() {
    popAudio.volume = 1;
    popAudio.play();
    overlayBallesta.classList.remove('active');
    popupBallesta.classList.remove('active');
}



function cerrarModalCatapulta() {
    popAudio.volume = 1;
    popAudio.play();
    overleyCatapulta.classList.remove('active');
    popupCatapulta.classList.remove('active');
}


var overlayCompraB = document.getElementById('idOverlayCompraB'),
    popupCompraBallesta = document.getElementById('idpopupCompraB'),
    btnCerrarPopupBallesta = document.getElementById('btn-cerrar-popupCompraB');

function abrirModalCompraB() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraB.classList.add('active');
    popupCompraBallesta.classList.add('active');
}
const cerrarOverlayCompraB = () => {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraB.classList.remove('active');
    popupCompraBallesta.classList.remove('active');

}

var overlayCompraC = document.getElementById('idOverlayCompraC'),
    popupCompraCatapulta = document.getElementById('idpopupCompraC'),
    btnCerrarPopupCatapulta = document.getElementById('btn-cerrar-popupCompraC');

function abrirModalCompraC() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraC.classList.add('active');
    popupCompraCatapulta.classList.add('active');
}

function cerrarOverlayCompraC() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraC.classList.remove('active');
    popupCompraCatapulta.classList.remove('active');
}

/* ---------------------- MODAL DE CAMBIO DE TURNO --------------------------------------*/
var overlayCambioTurno = document.getElementById('idOverlayCambioTurno'),
    popupCambioTurno = document.getElementById('idpopupCambioTurno');

function abrirModalCambioTurno() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCambioTurno.classList.add('active');
    popupCambioTurno.classList.add('active');
}

function cerrarOverlayCambioTurno() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCambioTurno.classList.remove('active');
    popupCambioTurno.classList.remove('active');
}
/* ---------------------- FIN MODAL DE CAMBIO DE TURNO ----------------------------------*/

/* ----------------------  Modales compra personajes ------------------------------------*/

var overlayCompraArquero = document.getElementById('idOverlayCompraArquero'),
    popupCompraArquero = document.getElementById('idpopupCompraArquero');

function abrirModalCompraArquero() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraArquero.classList.add('active');
    popupCompraArquero.classList.add('active');
}

function cerrarOverlayCompraArquero() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraArquero.classList.remove('active');
    popupCompraArquero.classList.remove('active');
}

var overlayCompraAsesino = document.getElementById('idOverlayCompraAsesino'),
    popupCompraAsesino = document.getElementById('idpopupCompraAsesino');

function abrirModalCompraAsesino() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraAsesino.classList.add('active');
    popupCompraAsesino.classList.add('active');
}

function cerrarOverlayCompraAsesino() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraAsesino.classList.remove('active');
    popupCompraAsesino.classList.remove('active');
}

var overlayCompraBerserker = document.getElementById('idOverlayCompraBerserker'),
    popupCompraBerserker = document.getElementById('idpopupCompraBerserker');

function abrirModalCompraBerserker() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraBerserker.classList.add('active');
    popupCompraBerserker.classList.add('active');
}

function cerrarOverlayCompraBerserker() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraBerserker.classList.remove('active');
    popupCompraBerserker.classList.remove('active');
}

var overlayCompraKnight = document.getElementById('idOverlayCompraKnight'),
    popupCompraKnight = document.getElementById('idpopupCompraKnight');

function abrirModalCompraKnight() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraKnight.classList.add('active');
    popupCompraKnight.classList.add('active');
}

function cerrarOverlayCompraKnight() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraKnight.classList.remove('active');
    popupCompraKnight.classList.remove('active');
}

var overlayCompraEspia = document.getElementById('idOverlayCompraEspia'),
    popupCompraEspia = document.getElementById('idpopupCompraEspia');

function abrirModalCompraEspia() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraEspia.classList.add('active');
    popupCompraEspia.classList.add('active');
}

function cerrarOverlayCompraEspia() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraEspia.classList.remove('active');
    popupCompraEspia.classList.remove('active');
}

var overlayCompraSwordsman = document.getElementById('idOverlayCompraSwordsman'),
    popupCompraSwordsman = document.getElementById('idpopupCompraSwordsman');

function abrirModalCompraSwordsman() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraSwordsman.classList.add('active');
    popupCompraSwordsman.classList.add('active');
}

function cerrarOverlayCompraSwordsman() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraSwordsman.classList.remove('active');
    popupCompraSwordsman.classList.remove('active');
}
var overlayCompraMago = document.getElementById('idOverlayCompraMago'),
    popupCompraMago = document.getElementById('idpopupCompraMago');

function abrirModalCompraMago() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraMago.classList.add('active');
    popupCompraMago.classList.add('active');
}

function cerrarOverlayCompraMago() {
    popAudio.volume = 1;
    popAudio.play();
    overlayCompraMago.classList.remove('active');
    popupCompraMago.classList.remove('active');
}

/*------------------ overlay mensaje --------------------------*/

var overlayMensaje = document.getElementById('idOverlayMensaje'),
    popupMensaje = document.getElementById('idpopupMensaje');

function abrirModalMensaje() {
    popAudio.volume = 1;
    popAudio.play();
    overlayMensaje.classList.add('active');
    popupMensaje.classList.add('active');
}

function cerrarOverlayMensaje() {
    popAudio.volume = 1;
    popAudio.play();
    overlayMensaje.classList.remove('active');
    popupMensaje.classList.remove('active');
}

/*----------------------- modales gemas ------------------------*/

var idOverlayGemaAzul = document.getElementById('idOverlayGemaAzul'),
    popupGemaAzul = document.getElementById('idpopupGemaAzul');


function abrirModalGemaAzul() {
    OVAudio.volume = 1;
    OVAudio.play();
    idOverlayGemaAzul.classList.add('active');
    popupGemaAzul.classList.add('active');

}

function cerrarOverlayGemaAzul() {
    popAudio.volume = 1;
    popAudio.play();
    idOverlayGemaAzul.classList.remove('active');
    popupMensaje.classList.remove('active');
}

var idOverlayGemaBlanca = document.getElementById('idOverlayGemaBlanca'),
    popupGemaBlanca = document.getElementById('idpopupGemaBlanca');


function abrirModalGemaBlanca() {
    OVAudio.volume = 1;
    OVAudio.play();
    idOverlayGemaBlanca.classList.add('active');
    popupGemaBlanca.classList.add('active');

}

function cerrarOverlayGemaBlanca() {
    popAudio.volume = 1;
    popAudio.play();
    idOverlayGemaBlanca.classList.remove('active');
    popupMensaje.classList.remove('active');
}

var idOverlayGemaVerde = document.getElementById('idOverlayGemaVerde'),
    popupGemaVerde = document.getElementById('idpopupGemaVerde');


function abrirModalGemaVerde() {
    OVAudio.volume = 1;
    OVAudio.play();
    idOverlayGemaVerde.classList.add('active');
    popupGemaVerde.classList.add('active');

}

function cerrarOverlayGemaVerde() {
    popAudio.volume = 1;
    popAudio.play();
    idOverlayGemaVerde.classList.remove('active');
    popupMensaje.classList.remove('active');
}

/*----------------------- modales powerups -------------*/

var idOverlayPowerUp = document.getElementById('idOverlayPowerUp'),
    popupPowerUp = document.getElementById('idpopupPowerUp');


function abrirModalPowerUp() {
    OVAudio.volume = 1;
    OVAudio.play();
    idOverlayPowerUp.classList.add('active');
    popupPowerUp.classList.add('active');

}

function cerrarOverlayPowerUp() {
    popAudio.volume = 1;
    popAudio.play();
    idOverlayPowerUp.classList.remove('active');
    popupMensaje.classList.remove('active');
}

var idOverlayDefenseUp = document.getElementById('idOverlayDefenseUp'),
    popupDefenseUp = document.getElementById('idpopupDefenseUp');


function abrirModalDefenseUp() {
    OVAudio.volume = 1;
    OVAudio.play();
    idOverlayDefenseUp.classList.add('active');
    popupDefenseUp.classList.add('active');

}

function cerrarOverlayDefenseUp() {
    popAudio.volume = 1;
    popAudio.play();
    idOverlayDefenseUp.classList.remove('active');
    popupMensaje.classList.remove('active');
}