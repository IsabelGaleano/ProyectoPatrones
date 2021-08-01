let elementsArray = document.querySelectorAll(".btn-compra-personaje");
elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
        agregarPersonaToCastillo(elem.value);
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

    return personajes;
}

const agregarPersonaToCastillo = async (opcionPersonaje) => {
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(opcionPersonaje);

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function (element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastillo = jugador.idCastillo;
    let castillos = obj.castillos;
    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
            if(castillos[i].tropas == null){
                castillos[i].tropas = arrayPersonaje;
            }else{
                castillos[i].tropas = [...castillos[i].tropas,...arrayPersonaje];
            }
            obj.castillos[i] = castillos[i];
        }
        
    }
    sessionStorage.setItem('tablero', JSON.stringify(obj));
}