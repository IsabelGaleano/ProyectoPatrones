
document.querySelector('#agregar').addEventListener('click', e => {
    let listadoAlias = `<div class="form__group" id="remove">
    <div class="inputText">
        <input type="text" class="form__input" id="name" placeholder="Alias" required="" />
    </div>
    
    <i class="fas fa-times" id="eliminar" onclick="eliminar()"></i>
</div>`;
    document.getElementById('inputs').insertAdjacentHTML("beforeend", listadoAlias);
    let elements = document.getElementsByClassName('form__group');
    let plus = document.getElementById('plus');
    if (elements.length == 4) {
        plus.parentNode.removeChild(plus);
    }

});

const eliminar = () => {

    let element = document.getElementById('remove');
    element.parentNode.removeChild(element);

    let plus = document.getElementById('plus');
    let elemAd = `<div class="plus" id="plus">
    <i class="far fa-plus-square" id="agregar" onclick="agregar()"></i></div>`
    if (plus == null) {
        document.getElementById('subPlus').insertAdjacentHTML("beforeend", elemAd);
    }
}

const obtenerDatos = async () => {
    let aliasJugadores = document.getElementsByClassName('form__input');
    let valorAlias;
    let jugador;
    let castillos;
    let arrayAlias = [];
    let arrayJugadores = [];
    let tablero;
    //await enviarCantidadCastillos(aliasJugadores.length);
    castillos = await crearCastillos(aliasJugadores.length);
    for (let i = 0; i < aliasJugadores.length; i++) {

        valorAlias = aliasJugadores[i].value;
        arrayAlias.push(valorAlias);
        jugador = await validarAlias(valorAlias);
        
        if (jugador == null) {
            await registrarJugador(valorAlias, castillos[i].id);
        } else {
            await actualizarIDCastillo(jugador, valorAlias, castillos[i].id);
        }
    }

    arrayJugadores = await obtenerJugadores(arrayAlias);

    tablero =  await crearTablero(arrayJugadores.join());

    await sesionLocal(tablero);

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    console.log(obj);

    changeHTML();

}

const obtenerJugadores = async (arrayAlias) => {
    let arrayJugadores = [];
    let jugador = null;
    for (let i = 0; i < arrayAlias.length; i++) {
        jugador = (await validarAlias(arrayAlias[i])).alias;
        arrayJugadores.push(jugador);
    }

    return arrayJugadores;
}


const changeHTML = () => {
    window.location.href = "../html/Tablero.html";
}

const sesionLocal = (tablero) => {
    sessionStorage.setItem('tablero', JSON.stringify(tablero));
}

const aliasError = (posicion) => {
    let aliasJugadores = document.getElementsByClassName('form__input');
    let divs = document.getElementsByClassName('inputText');
    let inputElement = aliasJugadores[posicion];
    let divInput = divs[posicion];
    inputElement.classList.add('form-input-error');
    let text = `<p class="text-existente">¡Este alias ya existe!</p>`;
    divInput.insertAdjacentHTML("beforeend", text);
}


const validarAlias = async (alias) => {
    let foo;
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/jugadores/${alias}`,
        responseType: 'json'
    }).then((response) => {
        foo = response.data;
    }).catch((response) => {
        console.error;
        return null;

    });
    return foo;
}

const crearCastillos = async (cantidad) => {
    let castillos;
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/castillos/crear/${cantidad}`,
        responseType: 'json'
    }).then((response) => {
        castillos = response.data;
    }).catch((response) => {
        console.error;
        return null;

    });

    return castillos;

}

const enviarCantidadCastillos = async (castillos) => {
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/castillos/${castillos}`,
        responseType: 'json'
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
        console.error;

    });

}


const crearTablero = async (jugadores) => {
    let tablero;
    await axios({
        method: 'post',
        url: `http://localhost:8080/api/tablero/crearTablero`,
        responseType: 'json',
        data: {
            jugadores: jugadores
        }
    }).then((response) => {
        tablero = response.data
    }).catch((response) => {
        console.error;
        return null;

    });

    console.log(tablero);

    return tablero;

}


const registrarJugador = async (alias, idCastillo) => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/jugadores',
        responseType: 'json',
        data: {
            alias: alias,
            turno: true,
            id: idCastillo,
            partidasGanadas: 0,
            partidasPerdidas: 0,
            estado: 1,
            tropasCompradas: 0,
            tropasDerrotadas: 0,
            oroGanado: 0,
            idCastillo: idCastillo

        }
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
        console.log(console.error())
    });
};


const actualizarIDCastillo = async (jugador, alias, idCastillo) => {
    await axios({
        method: 'put',
        url: `http://localhost:8080/api/jugadores/updateIDCastillo/${alias}/${idCastillo}`,
        responseType: 'json',
        data: {
            jugador: jugador
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
        console.log(console.error())
    });
};

