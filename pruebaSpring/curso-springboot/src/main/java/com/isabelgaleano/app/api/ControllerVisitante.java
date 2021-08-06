package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorVisitante;
import com.isabelgaleano.app.Modelo.PersonajesModelo;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.PipedWriter;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/visitante")
public class ControllerVisitante {
    private GestorVisitante gestorVisitante = new GestorVisitante();

    /*@PostMapping
    public ResponseEntity<?> create (@RequestBody PersonajesModelo personajes) {

        List<Personaje> personajes1 = gestorVisitante.visitarPersonajes(personajes.getListPersonajes());
        return ResponseEntity.ok().build();
    }*/

    @RequestMapping(method=RequestMethod.POST,consumes="application/json",produces="application/json")
    @ResponseBody
    public List<Personaje> savePerson(@RequestBody PersonajesModelo personajesRequest) {
        List<Personaje> response = new ArrayList<Personaje>();
        for (Personaje personaje: personajesRequest.getListPersonajes()){
            response.add(personaje);
        }
        return response;
    }

}
