//import
//let canvas = document.getElementById("table-container");
//let ctx = canvas.getContext('2d');
let tablero = document.getElementById("tablero");
let mas2Jugadores = false;
let imagenDado = document.getElementById("imagen-dado");
let celda10 = document.getElementById('c10');
let imgBody = document.getElementById("idBody");
let btn_ver_personajes = document.getElementById("btn-ver-personajes")
let tiendaAbierta = false;
let celdaActual;
let jugadorActivo = document.getElementById("Nickname");
const volup = document.querySelector("#btn_volup");
const voldown = document.querySelector("#btn_voldwn");
const clickAudio = new Audio('../Sounds/buttonClickSound.wav');
const MOAudio = new Audio('../Sounds/buttonHoverSound.wav');
const BGM = new Audio('../Sounds/music_funkyWhistle.wav');
let celdaDealer;
let celdaReceiver;
const boomAudio = new Audio('../Sounds/explosion.wav');
// const icon = document.querySelector("#btn_music > i");
const btn_music = document.querySelector("#btn_music");
BGM.volume = 0.1;
BGM.loop = true;
BGM.play();


$("button").click(function() {
    clickAudio.volume = 0.1;
    clickAudio.play();
});

$("button").mouseenter(function() {
    MOAudio.volume = 0.03;
    MOAudio.play();
});

//PERMITE GUARDAR ARRAYS Y OBJETOS EN LOCALSTORAGE
Storage.prototype.setObj = function(key, obj) {

    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

btn_music.addEventListener("click", () => {
    if (BGM.paused) {
        BGM.volume = 0.2;
        BGM.loop = true;
        BGM.play();
        btn_music.classList.add('fa-volume-up');
        btn_music.classList.remove('fa-volume-mute');



    } else {
        BGM.pause();
        btn_music.classList.add('fa-volume-mute');
        btn_music.classList.remove('fa-volume-up');

    }

});

volup.addEventListener("click", () => {
    clickAudio.play();
    if (BGM.volume <= 1 ) {
        BGM.volume += 0.2;        
    } 
  });
  
  voldown.addEventListener("click", () => {
    clickAudio.play();
    if (BGM.volume >= 0.2 ) {
        BGM.volume -= 0.2;    
    } 
  });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const obtenerCasillasGemas = () => {
    let tablero = JSON.parse(sessionStorage.getItem('tablero'));
    let casillas = [];
    let casillasGema = [];
    casillas = tablero.casillas;
    for (let i = 0; i < casillas.length; i++) {
        let randomNumberCell = Math.floor(Math.random() * 100) + 1;
        if (casillas[i].tipo == "CasillaGema") {
            casillas[i].id = randomNumberCell;
            casillasGema.push(casillas[i]);
        }

    }

    return casillasGema;

}

const esconderGemasPower = () => {
    let casillas = obtenerCasillas();
    let celdas = document.getElementsByTagName('td');
    for (let i = 0; i < casillas.length; i++) {

        if (casillas[i].tipo == "CasillaPowerUp") {
            //celdas[i].style.display = "none";
            //celdas[i].style.backgroundImage = "none";
            celdas[i].style.backgroundImage = 'url(../Imagenes/green_texture2.png)';

        }
        /*else if(casillas[i].tipo == "CasillaGema") {
               celdas[i].style.opacity = "0";
               //celdas[i].style.backgroundImage += ',url(../Imagenes/green_texture.png)';
             }*/
    }

}



const obtenerCasillas = () => {
    let tablero = JSON.parse(sessionStorage.getItem('tablero'));
    let casillas = [];
    casillas = tablero.casillas;
    return casillas;
}


const obtenerCantidad = () => {
    let tablero = JSON.parse(sessionStorage.getItem('tablero'));
    let personajes = [];
    personajes = tablero.jugadores;
    return personajes.length;
}

$(document).ready(function() {
    cargarTablero(mas2Jugadores);
    imagenDado.style.backgroundImage = 'url(../Imagenes/CarasDado/Cara1.png)';
    //partida();
    //juego();
});


//CARGA DIFERENTES PERSONAJES
function cargarPersonaje(tipo) {
    let urlImagenPersonaje;
    switch (tipo) {
        case 1:
            //Arquero
            urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherIdleRight.gif)';
            break;
        case 2:
            //Espadach??n
            urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanIdleRight.gif)';
            break;
        case 3:
            //Asesino
            urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinIdleRight.gif)';
            break;

        case 4:
            //Bersequer
            urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkIdleRight.gif)';
            break;
        case 5:
            //Esp??a
            urlImagenPersonaje = 'url(../Imagenes/Characters/SpyIdleRight.gif)';
            break;

        case 6:
            //Jinete
            urlImagenPersonaje = 'url(../Imagenes/Characters/KnightIdleRight.gif)';
            break;
        case 7:
            //Mago
            urlImagenPersonaje = 'url(../Imagenes/Characters/MageIdleRight.gif)';
            break;
        
        case 8:
            //Arquero
            urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherIdleLeft.gif)';
            break;
        case 9:
            //Espadach??n
            urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanIdleLeft.gif)';
            break;
        case 10:
            //Asesino
            urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinIdleLeft.gif)';
            break;

        case 11:
            //Bersequer
            urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkIdleLeft.gif)';
            break;
        case 12:
            //Esp??a
            urlImagenPersonaje = 'url(../Imagenes/Characters/SpyIdleLeft.gif)';
            break;

        case 13:
            //Jinete
            urlImagenPersonaje = 'url(../Imagenes/Characters/KnightIdleLeft.gif)';
            break;
        case 14:
            //Mago
            urlImagenPersonaje = 'url(../Imagenes/Characters/MageIdleLeft.gif)';
            break;

    }
    urlImagenPersonaje = urlImagenPersonaje;
    return urlImagenPersonaje;
}

const crearDefensas = async(opcion) => {
    let defensas;
    await axios({
        method: 'get',
        url: `http://localhost:8080/api/defensas/${opcion}`,
        responseType: 'json'
    }).then((response) => {
        defensas = response.data;
    }).catch((response) => {
        console.error;
        return null;

    });

    console.log(defensas);


}



function playSound() {
    var clicksound = new Audio('../Sounds/footLand.wav');
    clicksound.play();
    clicksound.loop = false;
}

//CARGAR EL TABLERO DIN??MICAMENTE
async function cargarTablero(mas2Jugadores) {
    
    //CREACION DE LAS CELDAS
    //FILAS
    let cantidad = obtenerCantidad();
    console.log(cantidad);
    for (let i = 1; i <= 10; i++) {
        let fila = document.createElement("tr");
        fila.id = "fila" + i;
        fila.className = "fila";

        let sumatoriaCeldas = 1;
        if (i > 1) {
            sumatoriaCeldas = (10 * (i - 1)) + 1;
        }
        //CELDAS DE CADA FILA
        for (let c = sumatoriaCeldas; c <= 10 * i; c++) {
            let celda = document.createElement("td");
            celda.id = "c" + c;

            if (cantidad == 2) {
                if (c == 10) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo1-100.png) ';
                } else if (c == 91) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo2-100.png)';
                }

            } else if (cantidad == 3) {

                if (c == 1) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo3-100.png)';
                } else if (c == 10) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo1-100.png)';
                } else if (c == 91) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo2-100.png)';
                }

            } else if (cantidad == 4) {

                if (c == 1) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo4-100.png)';
                } else if (c == 10) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo1-100.png)';
                } else if (c == 91) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo2-100.png)';
                } else if (c == 100) {
                    celda.style.backgroundSize = "70px 70px";
                    celda.style.backgroundImage = 'url(../Imagenes/Castillos/Castillo3-100.png)';
                }

            }



            celda.addEventListener('click', function() 
            {
                if (celda.id != "c10" && celda.id != "c91") 
                {
                    if (document.getElementById(celdaActual) !== null) {
                        document.getElementById(celdaActual).style.backgroundImage = '';
                    }

                    if (celda.style.backgroundColor == 'rgba(0, 144, 234, 0.74)') {
                        let obj = JSON.parse(sessionStorage.getItem('tablero'));
                        /*
                        if (obj.jugadores[0].id == jugadorActual.id) {
                            //console.log(celdaAnteriorPersonajeJ1);
                            //celdaJ1 = celda;
                            document.getElementById(celdaAnteriorPersonajeJ1).style.backgroundImage = '';
                            document.getElementById(celdaAnteriorPersonajeJ1).personajeActivo = '';
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            //celdaJ2 = celda;
                            document.getElementById(celdaAnteriorPersonajeJ2).style.backgroundImage = '';
                            document.getElementById(celdaAnteriorPersonajeJ2).personajeActivo = '';
                        }*/

                        //QUITAR CELDA DEL PERSONAJE ESCOGIDO
                        for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                            if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                document.getElementById(arrayCeldasConPersonajes[i].celda).style.backgroundImage = '';
                                document.getElementById(arrayCeldasConPersonajes[i].celda).personajeActivo = '';
                                break;
                            }
                        }
                        
                        celda.style.backgroundImage = cargarPersonaje(tipoPersonajeActual);
                        
                        //agregar validacion
                        clickMovimiento += 1;
                        celdaClickeada = celda;


                        if (obj.jugadores[0].id == jugadorActual.id) {
                            celdaJ1 = celda;
                            celdaAnteriorPersonajeJ1 = celda.id;
                        } else if (obj.jugadores[1].id == jugadorActual.id) {
                            celdaJ2 = celda;
                            celdaAnteriorPersonajeJ2 = celda.id;
                        }

                        //ACTUALIZAR CELDA EN EL ARRAY DE CELDAS CON PERSONAJES
                        for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                            if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                arrayCeldasConPersonajes[i].celda = celda.id;
                                break;
                            }
                        }
                        validarCasilla();
                        primerMovimiento = true;
                        movimientosPersonaje--;
                        console.log(movimientosPersonaje);
                        numeroDadoSacado--;
                        cuadroMovimientos.textContent = numeroDadoSacado;
                        celda.personajeActivo = personajeActualMovimiento;

                        //VERIFICAR QUE QUEDEN MOVIMIENTOS DEL DADO
                        if (document.getElementById("Movimientos").textContent >= 1) {
                            if (movimientosPersonaje == 0) {
                                eliminarFondoCasillasMovimientos();
                            } else {
                                movimientoPersonaje(personajeActualMovimiento, celda.id, true);
                            }
                        } else {
                            eliminarFondoCasillasMovimientos();
                        }
                        for (let i = 0; i < arrayCeldasConPersonajes.length; i++) {
                            if (arrayCeldasConPersonajes[i].personaje.tipo == personajeActualMovimiento.tipo && arrayCeldasConPersonajes[i].personaje.id == personajeActualMovimiento.id) {
                                celdaDealer=arrayCeldasConPersonajes[i].celda;
                                break;
                            }
                        }

                        for(let i=0;i<arrayCeldasConPersonajes.length; i++){
                            
                            if( personajeActualMovimiento.id != arrayCeldasConPersonajes[i].personaje.id){
                                if(validarAtaquePersonaje( personajeActualMovimiento, celdaDealer, arrayCeldasConPersonajes[i].celda)==true){    
                                    console.log( celda.personajeActivo.tipo+ " tiene " + arrayCeldasConPersonajes[i].personaje.tipo +" en rango");
                                    atacarPersonaje(celda.personajeActivo,arrayCeldasConPersonajes[i].personaje);
                                }
                           
                            }
                             
                             
                         }
                         for(let i=0;i<arrayCeldasConPersonajes.length; i++){
                             if(isDead(arrayCeldasConPersonajes[i].personaje)==true){
                                document.getElementById(arrayCeldasConPersonajes[i].celda).style.backgroundImage= ''; 
                                 arrayCeldasConPersonajes.splice(i,1);
                               
                             }
                         }
                        

                    }
                   
                    

                }else{
                    let tipoNow = personajeActualMovimiento.tipo;
                    let idNow = personajeActualMovimiento.id;
                    let celNow = arrayCeldasConPersonajes[posicionPersonajeArray].celda;                    

                    if(validarAtaqueCastillo(personajeActualMovimiento, arrayCeldasConPersonajes[posicionPersonajeArray].celda)==true){
                        atacarCastillo(personajeActualMovimiento);
                                                
                        if(personajeActualMovimiento.id==1){
                            document.getElementById('c10').style.backgroundImage = 'url(../Imagenes/BigBangGif.gif), ' + 'url(../Imagenes/Castillos/Castillo1-0.png),' + 'url(../Imagenes/UI/frame_red.png)';
                        }else{
                            document.getElementById('c91').style.backgroundImage = 'url(../Imagenes/BigBangGif.gif),' + 'url(../Imagenes/Castillos/Castillo2-0.png),' + 'url(../Imagenes/UI/frame_red.png)';
                        }
                        boomAudio.volume = 1;
                        boomAudio.play();
                        boomAudio.loop = false;

                        setAtkAnim(idNow,tipoNow,celNow);                        
                        setIdleAnim(idNow,tipoNow,celNow);

                    }

                }
              
                

            });
             

            fila.appendChild(celda);
        }
        tablero.appendChild(fila);
    }
   

    setCasillas();
    esconderGemasPower();
}

const setAtkAnim = (id, tipo, celda) =>{
    let urlImagenPersonaje;
    
    if(id == 1){ //usuario 1

        
        switch (tipo) {
            case 'Arquero':
                //Arquero
                urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherAttackRight.gif)';
                break;
            case 'Espadachin':
                //Espadach??n
                urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanAttackRight.gif)';
                break;
            case 'Asesino':
                //Asesino
                urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinAttackRight.gif)';
                break;

            case 'Berserquer':
                //Bersequer
                urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkAttackRight.gif)';
                break;
            case 'Espia':
                //Esp??a
                urlImagenPersonaje = 'url(../Imagenes/Characters/SpyAttackRight.gif)';
                break;

            case 'Jinete':
                //Jinete
                urlImagenPersonaje = 'url(../Imagenes/Characters/KnightAttackRight.gif)';
                break;
            case 'Mago':
                //Mago
                urlImagenPersonaje = 'url(../Imagenes/Characters/MageAttackRight.gif)';
                break;
        }
    }else{ //usuario 2
        switch (tipo) {
            case 'Arquero':
                //Arquero
                urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherAttackLeft.gif)';
                break;
            case 'Espadachin':
                //Espadach??n
                urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanAttackLeft.gif)';
                break;
            case 'Asesino':
                //Asesino
                urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinAttackLeft.gif)';
                break;

            case 'Berserquer':
                //Bersequer
                urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkAttackLeft.gif)';
                break;
            case 'Espia':
                //Esp??a
                urlImagenPersonaje = 'url(../Imagenes/Characters/SpyAttackLeft.gif)';
                break;

            case 'Jinete':
                //Jinete
                urlImagenPersonaje = 'url(../Imagenes/Characters/KnightAttackLeft.gif)';
                break;
            case 'Mago':
                //Mago
                urlImagenPersonaje = 'url(../Imagenes/Characters/MageAttackLeft.gif)';
                break;
        }


    }

    document.getElementById(celda).style.backgroundImage = urlImagenPersonaje;
    

}

async function setIdleAnim  (id, tipo, celda) {
    let urlImagenPersonaje;
    
    if(id == 1){ //usuario 1

        
        switch (tipo) {
            case 'Arquero':
                //Arquero
                urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherIdleRight.gif)';
                break;
            case 'Espadachin':
                //Espadach??n
                urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanIdleRight.gif)';
                break;
            case 'Asesino':
                //Asesino
                urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinIdleRight.gif)';
                break;

            case 'Berserquer':
                //Bersequer
                urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkIdleRight.gif)';
                break;
            case 'Espia':
                //Esp??a
                urlImagenPersonaje = 'url(../Imagenes/Characters/SpyIdleRight.gif)';
                break;

            case 'Jinete':
                //Jinete
                urlImagenPersonaje = 'url(../Imagenes/Characters/KnightIdleRight.gif)';
                break;
            case 'Mago':
                //Mago
                urlImagenPersonaje = 'url(../Imagenes/Characters/MageIdleRight.gif)';
                break;
        }
    }else{ //usuario 2
        switch (tipo) {
            case 'Arquero':
                //Arquero
                urlImagenPersonaje = 'url(../Imagenes/Characters/ArcherIdleLeft.gif)';
                break;
            case 'Espadachin':
                //Espadach??n
                urlImagenPersonaje = 'url(../Imagenes/Characters/SwordsmanIdleLeft.gif)';
                break;
            case 'Asesino':
                //Asesino
                urlImagenPersonaje = 'url(../Imagenes/Characters/AssasinIdleLeft.gif)';
                break;

            case 'Berserquer':
                //Bersequer
                urlImagenPersonaje = 'url(../Imagenes/Characters/BerserkIdleLeft.gif)';
                break;
            case 'Espia':
                //Esp??a
                urlImagenPersonaje = 'url(../Imagenes/Characters/SpyIdleLeft.gif)';
                break;

            case 'Jinete':
                //Jinete
                urlImagenPersonaje = 'url(../Imagenes/Characters/KnightIdleLeft.gif)';
                break;
            case 'Mago':
                //Mago
                urlImagenPersonaje = 'url(../Imagenes/Characters/MageIdleLeft.gif)';
                break;
        }


    }
    await sleep(3000);
    document.getElementById(celda).style.backgroundImage = urlImagenPersonaje;
    

}


const setCasillas = () => {
    let celdas = document.getElementsByTagName('td');
    let casillas = obtenerCasillas();
    
    for (let i = 0; i < celdas.length; i++) {
        for (let j = 0; j < casillas.length; j++) {

            /*if (casillas[j].tipo == "CasillaGema") {
                switch (casillas[j].data) {
                    case "GemaVerde":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/greenGemGif.gif)';
                        break;

                    case "GemaAzul":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/BlueGif.gif)';
                        break;

                    case "GemaBlanca":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/whiteGemGif.gif)';
                        break;
                    default:
                        break;
                }
            } else */
            if (casillas[j].tipo == "CasillaPowerUp") {
                switch (casillas[j].data) {
                    case "MejoraAtaque":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/PowUpGif.gif)';
                        break;
                    case "MejoraDefensa":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/DefUpGif.gif)';
                        break;

                    case "TrampaAtaque":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/PowDwnGif.gif)';
                        break;

                    case "TrampaDefensa":
                        celdas[casillas[j].id].style.backgroundImage = 'url(../Imagenes/PowerUps/DefDwnGif.gif)';
                        break;
                    default:
                        break;
                }
            } else if (casillas[j].tipo == "CasillaNormal") {
                //celdas[j].style.backgroundImage += ',url(../Imagenes/green_texture.png)';

            }
        }



    }
}




//VERIFICA QUE EL N??MERO ALEATORIO NO SE HAYA UTILIZADO
function verifyNumber(mas2Jugadores, celdasEspecialesArray, randomNumberCell) {
    let casillaRepetida = false;
    for (let casillasInvalidas = 0; casillasInvalidas < celdasEspecialesArray.length; casillasInvalidas++) {
        if (celdasEspecialesArray.length > 0) {
            if (mas2Jugadores == true) {

                if (randomNumberCell == celdasEspecialesArray[casillasInvalidas] || randomNumberCell == 91 || randomNumberCell == 10 || randomNumberCell == 1 || randomNumberCell == 100) {
                    casillaRepetida = true;
                }
            } else {
                if (randomNumberCell == celdasEspecialesArray[casillasInvalidas] || randomNumberCell == 91 || randomNumberCell == 10) {
                    casillaRepetida = true;

                }
            }
        }
    }
    return casillaRepetida;
}

//DEVUELVE EL TIPO DE GEMA
function tipoGema(numero) {
    let tipo;
    switch (numero) {
        case 1:
            tipo = "verde";
            break;
        case 2:
            tipo = "azul";
            break;
        case 3:
            tipo = "blanca";
            break;
    }

    return tipo;
}

//DEVUELVE EL TIPO DE POWER UP
function tipoPowerUp(numero) {
    let tipo;
    switch (numero) {
        case 1:
            tipo = "aumento-ataque";
            break;
        case 2:
            tipo = "aumento-defensa";
            break;
        case 3:
            tipo = "trampa-ataque";
            break;
        case 4:
            tipo = "trampa-defensa"
    }

    return tipo;
}


function fondo() {
    
    imgBody.style.backgroundImage = sessionStorage.getItem('fondoPantalla');
    
}

fondo();