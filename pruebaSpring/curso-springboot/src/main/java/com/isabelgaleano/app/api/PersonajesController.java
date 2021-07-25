package com.isabelgaleano.app.api;


import com.isabelgaleano.app.Gestores.GestorFabricaAbstracta;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/personajes")
public class PersonajesController {

    private GestorFabricaAbstracta gestorFabrica;

    @CrossOrigin
    @GetMapping("/{opcion}")
    public ResponseEntity<ArrayList<Personaje>> getPersonajes(@PathVariable(value = "opcion") int opcion) {

        ArrayList<Personaje> personajes = gestorFabrica.crearPersonaje(opcion);
        return ResponseEntity.ok().body(personajes);

    }

}
