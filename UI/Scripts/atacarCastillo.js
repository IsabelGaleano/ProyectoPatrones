let casilla;

let validarAtaqueCastillo= function(posX, posY, alcance){
    let cas=[10][10];

    let atacarCastilloA= false;
    let atacarCastilloB= false;
    let atacarCastilloC= false;
    let atacarCastilloD= false;

   // cas[0][0]=0;
    
    let resA=Math.abs(0-posX)+Math.abs(0-posY);
    let resB=Math.abs(9-posX)+Math.abs(0-posY);
    let resC=Math.abs(0-posX)+Math.abs(9-posY);
    let resD=Math.abs(9-posX)+Math.abs(9-posY);


    if(resA<=alcance){
        atacarCastilloA= true;
    }
    if(resB<=alcance){
        atacarCastilloB= true;
    }
    if(resC<=alcance){
        atacarCastilloC= true;
    }
    if(resD<=alcance){
        atacarCastilloD= true;
    }
    

    
    
}


window.atacarCastillo= atacarCastillo= async(idCastillo,dmg)=>{
    let obj= JSON.parse(sessionStorage.getItem('tablero'))
    let castillos= obj.castillos;

    for(let i=0;i<castillos.length;i++){
        if(castillos[i].id==idCastillo){
            castillos[i].vida=castillos[i].vida-dmg;
        }
        obj.castillos= castillos;
  
     }
     
     sessionStorage.setItem('tablero',JSON.stringify(obj));


    }
window.eventAtacarCastillo=  eventAtacarCastillo= async(e)=>{
        await atacarCastillo(2,10);

        }
           




document.querySelector('#Nickname').addEventListener('click', eventAtacarCastillo);



    


  

