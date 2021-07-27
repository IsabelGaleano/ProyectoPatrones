package com.isabelgaleano.app.api;
import com.isabelgaleano.app.Gestores.GestorTablero;
import com.isabelgaleano.app.Modelo.Jugadores;
import com.isabelgaleano.app.Tablero.Tablero;
import com.isabelgaleano.app.service.JugadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/tablero")
public class TableroController {
    private GestorTablero gestorTablero = new GestorTablero();
    @Autowired
    private JugadorService jugadorService;

    @CrossOrigin
    @PostMapping("/crearTablero")
    public ResponseEntity<Tablero> crearTablero(@RequestBody Jugadores jugadores) {
        ArrayList<JugadorObject> jugadoresArr = new ArrayList<JugadorObject>();

        String[] elements = jugadores.getJugadores().split(",");

        for (String p: Arrays.asList(elements)) {
            Optional<JugadorObject> jugador = jugadorService.findByAlias(p);
            if (jugador.isPresent()) {
                jugadoresArr.add(jugador.get());
            }
        }

        Tablero tablero = gestorTablero.crearTablero(jugadoresArr);
        if (tablero == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(tablero);

    }

}
