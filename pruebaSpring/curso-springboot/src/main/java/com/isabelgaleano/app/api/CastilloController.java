package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.Gestores.GestorCastillo;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/castillos")
public class CastilloController {

    private int cantidadCastillos;
    private GestorCastillo gestorCastillo = new GestorCastillo();

    @CrossOrigin
    @GetMapping("/{cantidad}")
    public ResponseEntity<Object> obtenerCantidad(@PathVariable(value = "cantidad") int cantidad) {
        this.cantidadCastillos = cantidad;
        if (cantidadCastillos == 0) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cantidadCastillos);
    }

    @CrossOrigin
    @GetMapping("crear/{castillos}")
    public ResponseEntity<ArrayList<Castillo>> getCastillos(@PathVariable(value = "castillos") int pCastillos) {
        ArrayList<Castillo> castillos;
        castillos = gestorCastillo.getCastillos(pCastillos);
        return ResponseEntity.ok().body(castillos);

    }
}
