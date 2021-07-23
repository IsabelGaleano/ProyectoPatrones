package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerDownAtaque;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerDownDefensa;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerUpAtaque;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerUpDefensa;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class ManejadorPowerUp extends Manejador {
    @Override
    public void manejar(Personaje personaje, Casilla casilla, ArrayList<Personaje> decorados) {
        ObjetoDecorado decorador;

        if(casilla.getData().equalsIgnoreCase("MejoraAtaque")){
            decorador = new PowerUpAtaque();
            decorador.setPersonaje(personaje);
            decorador.actualizar();



        }else if(casilla.getData().equalsIgnoreCase("TrampaAtaque")){
            decorador = new PowerDownAtaque();
            decorador.setPersonaje(personaje);
            decorador.actualizar();

        }
        else if(casilla.getData().equalsIgnoreCase("MejoraDefensa")){
            decorador = new PowerUpDefensa();
            decorador.setPersonaje(personaje);
            decorador.actualizar();

        }
        else if(casilla.getData().equalsIgnoreCase("TrampaDefensa")){
            decorador = new PowerDownDefensa();
            decorador.setPersonaje(personaje);
            decorador.actualizar();


        }else{
            this.getNextInChain().manejar(personaje, casilla, decorados);
        }


    }
}
