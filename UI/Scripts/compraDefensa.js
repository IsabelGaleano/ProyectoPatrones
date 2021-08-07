
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
    if(espacioBallesta()){
        console.log("Agregando Ballesta!!");
    
    await agregarDefensaCastillo(1);
    }
    else{
        console.log("Ballestas llenas!!");
    }

}
const intentarCompraCatapulta=async(e)=>{
    if(espacioCatapulta()){
        console.log("Agregando Catapulta");
        await agregarDefensaCastillo(2);
    }
    else{
        console.log("Catapulta llena!!");
    }
    

}
const espacioBallesta = function(){
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let  idCastillo= jugadorAct().idCastillo;
   
    if(obj.castillos[idCastillo].defensas==null){
        return true;
    }
    let defensas = obj.castillos[idCastillo].defensas;
    
    let ballestas=0;

    for(let i=0;i<defensas.length;i++){
        if(defensas[i].tipo=="Ballesta"){
            ballestas++;
        }

    }
    if(ballestas>=2){
        return false;
    }
    return true;

}
const espacioCatapulta = function(){
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let  idCastillo= jugadorAct().idCastillo;
    let defensas = obj.castillos[idCastillo].defensas;
    let res= true;
    let catapultas=0;
    if(defensas!=null){
        for(let i=0;i<defensas.length;i++){
            if(defensas[i].tipo=="Catapulta"){
                catapultas++;
            }
    
        }
        
    }
    if(catapultas>=1){
        console.log("Ya existe Catapulta ")
        res=false;
    }
    return res;

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
                    castillos[i].defensas.push(arrayDefensa[0]);
                } 
                obj.castillos[i] = castillos[i];    
                }
               
                                     
    sessionStorage.setItem('tablero', JSON.stringify(obj));    
    
}


document.querySelector('#btn-comprar-ballesta-OK').addEventListener('click', intentarCompraBallesta);
document.querySelector('#btn-comprar-Catapulta-OK').addEventListener('click', intentarCompraCatapulta);
