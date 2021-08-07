package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorVisitante;
import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.Modelo.PersonajesModelo;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.PipedWriter;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/visitante")
public class ControllerVisitante {
    private GestorVisitante gestorVisitante = new GestorVisitante();

    /*@PostMapping
    public ResponseEntity<List<Personaje>> create (@RequestBody PersonajesModelo personajesModelo) {

        List<Personaje> personajes1 = gestorVisitante.visitarPersonajes(personajesModelo.getListPersonajes());
        return ResponseEntity.ok(personajes1);
    }*/

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseBody
    public List<PersonajeVisitante> savePerson(@RequestBody List<PersonajeVisitante> listPersonajes) {
        List<PersonajeVisitante> response = gestorVisitante.visitarPersonajes(listPersonajes);
        return response;
    }
    /*
    @CrossOrigin
    @PostMapping("/visitarPersonaje")
    public ResponseEntity<List<Personaje>> visitar(@RequestBody Arquero arquero) {
        List<Personaje> personajes1 = gestorVisitante.visitarPersonaje(arquero);

        return ResponseEntity.ok(personajes1);
    }
*/
}
