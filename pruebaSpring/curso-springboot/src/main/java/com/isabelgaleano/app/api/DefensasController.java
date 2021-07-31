package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Defensa.Defensa;
import com.isabelgaleano.app.Gestores.GestorDefensa;
import com.isabelgaleano.app.Gestores.GestorFabricaAbstracta;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/defensas")
public class DefensasController {


    private GestorDefensa gestorDefensa = new GestorDefensa();
    @CrossOrigin
    @GetMapping("/{opcion}")
    public ResponseEntity<ArrayList<Defensa>> getDefensas(@PathVariable(value = "opcion") int opcion) {

        ArrayList<Defensa> defensas = gestorDefensa.crearDefensa(opcion);
        return ResponseEntity.ok().body(defensas);

    }
}
