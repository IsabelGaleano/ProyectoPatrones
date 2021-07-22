function incializarDatosPopUp (){
  var jugador = { 'id': 1, 'userName': 'jugador1', 
  datos: {
    ballestas:[{vida:5}, {vida:1}],
    catapulta:[{vida:3}, {vida:2}],
    personajes: [1,2,3]
  }
};

// Put the object into storage
localStorage.setItem(jugador.id, JSON.stringify(jugador));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('jugador');    
}

function obtenerDatosUsuario(id) {
  return JSON.parse(localStorage.getItem(id));
}