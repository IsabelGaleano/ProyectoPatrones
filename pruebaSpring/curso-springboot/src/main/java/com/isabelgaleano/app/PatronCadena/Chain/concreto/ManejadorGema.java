package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.proxy.implementacion.Jugador;

import java.util.ArrayList;

public class ManejadorGema extends Manejador {

    @Override
    public void manejar(Personaje personaje, Casilla casilla, ArrayList<Personaje> decorados) {
        if (casilla.getData().equalsIgnoreCase("GemaVerde")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 3);

            }
            decorados.add(personaje);



        } else if (casilla.getData().equalsIgnoreCase("GemaAzul")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 2);
            }
            decorados.add(personaje);

        } else if (casilla.getData().equalsIgnoreCase("GemaBlanca")) {
            if (personaje.getCantOro() + 3 > personaje.getMaxOro()) {
                personaje.setCantOro(personaje.getMaxOro());
            } else {
                personaje.setCantOro(personaje.getCantOro() + 1);
            }
            decorados.add(personaje);

        } else {
            getNextInChain().manejar(personaje, casilla, decorados);
        }
    }


}
