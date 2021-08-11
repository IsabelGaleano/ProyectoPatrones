package com.isabelgaleano.app.api;

import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
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
    //Create a new JUGADOR
    public ResponseEntity<?> create (@RequestBody JugadorObject jugadorObject) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jugadorService.save(jugadorObject));
    }

    //Leer un jugador
    @CrossOrigin
    @GetMapping("/{alias}")
    public ResponseEntity<?> read(@PathVariable(value = "alias") String alias) {
        Optional<JugadorObject> optionalJugador = jugadorService.findByAlias(alias);
        if (!optionalJugador.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(optionalJugador);
    }

    //Actualizar un jugador
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
        if (!jugador.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        jugador.get().setIdCastillo(jugadorDetails.getIdCastillo());

        return  ResponseEntity.status(HttpStatus.CREATED).body(jugadorService.save(jugador.get()));
    }

    /*
    //@RequestMapping("/jugador")
    @RequestMapping(path = "/jugador/{turno}/{nombreUsuario}", method = RequestMethod.GET)
    //public JugadorObject jugador(@RequestParam(value = "turno", defaultValue = "Talvez") int turno) {
    public JugadorObject jugador(@PathVariable int turno, @PathVariable String nombreUsuario) {
        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = new JugadorObject();
        jO.setTurno(jP.turnoJugador(turno));
        return jO;
    }*/


    //Eliminar un jugador
    @DeleteMapping("/{alias}")
    public ResponseEntity<?> delete(@PathVariable(value = "alias")String alias) {
        if (!jugadorService.findByAlias(alias).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        jugadorService.deleteByAlias(alias);
        return ResponseEntity.ok().build();
    }

    //Leer todos los jugadores
    @CrossOrigin(origins = "*")
    @GetMapping
    public List<JugadorObject> readAll() {
        List<JugadorObject> jugadores = StreamSupport
                .stream(jugadorService.findAll().spliterator(), false)
                .collect(Collectors.toList());

        return jugadores;

    }


    //@RequestMapping(value = "/x", method=RequestMethod.POST,headers = "Accept=*/*",produces = "application/json", consumes="application/json")
    //Prueba api con objetos
    /*public User get2Product(@RequestBody User user) {
        User usuario = user;
        user.setName("Prueba");
        return user;
    }*/

    @RequestMapping("/hello")
    public String helloWorld() {
        return "hello world";
    }

}
