let cartas = document.querySelectorAll(".card");
let fondoImg;


cartas.forEach(function(element){
    element.addEventListener("click", async function(){
        cartaClick(element.id)
    })
});

const cartaClick =(id)=> {    
    switch (id){
        case 'card1':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_01.png)';
            break;
        case 'card2':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_02.png)';
            break;
        case 'card3':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_03.png)';
            break;
        case 'card4':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_04.png)';
            break;
        case 'card5':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_05.png)';
            break;
        case 'card6':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_06.png)';
            break;
        case 'card7':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_07.png)';
            break;
        case 'card8':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_08.png)';
            break;
        case 'card9':
            fondoImg = 'url(../Imagenes/Backgrounds/bg_09.png)';
            break;
        default:
            fondoImg = 'url(../Imagenes/Backgrounds/bg_01.png)';
            break;
    }


    sessionStorage.setItem('fondoPantalla', fondoImg);

    window.location = "pantallaIntegrates.html";
}

