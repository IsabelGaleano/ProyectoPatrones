package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorVisitante;
import com.isabelgaleano.app.Modelo.PersonajesModelo;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.PipedWriter;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

class VisitanteRequest implements Serializable {
    private int id;
    private int defensa;
    private String tipoPowerUp;
    private int ataque;

    public VisitanteRequest() {
    }

    public VisitanteRequest(int id, int defensa, String tipoPowerUp, int ataque) {
        this.id = id;
        this.defensa = defensa;
        this.tipoPowerUp = tipoPowerUp;
        this.ataque = ataque;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }

    public String getTipoPowerUp() {
        return tipoPowerUp;
    }

    public void setTipoPowerUp(String tipoPowerUp) {
        this.tipoPowerUp = tipoPowerUp;
    }

    public int getAtaque() {
        return ataque;
    }

    public void setAtaque(int ataque) {
        this.ataque = ataque;
    }
}
@CrossOrigin
@RestController
@RequestMapping("/api/visitante")
public class ControllerVisitante {
    private GestorVisitante gestorVisitante = new GestorVisitante();

    /*@PostMapping
    public ResponseEntity<List<Personaje>> create (@RequestBody PersonajesModelo personajesModelo) {

        List<Personaje> personajes1 = gestorVisitante.visitarPersonajes(personajesModelo.getListPersonajes());
        return ResponseEntity.ok(personajes1);
    }*/

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseBody
    public List<VisitanteRequest> savePerson(@RequestBody List<VisitanteRequest> listPersonajes) {
        List<VisitanteRequest> response = new ArrayList<VisitanteRequest>();
        for (VisitanteRequest personaje : listPersonajes) {
            response.add(personaje);
        }
        return response;
    }
    /*
    @CrossOrigin
    @PostMapping("/visitarPersonaje")
    public ResponseEntity<List<Personaje>> visitar(@RequestBody Arquero arquero) {
        List<Personaje> personajes1 = gestorVisitante.visitarPersonaje(arquero);

        return ResponseEntity.ok(personajes1);
    }
*/
}
