var overlayBallesta = document.getElementById('idOverlayBallesta'),
    popupBallesta = document.getElementById('idPopupBallesta'),
    btnCerrarPopupBallesta = document.getElementById('btn-cerrar-popupBallesta');

var overleyCatapulta = document.getElementById('idOverlayCatapulta'),
    popupCatapulta = document.getElementById('idPopupCatapulta'),
    btnCerrarPopupCatapulta = document.getElementById('btn-cerrar-popupCatapulta')

function abrirModalBallesta(id, ballesta){
    var jugador = obtenerDatosUsuario(id);
    console.log("jugadorX", jugador);
    document.getElementById('vidaBallestaModal').innerHTML = jugador.datos.ballestas[ballesta].vida;
    overlayBallesta.classList.add('active');
    popupBallesta.classList.add('active');
}

function abrirModalCatapulta(id, catapulta){
    var jugador = obtenerDatosUsuario(id);
    console.log("jugadorX", jugador);
    document.getElementById('vidaCatapultaModal').innerHTML = jugador.datos.catapulta[catapulta].vida;
    overleyCatapulta.classList.add('active');
    popupCatapulta.classList.add('active');
}

function cerrarModalBallesta(){
    overlayBallesta.classList.remove('active');
    popupBallesta.classList.remove('active');
}

function cerrarModalCatapulta(){
    overleyCatapulta.classList.remove('active');
    popupCatapulta.classList.remove('active');
}
