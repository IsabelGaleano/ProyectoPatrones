package com.isabelgaleano.app.api;

import com.isabelgaleano.app.proxy.implementacion.JugadorProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController

public class ProxyController {

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
    @RequestMapping(value = "/proxy", method=RequestMethod.POST,headers = "Accept=*/*",produces = "application/json", consumes="application/json")
//Prueba api con objetos
    public List<JugadorObject> get2Product(@RequestBody List<JugadorObject> jugs) {
        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = jug;
        jO.setTurno(jP.turnoJugador(jO.getEstado()));
        return user;
    }


}
