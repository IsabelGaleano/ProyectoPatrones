let elementsArray = document.querySelectorAll(".btn-compra-personaje");
const delay = ms => new Promise(res => setTimeout(res, ms));

//COMPRA DE LOS PERSONAJES DE LA TIENDA
elementsArray.forEach(function(elem) {
    elem.addEventListener("click", async function() {
        console.log(elem.textContent);
        cancelarPersonaje();
        if (tropaCompradaXTurno == false) {
            agregarPersonaToCastillo(elem.value, elem.textContent);
            await delay(1000);
            console.log(JSON.parse(sessionStorage.getItem('tablero')));
            tropaCompradaXTurno = true;
        }

    });
});

const cancelarPersonaje = () => {
    let bandera = true;
    let contador = 1;
    setInterval(function(){ 
        contador = contador + 1;

        if(contador == 10) {
            bandera = false;
        }
    }, 1000);

    console.log(contador)
}
const crearPersonaje = async(opcion) => {

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(function(element) {
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

const agregarPersonaToCastillo = async(opcionPersonaje, costo) => {
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(opcionPersonaje);
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;
    //DETERMINAR EL JUGADOR
    //SE PODRIA ELIMINAR PORQUE YA EXISTE LA VARIABLE JUGADORACTUAL DE TURNO.JS
    //CONSIDERAR
    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });

    let idCastillo = jugador.idCastillo;
    let castillos = obj.castillos;

    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[idCastillo - 1].tropas != null) {
        castillos[idCastillo - 1].tropas.forEach(function(element) {
            if (element.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
            }
        });
    }

    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO
        castillos[idCastillo - 1].oro -= costo;

        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = personaje;
                } else {
                    if(castillos[i].tropas.length < 3){
                        personaje.estado = "Activo";
                    }
                    castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador(1);
    } else {
        console.log("Tropa previamente comprada");
    }


}