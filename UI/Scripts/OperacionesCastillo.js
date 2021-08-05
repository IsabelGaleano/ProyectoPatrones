//ACTUALIZA LA INFO DEL CASTILLO DEL JUGADOR ACTIVO
//CUADRO SUPERIOR IZQUIERDO DEL JUEGO EN HTML
function actualizarInfoCastilloJugador() {
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });
    let idCastillo = jugador.idCastillo;
    //console.log(obj.jugadores);
    //console.log(obj.castillos[idCastillo - 1]);
    document.getElementById("castilloVida").textContent = obj.castillos[idCastillo - 1].vida;
    document.getElementById("castilloCoins").textContent = obj.castillos[idCastillo - 1].oro;
}