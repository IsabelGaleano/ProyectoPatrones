package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorDecorador;
import com.isabelgaleano.app.Modelo.PersonajeChain;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/decorador")
public class ControllerDecorador {
    private GestorDecorador gestorDecorador = new GestorDecorador();

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseBody
    public PersonajeChain savePerson(@RequestBody PersonajeChain personaje) {
        PersonajeChain response =  gestorDecorador.activar(personaje);
        return response;
    }
}
