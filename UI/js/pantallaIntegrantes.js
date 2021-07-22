
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

const obtenerDatos = async() => {
    let aliasJugadores = document.getElementsByClassName('form__input');
    let valorAlias;
    let jugador;
    for (let i = 0; i < aliasJugadores.length; i++) {
        
        valorAlias = aliasJugadores[i].value;
        jugador = await validarAlias(valorAlias);
        if(jugador == null) {
            await registrarJugador(valorAlias);
        }
    }

    
    changeHTML();

}


const changeHTML = () => {
    window.location.href = "../html/Tablero.html";
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


const validarAlias = async(alias) => {
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/jugadores/${alias}`,
        responseType: 'json'
    }).then((response) => {

        return response.data.jugador;
    }).catch((response) =>{
        console.error;
        return null;
    
    });


    
}



const registrarJugador = async(alias) => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/jugadores',
        responseType: 'json',
        data: {
            alias: alias,
            turno: true,
            partidasGanadas: 0,
            partidasPerdidas: 0,
            estado: 1,
            tropasCompradas: 0,
            tropasDerrotadas: 0,
            oroGanado: 0
            
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((response) => {
       console.log(console.error())
    });
};

