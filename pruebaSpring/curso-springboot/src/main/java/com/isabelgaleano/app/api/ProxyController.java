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
    /*
    @RequestMapping(path = "/proxy/{turno}/{nombreUsuario}", method = RequestMethod.GET)
    public JugadorObject jugador(@PathVariable int turno, @PathVariable String nombreUsuario) {
    //public JugadorObject jugador(@PathVariable(value = "turno") int turno, @PathVariable(value = "nombreUsuario") String nombreUsuario) {
        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = new JugadorObject();
        jO.setTurno(jP.turnoJugador(turno));
        return jO;
    }*/

    //Modificar para que reciba todos los jugadores y los evalue
    //@RequestMapping(value = "/proxy", method=RequestMethod.POST,headers = "Accept=*/*",produces = "application/json", consumes="application/json")
    /*
    @RequestMapping(value = "/proxy", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<JugadorObject> get2Product(@RequestBody List<JugadorObject> jugs) {

        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = new JugadorObject();
        for (JugadorObject jugador : jugs) {
            jugador.setTurno(jP.turnoJugador(jugador.getEstado()));
        }

        return jugs;
    }*/
    /*
    @CrossOrigin
    @PostMapping("/turnos")
    public ResponseEntity<List<JugadorObject>> proxy(@RequestBody List<JugadorObject> jugs) {
        System.out.println(jugs.size());
        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = new JugadorObject();
        for (JugadorObject jugador : jugs) {
            System.out.println(jugador.toString());
            jugador.setTurno(jP.turnoJugador(jugador.getEstado()));
        }

        return ResponseEntity.ok(jugs);

    }*/
    //@RequestMapping(value = "/proxy", method = RequestMethod.POST,headers = "Accept=*/*", produces = "application/json; charset=utf-8; text/plain", consumes="application/json; charset=utf-8; text/plain")
    /*
    @PostMapping("/turnos")
    public ResponseEntity<ArrayList<JugadorObject>> proxy(@RequestBody Jugadores jugadores) {
        ArrayList<JugadorObject> jugadoresArr = new ArrayList<JugadorObject>();

        String[] elements = jugadores.getJugadores().split(",");

        for (String p: Arrays.asList(elements)) {
            Optional<JugadorObject> jugador = jugadorService.findByAlias(p);
            if (jugador.isPresent()) {
                jugadoresArr.add(jugador.get());
            }
        }


        return ResponseEntity.ok().body(jugadoresArr);

    }

     */
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

        //PROXY
        /*
        JugadorProxy jP = new JugadorProxy();
        for (JugadorObject jugador : jugadoresArr) {
            System.out.println(jugador.toString());
            jugador.setTurno(jP.turnoJugador(jugador.getEstado()));
            jugadorService.save(jugador);
        }*/

        return ResponseEntity.ok().body(jugadoresArr);

    }

}
