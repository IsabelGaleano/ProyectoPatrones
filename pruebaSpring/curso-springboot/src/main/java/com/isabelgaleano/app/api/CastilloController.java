package com.isabelgaleano.app.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/castillos")
public class CastilloController {

    private int cantidadCastillos;

    @CrossOrigin
    @GetMapping("/{cantidad}")
    public ResponseEntity<Object> obtener(@PathVariable(value = "cantidad") int cantidad) {
        this.cantidadCastillos = cantidad;
        if (cantidadCastillos == 0) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cantidadCastillos);
    }

    public int getCantidadCastillos() {
        return cantidadCastillos;
    }

    public void setCantidadCastillos(int cantidadCastiilos) {
        this.cantidadCastillos = cantidadCastiilos;
    }
}
