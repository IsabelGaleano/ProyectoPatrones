let casilla;

let validarAtaqueCastillo= function(personaje,idCasilla){
  
    let pos =idCasilla.split("c")[1];
    let posX = pos.split("")[0];
    let posY = pos.split("")[1];


    let castilloAtacado;
    let alcance = personaje.ataque.alcance;

    
    if(personaje.id==1){
        castilloAtacado=2;
     
        
    }else{
        castilloAtacado=1;
    }

    let atacarCastillo = false;

    let resB=Math.abs(9-posX)+Math.abs(1-posY);
    let resA=Math.abs(0-posX)+Math.abs(10-posY);
   
   

    if(castilloAtacado == 1){
      if(resB <= alcance){
        atacarCastillo = true;
        cambiarColor("c10");
        }
    }      
    else if(castilloAtacado == 2){
    if(resA<=alcance){
        atacarCastillo= true;
         cambiarColor("c91");
    }
}

    return atacarCastillo;
}


const cambiarColor=function(idCasilla){
    document.getElementById(idCasilla).style.backgroundColor = 'rbga(0, 144, 234, 0.74)';
    document.getElementById(idCasilla).style.backgroundSize= '100px';
 
    
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


    }

    const eventAtacarCastillo= async(e)=>{
        await atacarCastillo(personajeActualMovimiento,idCelda);

    }









    


  

