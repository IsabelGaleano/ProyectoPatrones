package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class ManejadorGema extends Manejador {

    @Override
    public void manejar(Personaje personaje, Casilla casilla) {
        if(casilla.getTipo().equalsIgnoreCase("GemaVerde")){
            if(personaje.getCantOro()+3>personaje.getmaxOro()){
                personaje.setCantOro(personaje.getmaxOro());
            }
            personaje.setCantOro(personaje.getCantOro()+3);



        }else if(casilla.getTipo().equalsIgnoreCase("GemaAzul")){
            if(personaje.getCantOro()+3>personaje.getmaxOro()) {
                personaje.setCantOro(personaje.getmaxOro());
            }
            personaje.setCantOro(personaje.getCantOro()+2);

        }else if(casilla.getTipo().equalsIgnoreCase("GemaBlanca")){
            if(personaje.getCantOro()+3>personaje.getmaxOro()) {
                personaje.setCantOro(personaje.getmaxOro());
            }
            personaje.setCantOro(personaje.getCantOro()+2);

        }
        else{
        getNextInChain().manejar(personaje, casilla);}
    }


}
