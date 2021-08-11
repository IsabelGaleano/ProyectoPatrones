let imgBallestaA=document.querySelector('.ballesta1')
imgBallestaA.style.opacity="0.2";
let imgBallestaB=document.querySelector('.ballesta2')
imgBallestaB.style.opacity="0.2";
let imgCatapulta=document.querySelector('.catapulta')
imgCatapulta.style.opacity="0.2";


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
       if(validarOro(5)){ 
        setMensaje("¡Ballesta Agregada!","../Imagenes/ui/okCheck.png");

        
    
        await agregarDefensaCastillo(1,5);}
         else{
            setMensaje("¡Oro insuficiente!","../Imagenes/ui/checkbox_01.png");
        }
    }
    else{
        setMensaje("!Ballestas llenas¡","../Imagenes/ui/checkbox_01.png");
    }
    abrirModalMensaje()
    visualDefensas();

}
const intentarCompraCatapulta=async(e)=>{
   
    if(espacioCatapulta()){
        if(validarOro(8)){
        setMensaje("¡Catapulta Agregada!","../Imagenes/ui/okCheck.png")
        await agregarDefensaCastillo(2,8);}
        else{
        setMensaje("¡Oro Insuficiente!","../Imagenes/ui/checkbox_01.png")
        }
    }
    else{
        setMensaje("¡Ya tienes una catapulta!","../Imagenes/ui/checkbox_01.png")
    }
    abrirModalMensaje()
    visualDefensas();
    

}


const setMensaje=(mensaje,imagenSrc)=>{
    document.getElementById("imganeMensaje").src=imagenSrc;
    let texto= document.getElementById("mensajeTexto");
    texto.innerHTML= mensaje;
}

const espacioBallesta = function(){
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let  idCastillo= jugadorAct().idCastillo;
   
    if(obj.castillos[idCastillo-1].defensas==null){
        return true;
    }
    let defensas = obj.castillos[idCastillo-1].defensas;
    
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
    let defensas = obj.castillos[idCastillo-1].defensas;
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

        res=false;
    }
    return res;

}
const validarOro=function(costo){
    let res= true;
    let idCastillo = jugadorAct().idCastillo;
    let obj =JSON.parse(sessionStorage.getItem('tablero'));
    let castillos= obj.castillos;
  
    let  oroJugador = castillos[idCastillo-1].oroJugador;

    if(oroJugador-costo<0){
        res = false;
    }
    return res;

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
    castillos[idCastillo - 1].oro -= costo;

        for (let i = 0; i < castillos.length; i++) {
            if (idCastillo == castillos[i].id) {
              if(castillos[i].defensas==null){
                    castillos[i].defensas=arrayDefensa;
                }else{ 
                    castillos[i].defensas.push(arrayDefensa[0]);
                } 
                   
                }
                obj.castillos[i] = castillos[i];
            }
               
                                     
    sessionStorage.setItem('tablero', JSON.stringify(obj));    
    
}
function visualDefensas(){
    let obj = JSON.parse(sessionStorage.getItem('tablero'));
    let  idCastillo= jugadorAct().idCastillo;
    let castillos= obj.castillos[idCastillo-1];

   
   
 
    let defensas = obj.castillos[idCastillo-1].defensas;
    
    let ballestas=0;
    let catapulta=0;
    
if(defensas!=null){
    for(let i=0;i<defensas.length;i++){
        if(defensas[i].tipo=="Ballesta"){
            ballestas++;
        }
        if(defensas[i].tipo=="Catapulta"){
            catapulta++;
        }

    }
    if(ballestas>=1){
        imgBallestaA.style.opacity="1";
        if(ballestas==2){
            imgBallestaB.style.opacity="1";
        }

      
    }
     else{ 
        imgBallestaA.style.opacity="0.2";
        imgBallestaB.style.opacity="0.2";

     }
    if(catapulta>=1){
        imgCatapulta.style.opacity="1";

    } else{
        imgCatapulta.style.opacity="0.2";

    }
 }

}
const reset= ()=>{
    
imgBallestaA.style.opacity="0.2";

imgBallestaB.style.opacity="0.2";

imgCatapulta.style.opacity="0.2";
   

}



document.querySelector('#btn-comprar-ballesta-OK').addEventListener('click', intentarCompraBallesta);
document.querySelector('#btn-comprar-Catapulta-OK').addEventListener('click', intentarCompraCatapulta);
