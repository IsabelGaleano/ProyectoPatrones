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


    var overlayCompraB = document.getElementById('idOverlayCompraB'),
    popupCompraBallesta = document.getElementById('idpopupCompraB'),
    btnCerrarPopupBallesta = document.getElementById('btn-cerrar-popupCompraB');

    function abrirModalCompraB(){       
        overlayCompraB.classList.add('active');
        popupCompraBallesta.classList.add('active');
    }
    function cerrarOverlayCompraB(){
        overlayCompraB.classList.remove('active');
        popupCompraBallesta.classList.remove('active');
    }

    var overlayCompraC = document.getElementById('idOverlayCompraC'),
    popupCompraCatapulta = document.getElementById('idpopupCompraC'),
    btnCerrarPopupCatapulta = document.getElementById('btn-cerrar-popupCompraC');

    function abrirModalCompraC(){       
        overlayCompraC.classList.add('active');
        popupCompraCatapulta.classList.add('active');
    }
    function cerrarOverlayCompraC(){
        overlayCompraC.classList.remove('active');
        popupCompraCatapulta.classList.remove('active');
    }