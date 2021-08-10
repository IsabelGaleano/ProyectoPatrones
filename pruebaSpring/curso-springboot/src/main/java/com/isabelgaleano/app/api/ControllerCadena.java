package com.isabelgaleano.app.api;

import com.isabelgaleano.app.Gestores.GestorCadena;
import com.isabelgaleano.app.Modelo.PersonajeChain;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @CrossOrigin
    @RestController
    @RequestMapping("/api/cadena")
    public class ControllerCadena {
        private GestorCadena gestorCadena = new GestorCadena();

        @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
        @ResponseBody
        public PersonajeChain savePerson(@RequestBody PersonajeChain listPersonajes) {
            PersonajeChain response = gestorCadena.IniciarValidacion(listPersonajes);
            return response;
        }
    }
