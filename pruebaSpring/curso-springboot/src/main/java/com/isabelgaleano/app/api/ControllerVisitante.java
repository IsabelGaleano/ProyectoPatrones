package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorVisitante;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/visitante")
public class ControllerVisitante {
    private GestorVisitante gestorVisitante = new GestorVisitante();

    @PostMapping
    @CrossOrigin
    public ResponseEntity<List<Personaje>> create (@RequestBody Personaje personaje) {
        List<Personaje> personajes = gestorVisitante.visitarPersonajes(personaje);
        return ResponseEntity.ok(personajes);
    }

}
