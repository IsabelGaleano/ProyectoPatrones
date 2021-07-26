package com.isabelgaleano.app.api;


import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.Gestores.GestorTablero;
import com.isabelgaleano.app.Tablero.Tablero;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/tablero")
public class TableroController {
    private GestorTablero gestorTablero;


    @CrossOrigin
    @GetMapping("/crearTablero")
    public ResponseEntity<Tablero> crearTablero(@RequestBody ArrayList<JugadorObject> jugadores, ArrayList<Castillo> castillos) {

        Tablero tablero = gestorTablero.crearTablero(jugadores, castillos);
        return ResponseEntity.ok().body(tablero);

    }

}
