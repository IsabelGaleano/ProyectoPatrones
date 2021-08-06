
const jugadorAct=()=>{
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;
    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });

    return jugador;
}
const intentarCompra=async(e)=>{
    await crearDefensa(1);

}
const defensasJugador= async()=>{
    let arrdefensas=[];
    let idCastillo=jugadorAct().idCastillo;
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let castillos=obj.castillos;
    for (let i = 0; i < castillos.length; i++) {
        if (idCastillo == castillos[i].id) {
     
            if (castillos[i].defensas == null) {
                return arrdefensas;
            } else {
                for(let j=0;j<castillos[i].defensas.length;j++){
                    arrdefensas[j]=[...castillos[i].defensas[j]];
                }
            
                             
        }

    }
    console.log(arrdefensas);

    


}
return arrdefensas;
}
const crearDefensa=async(opcion)=>{

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;

    obj.jugadores.forEach(element => {
        if(element.turno){
            jugador= element;
        }
        
    });
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
    return defensas;
    
}

const agregarDefensaCastillo= async(opcion, costo)=>{
    let arraydefensa = [];
    arrayDefensa = await crearDefensa(opcion);
    
    console.log(arrayDefensa);
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;
   
    let defensaComprada= false;
    let [defensa] = arraydefensa;

    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });
    let idCastillo = jugador.idCastillo;
    let castillos = obj.castillos;

        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
                if (castillos[i].defensas == null) {
                    castillos[i].defensas = defensa;
                } else { 
                    castillos[i].defensas = [...castillos[i].defensas, defensa];
                }
                
            }
            obj.castillos[i] = castillos[i];             
       
    } 
    sessionStorage.setItem('tablero', JSON.stringify(obj));    
    }



   

document.querySelector('#btn-comprar-ballesta-OK').addEventListener('click', intentarCompra);
