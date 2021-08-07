const validarCasillaTropa = async() => {

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let castillo = jugador.idCastillo;

    let casillas = obj.casillas;
}