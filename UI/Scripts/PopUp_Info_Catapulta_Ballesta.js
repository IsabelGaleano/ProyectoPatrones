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

/* ----------------------  Modales compra personajes ------------------------------------*/ 

    var overlayCompraArquero = document.getElementById('idOverlayCompraArquero'),
    popupCompraArquero = document.getElementById('idpopupCompraArquero');

    function abrirModalCompraArquero(){       
        overlayCompraArquero.classList.add('active');
        popupCompraArquero.classList.add('active');
    }
    function cerrarOverlayCompraArquero(){
        overlayCompraArquero.classList.remove('active');
        popupCompraArquero.classList.remove('active');
    }

    var overlayCompraAsesino = document.getElementById('idOverlayCompraAsesino'),
    popupCompraAsesino = document.getElementById('idpopupCompraAsesino');

    function abrirModalCompraAsesino(){       
        overlayCompraAsesino.classList.add('active');
        popupCompraAsesino.classList.add('active');
    }
    function cerrarOverlayCompraAsesino(){
        overlayCompraAsesino.classList.remove('active');
        popupCompraAsesino.classList.remove('active');
    }

    var overlayCompraBerserker = document.getElementById('idOverlayCompraBerserker'),
    popupCompraBerserker = document.getElementById('idpopupCompraBerserker');

    function abrirModalCompraBerserker(){       
        overlayCompraBerserker.classList.add('active');
        popupCompraBerserker.classList.add('active');
    }
    function cerrarOverlayCompraBerserker(){
        overlayCompraBerserker.classList.remove('active');
        popupCompraBerserker.classList.remove('active');
    }

    var overlayCompraKnight = document.getElementById('idOverlayCompraKnight'),
    popupCompraKnight = document.getElementById('idpopupCompraKnight');

    function abrirModalCompraKnight(){       
        overlayCompraKnight.classList.add('active');
        popupCompraKnight.classList.add('active');
    }
    function cerrarOverlayCompraKnight(){
        overlayCompraKnight.classList.remove('active');
        popupCompraKnight.classList.remove('active');
    }

    var overlayCompraEspia = document.getElementById('idOverlayCompraEspia'),
    popupCompraEspia = document.getElementById('idpopupCompraEspia');

    function abrirModalCompraEspia(){       
        overlayCompraEspia.classList.add('active');
        popupCompraEspia.classList.add('active');
    }
    function cerrarOverlayCompraEspia(){
        overlayCompraEspia.classList.remove('active');
        popupCompraEspia.classList.remove('active');
    }

    var overlayCompraSwordsman = document.getElementById('idOverlayCompraSwordsman'),
    popupCompraSwordsman = document.getElementById('idpopupCompraSwordsman');

    function abrirModalCompraSwordsman(){       
        overlayCompraSwordsman.classList.add('active');
        popupCompraSwordsman.classList.add('active');
    }
    function cerrarOverlayCompraSwordsman(){
        overlayCompraSwordsman.classList.remove('active');
        popupCompraSwordsman.classList.remove('active');
    }
    var overlayCompraMago = document.getElementById('idOverlayCompraMago'),
    popupCompraMago = document.getElementById('idpopupCompraMago');

    function abrirModalCompraMago(){       
        overlayCompraMago.classList.add('active');
        popupCompraMago.classList.add('active');
    }
    function cerrarOverlayCompraMago(){
        overlayCompraMago.classList.remove('active');
        popupCompraMago.classList.remove('active');
    }

    /*------------------ overlay mensaje --------------------------*/

    var overlayMensaje = document.getElementById('idOverlayMensaje'),
    popupMensaje = document.getElementById('idpopupMensaje');

    function abrirModalMensaje(){       
        overlayMensaje.classList.add('active');
        popupMensaje.classList.add('active');
    }
    function cerrarOverlayMensaje(){
        overlayMensaje.classList.remove('active');
        popupMensaje.classList.remove('active');
    }