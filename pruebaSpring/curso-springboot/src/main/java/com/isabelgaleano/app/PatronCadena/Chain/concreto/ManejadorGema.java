package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.Modelo.PersonajeChain;
import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.proxy.implementacion.Jugador;

import java.util.ArrayList;

public class ManejadorGema extends Manejador {

    @Override
    public void manejar(PersonajeChain personaje) {
        if (personaje.getTipoCasilla().equals("GemaVerde")) {
            if (personaje.getOro() + 3 > personaje.getMaxOro()) {
                personaje.setOro(personaje.getMaxOro());
            } else {
                personaje.setOro(personaje.getOro() + 3);
            }


        } else if (personaje.getTipoCasilla().equals("GemaAzul")) {
            if (personaje.getOro() + 3 > personaje.getMaxOro()) {
                personaje.setOro(personaje.getMaxOro());
            } else {
                personaje.setOro(personaje.getOro() + 2);
            }


        } else if (personaje.getTipoCasilla().equals("GemaBlanca")) {
            if (personaje.getOro() + 3 > personaje.getMaxOro()) {
                personaje.setOro(personaje.getMaxOro());
            } else {
                personaje.setOro(personaje.getOro() + 1);
            }


        } else {
            getNextInChain().manejar(personaje);
        }
    }


}
