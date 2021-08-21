
let validarAtaquePersonaje= function(personaje, idCasillaP, idCasillaA){// recibe el personaje actual, la casilla actual y la posición del personaje a validar
    let posP =idCasillaP.split("c")[1];
    //coordenadas del personaje actual
    let posX_P = posP.split("")[0];
    let posY_P = posP.split("")[1];

    //coordenadas del personaje a validar (posiblemente atacado)


    let posA =idCasillaA.split("c")[1];
    let posX_A = posA.split("")[0];
    let posY_A = posA.split("")[1];

    let enRango =false; 
    let alcance= personaje.ataque.alcance;

    let resultado = Math.abs(posX_A - posX_P) + Math.abs(posY_A - posY_P);
    if(resultado <= alcance){
        enRango= true;
    }
    return enRango;
}

const atacarPersonaje= async(personajeP , personajeA)=>{
    let obj= JSON.parse(sessionStorage.getItem('tablero'));
    let castillos= obj.castillos;
    let muerto= false;
    let tropas= castillos[personajeA.id-1].tropas;
    let vidaAA;

    let idAtacado= personajeA.id;

    for(let i=0; i < tropas.length; i++){
        if(tropas[i].tipo==personajeA.tipo){
            if(tropas[i].id== idAtacado){
               
                tropas[i].vida = tropas[i].vida - personajeP.ataque.puntos;
                //vidaAA = tropas[i].vida - personajeP.ataque.puntos;
                
            }
        }
    }
    obj.castillos[personajeA.id-1].tropas= tropas;
    sessionStorage.setItem('tablero',JSON.stringify(obj));
   
    if(isDead(personajeA)==true){
        abrirModalMuerte(personajeA.tipo);
    }
    abrirModalAtaqueOverlay(personajeP.tipo, personajeA.tipo);
    
    
  

}
let isDead= function(personaje){

    let obj= JSON.parse(sessionStorage.getItem('tablero'));
    let castillos= obj.castillos;
    let dead= false;
    let posCastillo= parseInt(personaje.id )- 1;
 
    let tropas= castillos[posCastillo].tropas;
    if(tropas == "null"){
        dead=true;
    }

    for(let i=0;i<tropas.length;i++){
        
        if(tropas[i].tipo== personaje.tipo){
            if(tropas[i].vida<=0 ){
                dead=true;
                console.log(tropas[i].tipo+" muerto");

            }
        }

    }
    if(dead==true){
        removerDeTropas(personaje)
    }
    return dead;


    
    
}
let removerDeTropas= function(personaje){
    let obj= JSON.parse(sessionStorage.getItem('tablero'));
    let castillos= obj.castillos;
 
    let tropas= castillos[personaje.id-1].tropas;

    for(let i=0; i < tropas.length; i++){
        if(tropas[i].tipo==personaje.tipo){
            if(tropas.length==1){
                tropas= "null";
            }else{
                tropas.splice(i , 1); 
            }
                console.log(personaje.tipo+" borrado");
        }
    }
    obj.castillos[personaje.id-1].tropas= tropas;
    sessionStorage.setItem('tablero',JSON.stringify(obj));


}
    
    
    

let validarAtaqueCastillo= function(personaje, idCasilla ){
    
    let posF;
    let posC;
  
    let pos =idCasilla.split("c")[1];
    if(pos.length<2){
        posF= 0;
        posC= parseInt(pos.split("")[0]);
        


    }else{
        posF = parseInt(pos.split("")[0]);
         posC = parseInt(pos.split("")[1]);
        }


    let castilloAtacado = false;
    let alcance = personaje.ataque.alcance;

    
    if(personaje.id==1){
        castilloAtacado=2;
     
        
    }else{
        castilloAtacado=1;
    }

   let atacarCastillo= false;


    
    let resB= Math.abs(0-posF) +  Math.abs(10-posC); 
    let resA= Math.abs(9-posF) +  Math.abs(1-posC); 
   

    if(castilloAtacado == 2){
      if(resB <= alcance){
          
        atacarCastillo = true;
       
        }
    }      
    else if(castilloAtacado == 1){
        if(resA<=alcance){
         atacarCastillo=true;
        
    }
}

    return atacarCastillo;
}



const atacarCastillo= async(personaje)=>{

    let castilloAtacado;
    
    if(personaje.id==1){
        castilloAtacado=2;
     
        
    }else{
        castilloAtacado=1;
    }
    
    let obj= JSON.parse(sessionStorage.getItem('tablero'))
    let castillos= obj.castillos;

    if(castillos[castilloAtacado-1].vida != 0){
        castillos[castilloAtacado-1].vida = castillos[castilloAtacado-1].vida - personaje.ataque.puntos;

    }

    /*for(let i=0;i<castillos.length;i++){
        if(castillos[i].id==castilloAtacado){
            castillos[i].vida=castillos[i].vida-dmg;
        }
        obj.castillos= castillos;
  
     }*/

     sessionStorage.setItem('tablero',JSON.stringify(obj));
    abrirModalGame(jugadorAct().alias);

    }

    const eventAtacarCastillo= async(e)=>{
        await atacarCastillo(personajeActualMovimiento,idCelda);

    }
    








    


  

