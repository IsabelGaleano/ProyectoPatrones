
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
const intentarCompraBallesta=async(e)=>{
    await agregarDefensaCastillo(1);

}
const intentarCompraCatapulta=async(e)=>{
    await agregarDefensaCastillo(2);

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
                    if(castillo[i].defensas[j].id){}
                   
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
    let arrayDefensa = [];
    arrayDefensa = await crearDefensa(opcion);

    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let jugador;
   

    obj.jugadores.forEach(function(element) {
        if (element.turno) {
            jugador = element;
        }
    });
    let idCastillo = jugador.idCastillo;
    let castillos = obj.castillos;

        for (let i = 0; i < castillos.length; i++) {
            //if (idCastillo == castillos[i].id) {
              if(castillos[i].defensas==null){
                    castillos[i].defensas=arrayDefensa;
                }else{
                
                    castillos[i].defensas.push(arrayDefensa[0]);}
                
               
                
                
                }
                obj.castillos[i] = castillos[i];  
                       
       
        
    sessionStorage.setItem('tablero', JSON.stringify(obj));    
    


}


document.querySelector('#btn-comprar-ballesta-OK').addEventListener('click', intentarCompraBallesta);
document.querySelector('#btn-comprar-Catapulta-OK').addEventListener('click', intentarCompraCatapulta);
