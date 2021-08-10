const audio =  new Audio('../Sounds/music_8bitJam.wav');  
const icon = document.querySelector("#btn_music > i");
const button = document.querySelector("#btn_music");
const pics = document.querySelectorAll("profilepic");
audio.volume = 0.2;
audio.loop = true;
audio.play();
    

button.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.loop = true;
      audio.play();
      button.classList.add('fa-volume-up');
      button.classList.remove('fa-volume-mute');
      button.classList.add("fade");
      
      
    } else {
      audio.pause();
      button.classList.add('fa-volume-mute');
      button.classList.remove('fa-volume-up');
      button.classList.remove("fade");
    }    
    
  });

window.onload =
function frame(){
  pics.forEach(element => {
    let imagen = element.style.backgroundImage;
    element.style.backgroundImage = 'url(../Imagenes/ui/thinframesquare.png),' + imagen;
  });
};




  
