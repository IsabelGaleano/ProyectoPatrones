package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Modelo.Jugadores;
import com.isabelgaleano.app.Tablero.Tablero;
import com.isabelgaleano.app.proxy.implementacion.JugadorProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.isabelgaleano.app.service.JugadorService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/proxy")
public class ProxyController {
    @Autowired
    private JugadorService jugadorService;

    @PostMapping("/turnos/{orden}")
    public ResponseEntity<ArrayList<JugadorObject>> proxy(@RequestBody Jugadores jugadores, @PathVariable(value = "orden")int orden) {
        ArrayList<JugadorObject> jugadoresArr = new ArrayList<JugadorObject>();
        int contadorJugadores = 1;

        String[] elements = jugadores.getJugadores().split(",");
        JugadorProxy jP = new JugadorProxy();
        for (String p: Arrays.asList(elements)) {
            Optional<JugadorObject> jugador = jugadorService.findByAlias(p);
            if (jugador.isPresent()) {

                jugadoresArr.add(jugador.get());
            }
        }
        jugadoresArr.get(orden).setEstado(2);
        for(int i = 0; i < jugadoresArr.size(); i++) {
            JugadorObject jO = jugadoresArr.get(i);

            if(i != orden) {
                jO.setEstado(1);
            }
            jO.setTurno(jP.turnoJugador(jO.getEstado()));
            jugadorService.save(jO);
        }


        return ResponseEntity.ok().body(jugadoresArr);

    }

}
