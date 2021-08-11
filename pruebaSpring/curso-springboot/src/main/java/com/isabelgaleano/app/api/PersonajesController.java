package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorCadena;
import com.isabelgaleano.app.Gestores.GestorFabricaAbstracta;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/personajes")
public class PersonajesController {

    private GestorFabricaAbstracta gestorFabrica = new GestorFabricaAbstracta();
    private GestorCadena gestorCadena = new GestorCadena();

    @CrossOrigin
    @GetMapping("/{opcion}")
    public ResponseEntity<ArrayList<Personaje>> getPersonajes(@PathVariable(value = "opcion") int opcion) {

        ArrayList<Personaje> personajes = gestorFabrica.crearPersonaje(opcion);
        return ResponseEntity.ok().body(personajes);

    }

}
