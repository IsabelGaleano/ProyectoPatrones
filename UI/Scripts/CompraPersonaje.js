let elementsArray = document.querySelectorAll("#btn-compra-personaje");
//const delay = ms => new Promise(res => setTimeout(res, ms));

//COMPRA DE LOS PERSONAJES DE LA TIENDA
/*elementsArray.forEach(function(elem) {
    elem.addEventListener("click", async function() {
        console.log("Pasa algo");
        agregarBarra(elem.value);
        verificarCompraPersonaje(elem.value, elem.textContent);

    });
});*/


document.querySelector('#btn-comprar-Arquero-OK').addEventListener('click', async(e) => {
    agregarBarra(1);
    console.log("Click extra");
    await verificarCompraPersonaje(1, 10);
    cerrarOverlayCompraArquero();
});

document.querySelector('#btn-comprar-Asesino-OK').addEventListener('click', async(e) => {
    agregarBarra(3);
    await verificarCompraPersonaje(3, 5);
    cerrarOverlayCompraAsesino();
});

document.querySelector('#btn-comprar-Berserker-OK').addEventListener('click', async(e) => {
    agregarBarra(4);
    await verificarCompraPersonaje(4, 25);
    cerrarOverlayCompraBerserker();
});

document.querySelector('#btn-comprar-Knight-OK').addEventListener('click', async(e) => {
    agregarBarra(6);
    await verificarCompraPersonaje(6, 15);
    cerrarOverlayCompraKnight();
});

document.querySelector('#btn-comprar-Espia-OK').addEventListener('click', async(e) => {
    agregarBarra(5);
    await verificarCompraPersonaje(5, 5);
    cerrarOverlayCompraEspia();
});

document.querySelector('#btn-comprar-Swordsman-OK').addEventListener('click', async(e) => {
    agregarBarra(2);
    await verificarCompraPersonaje(2, 15);
    cerrarOverlayCompraSwordsman();
});

document.querySelector('#btn-comprar-Mago-OK').addEventListener('click', async(e) => {
    agregarBarra(7);
    await verificarCompraPersonaje(7, 10);
    cerrarOverlayCompraMago();
});

const agregarBarra = (value) => {
    let id = "espacio" + value;
    let divBar = `<div class="wrapper-bar" id="wrapperBar">
    <div id="myProgress">
        <div id="myBar"></div>
    </div>
    <div>
        <button id="buttonBar" type="button"></button>
    </div>

</div>`;

    document.getElementById(id).insertAdjacentHTML("beforeend", divBar);

}

const rebajarMonedas = (cantidadOro) => {
    let idCastillo = jugadorActual.idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let castillos = [];
    castillos = obj.castillos;

    for (let i = 0; i < castillos.length; i++) {

        if (castillos[i].id == idCastillo) {

            castillos[i].oro = castillos[i].oro - cantidadOro;
        }

    }

    obj.castillos = castillos;
    //console.log(obj.castillos[jugadorActual.idCastillo - 1]);
    sessionStorage.setItem('tablero', JSON.stringify(obj));
}

const verificarCompraPersonaje = async(opcion, monedas) => {
    var elem = document.getElementById("myBar");
    let buttonCancel = document.getElementById('buttonBar');
    var width = 1;
    var id = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            rebajarMonedas(monedas);

            if (opcion == 1) {
                compraArquero();
            } else if (opcion == 3) {
                compraAsesino();
            } else if (opcion == 4) {
                compraBerserker();
            } else if (opcion == 6) {
                compraJinete();
            } else if (opcion == 5) {
                compraEspia();
            } else if (opcion == 2) {
                compraEspadachin();
            } else if (opcion == 7) {
                compraMago();
            }


            clearInterval(id);

            eliminarBarra();

        } else {
            width++;
            elem.style.width = width + '%';
            buttonCancel.addEventListener('click', function() {
                clearInterval(id);
                rebajarMonedas(monedas);
                eliminarBarra();
            });

        }
    }


}

const eliminarBarra = () => {

    let element = document.getElementById('wrapperBar');
    if (element != null) {
        element.parentNode.removeChild(element);
    }

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
    personajes[0].estado = "Activo";
    return personajes;
}



//COMPRA PERSONAJES
//1 ARQUERO COSTO: 10
//2 ESPADACHIN COSTO: 15
//3 ASESINO COSTO: 5
//4 BERSEQUER COSTO: 25
//5 ESPIA COSTO: 5
//6 JINETE COSTO: 15
//7 MAGO COSTO: 10

//COMPRA ARQUERO DESDE LA TIENDA PARA EL JUGADOR
const compraArquero = async() => {
    //1 ES EL ID DE ARQUERO
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(1);
    arrayPersonaje[0].id = jugadorActual.id;
    //console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    console.log(obj);

    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;

    //console.log(obj.castillos[idCastillo]);
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {

        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            //console.log("entra en array");
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalArquero").style.display = "block";

                }
            });
        } else {

            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                console.log("entra en no array");
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalArquero").style.display = "block";

            }
        }
    }
    console.log(tropaComprada);
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO

        document.getElementById("infoModalArquero").style.display = "none";
        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos[idCastillo - 1]);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        console.log("Click principal");
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraArquero();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA ESPADACHIN DESDE LA TIENDA PARA EL JUGADOR
const compraEspadachin = async() => {
    //2 ES EL ID DE ESPADACHIN
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(2);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));

    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalEspadachin").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalEspadachin").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO

        document.getElementById("infoModalEspadachin").style.display = "none";
        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraSwordsman();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA ASESINO DESDE LA TIENDA PARA EL JUGADOR
const compraAsesino = async() => {
    //3 ES EL ID DE ASESINO
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(3);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalAsesino").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalAsesino").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO
        document.getElementById("infoModalAsesino").style.display = "none";

        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraAsesino();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA BERSERKER DESDE LA TIENDA PARA EL JUGADOR
const compraBerserker = async() => {
    //4 ES EL ID DE BERSERKER
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(4);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalBerserker").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalBerserker").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO

        document.getElementById("infoModalBerserker").style.display = "none";
        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraBerserker();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA ESPIA DESDE LA TIENDA PARA EL JUGADOR
const compraEspia = async() => {
    //5 ES EL ID DE ESPIA
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(5);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalEspia").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalEspia").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO

        document.getElementById("infoModalEspia").style.display = "none";
        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraEspia();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA JINETE DESDE LA TIENDA PARA EL JUGADOR
const compraJinete = async() => {
    //6 ES EL ID DE JINETE
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(6);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalJinete").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalJinete").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO
        document.getElementById("infoModalJinete").style.display = "none";

        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        //console.log(obj.castillos);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraKnight();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}

//COMPRA MAGO DESDE LA TIENDA PARA EL JUGADOR
const compraMago = async() => {
    //7 ES EL ID DE MAGO
    let arrayPersonaje = [];
    arrayPersonaje = await crearPersonaje(7);
    arrayPersonaje[0].id = jugadorActual.id;
    console.log(arrayPersonaje);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    //PARA VALIDAR SI LA TROPA YA HABIA SIDO COMPRADA POR EL MISMO JUGADOR
    let tropaComprada = false;
    let [personaje] = arrayPersonaje;

    let idCastillo = jugadorActual.idCastillo;
    let castillos = obj.castillos;
    //VALIDAR SI LA TROPA YA FUE COMPRADA
    if (castillos[posicionCastilloActual].tropas != null) {
        if (Array.isArray(castillos[posicionCastilloActual].tropas)) {
            castillos[posicionCastilloActual].tropas.forEach(function(element) {
                if (element.tipo == arrayPersonaje[0].tipo) {
                    tropaComprada = true;
                    //SE CAMBIA EL MODAL
                    document.getElementById("infoModalMago").style.display = "block";

                }
            });
        } else {
            if (castillos[posicionCastilloActual].tropas.tipo == arrayPersonaje[0].tipo) {
                tropaComprada = true;
                //SE CAMBIA EL MODAL
                document.getElementById("infoModalMago").style.display = "block";

            }
        }
    }
    //SI LA TROPA NO HA SIDO COMPRADA, SE PROSIGUE CON EL RESTO
    if (tropaComprada == false) {
        //RESTAR ORO AL CASTILLO

        document.getElementById("infoModalMago").style.display = "none";
        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].tropas == null) {
                    castillos[i].tropas = arrayPersonaje;
                    //castillos[i].tropas = personaje;
                } else {
                    castillos[i].tropas = [...castillos[i].tropas, ...arrayPersonaje];
                    if (castillos[i].tropas.length < 3) {
                        personaje.estado = "Activo";
                    }
                    //castillos[i].tropas = [...castillos[i].tropas,personaje];
                }
                obj.castillos[i] = castillos[i];
            }

        }
        console.log(castillos[idCastillo - 1]);
        sessionStorage.setItem('tablero', JSON.stringify(obj));
        tropaCompradaXTurno = true;
        actualizarInfoCastilloJugador();
        actualizarPersonajesJugador();
        cerrarOverlayCompraMago();
    } else {
        //MENSAJE DE QUE YA TIENE EL PERSONAJE
        setMensaje("??Ya tienes este personaje!", "../Imagenes/ui/checkbox_01.png");
        abrirModalMensaje();
    }
}