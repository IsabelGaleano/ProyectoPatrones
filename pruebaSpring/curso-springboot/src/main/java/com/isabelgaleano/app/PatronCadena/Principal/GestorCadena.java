package com.isabelgaleano.app.PatronCadena.Principal;

import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronCadena.Chain.concreto.ManejadorGema;
import com.isabelgaleano.app.PatronCadena.Chain.concreto.ManejadorNormal;
import com.isabelgaleano.app.PatronCadena.Chain.concreto.ManejadorPowerUp;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class GestorCadena {
   private  Manejador manejador;

    private Manejador configurar(){

        Manejador manejadorGema= new ManejadorGema();
        Manejador manejadorNormal = new ManejadorNormal();
        Manejador manejadorPowerUp = new ManejadorPowerUp();

        manejadorPowerUp.setNextInChain(manejadorGema);
        manejadorGema.setNextInChain(manejadorNormal);
        return manejadorPowerUp;

    }
    public void IniciarValidacion(Personaje personaje, Casilla casilla, ArrayList<Personaje> decorados){
        manejador= configurar();
        manejador.manejar(personaje,casilla, decorados);

    }
}