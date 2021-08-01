let elementsArray = document.querySelectorAll(".btn-compra-personaje");
elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
        crearPersonaje(elem.value);
    });
});

const crearPersonaje = async (opcion) => {
    
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

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
    console.log(personajes);
    return personajes;

}

const agregarPersonaToCastillo = async () => {
    let arrayPersonaje = [];
    arrayPersonaje = crearPersonaje();

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastillo = jugador.idCastillo;
    let castillos = [];
    let tropas = [];
    castillos = obj.castillos;
    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            if(castillos[i].tropas == null){
                castillos[i].tropas = arrayPersonaje;
            }else{
                tropas[i] = castillos[i].tropas;
            }
        }
    
    }
}