package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.proxy.implementacion.Jugador;

import java.util.ArrayList;

public class ManejadorGema extends Manejador {

    @Override
    public void manejar(Personaje personaje, String tipoCasilla) {
        if (tipoCasilla.equals("GemaVerde")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 3);
            }




        } else if (tipoCasilla.equals("GemaAzul")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 2);
            }


        } else if (tipoCasilla.equals("GemaBlanca")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 1);
            }


        } else {
            getNextInChain().manejar(personaje, tipoCasilla);
        }
    }


}
