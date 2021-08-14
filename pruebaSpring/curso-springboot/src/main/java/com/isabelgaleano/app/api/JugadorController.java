package com.isabelgaleano.app.api;

import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaGema;
import com.isabelgaleano.app.entity.User;
import com.isabelgaleano.app.proxy.implementacion.JugadorProxy;
import com.isabelgaleano.app.service.JugadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@CrossOrigin
@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {
    @Autowired
    private JugadorService jugadorService;


    @PostMapping
    @CrossOrigin

    public ResponseEntity<?> create (@RequestBody JugadorObject jugadorObject) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jugadorService.save(jugadorObject));
    }

    @CrossOrigin
    @GetMapping("/{alias}")
    public ResponseEntity<?> read(@PathVariable(value = "alias") String alias) {
        Optional<JugadorObject> optionalJugador = jugadorService.findByAlias(alias);
        if (!optionalJugador.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(optionalJugador);
    }

    @PutMapping("/{alias}")
    public ResponseEntity<?> update(@RequestBody JugadorObject jugadorDetails, @PathVariable(value = "alias")String alias) {
        Optional<JugadorObject> jugador = jugadorService.findByAlias(alias);
        if (!jugador.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        jugador.get().setEstado(jugadorDetails.getEstado());
        jugador.get().setOroGanado(jugadorDetails.getOroGanado());
        jugador.get().setPartidasGanadas(jugadorDetails.getPartidasGanadas());
        jugador.get().setPartidasPerdidas(jugadorDetails.getPartidasPerdidas());
        jugador.get().setTropasCompradas(jugadorDetails.getTropasCompradas());
        jugador.get().setTropasDerrotadas(jugadorDetails.getTropasDerrotadas());
        jugador.get().setTurno(jugadorDetails.getTurno());

        return  ResponseEntity.status(HttpStatus.CREATED).body(jugadorService.save(jugador.get()));
    }

    @PutMapping("updateIDCastillo/{alias}/{idCastillo}")
    public ResponseEntity<?> updateIDCastillo(@RequestBody JugadorObject jugadorDetails, @PathVariable(value = "alias")String alias ,
                                              @PathVariable(value = "idCastillo") int idCastillo) {
        Optional<JugadorObject> jugador = jugadorService.findByAlias(alias);
        jugadorDetails.setIdCastillo(idCastillo);
        jugadorDetails.setId((long) idCastillo);

        if (!jugador.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        jugador.get().setIdCastillo(jugadorDetails.getIdCastillo());
        jugador.get().setId(jugadorDetails.getId());


        return  ResponseEntity.status(HttpStatus.CREATED).body(jugadorService.save(jugador.get()));
    }


    @DeleteMapping("/{alias}")
    public ResponseEntity<?> delete(@PathVariable(value = "alias")String alias) {
        if (!jugadorService.findByAlias(alias).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        jugadorService.deleteByAlias(alias);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*")
    @GetMapping
    public List<JugadorObject> readAll() {
        List<JugadorObject> jugadores = StreamSupport
                .stream(jugadorService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return jugadores;

    }


    //PROXY
    @PostMapping("/pasarPersonajes")
    public List<JugadorObject> proxy(@RequestBody List<JugadorObject> listJugadores) {
        List<JugadorObject> response = listJugadores;
        JugadorProxy jP = new JugadorProxy();
        for (JugadorObject jugador : response) {
            //System.out.println(jugador.toString());
            jugador.setTurno(jP.turnoJugador(jugador.getEstado()));
        }
        return response;
    }


}
