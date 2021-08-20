const audio =  new Audio('../Sounds/music_8bitJam.wav');  
const icon = document.querySelector("#btn_music > i");
const button = document.querySelector("#btn_music");
const volup = document.querySelector("#btn_volup");
const voldown = document.querySelector("#btn_voldwn");
const pics = document.querySelectorAll("profilepic");
const clickAudio1 = new Audio('../Sounds/buttonClickSound.wav');
clickAudio1.volume = 0.2;
audio.volume = 0.2;
audio.loop = true;
audio.play();
    

button.addEventListener("click", () => {
    if (audio.paused) {
      
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


volup.addEventListener("click", () => {
  clickAudio1.play();
  if (audio.volume <= 1 ) {
    audio.volume += 0.2;        
  } 
});

voldown.addEventListener("click", () => {
  clickAudio1.play();
  if (audio.volume >= 0.2 ) {
    audio.volume -= 0.2;    
  } 
});

  
