package com.isabelgaleano.app.proxy.api;


import com.isabelgaleano.app.proxy.implementacion.JugadorProxy;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/api/jugador")
public class JugadorController {
    //@Autowired

    //@RequestMapping("/jugador")
    @RequestMapping(path = "/jugador/{turno}/{nombreUsuario}", method = RequestMethod.GET)
    //public JugadorObject jugador(@RequestParam(value = "turno", defaultValue = "Talvez") int turno) {
    public JugadorObject jugador(@PathVariable int turno, @PathVariable String nombreUsuario) {
        JugadorProxy jP = new JugadorProxy();
        JugadorObject jO = new JugadorObject();
        jO.setNombreUsuario(nombreUsuario);
        jO.setTurno(jP.turnoJugador(turno));
        return jO;
    }

    @RequestMapping("/hello")
    public String helloWorld() {
        return "hello world";
    }

}
