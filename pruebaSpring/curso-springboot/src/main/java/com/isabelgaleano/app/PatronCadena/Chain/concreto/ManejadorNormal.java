package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.Modelo.PersonajeChain;
import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class ManejadorNormal extends Manejador {


    @Override
    public void manejar(PersonajeChain personaje) {
        if(personaje.getTipoCasilla().equals("CasillaNormal")){



        }else{
            System.out.println("Final de la cadena");
            //this.getNextInChain().manejar(personaje,casilla, decorados);
        }

    }
}
