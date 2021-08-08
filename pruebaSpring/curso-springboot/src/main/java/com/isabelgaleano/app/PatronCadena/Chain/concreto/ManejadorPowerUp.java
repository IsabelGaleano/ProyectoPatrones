package com.isabelgaleano.app.PatronCadena.Chain.concreto;

import com.isabelgaleano.app.Modelo.PersonajeChain;
import com.isabelgaleano.app.PatronCadena.Chain.abstracto.Manejador;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraDefensa;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerDownAtaque;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerDownDefensa;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class ManejadorPowerUp extends Manejador {
    @Override
    public void manejar(PersonajeChain personaje) {
        ObjetoDecorado decorador;

        if(personaje.getTipoCasilla().equals("MejoraAtaque")){
            if (personaje.getPowerUp() == null){
                personaje.setPowerUp(new MejoraAtaque());

            }else if(personaje.isCambio()){
                personaje.setPowerUp(new MejoraAtaque());
            }

            /*
            Actualizar el atributo ataque automaticamente
            decorador = new PowerUpAtaque();
            decorador.setPersonaje(personaje);
            decorador.actualizar();

            */



        }else if(personaje.getTipoCasilla().equals("TrampaAtaque")){
            decorador = new PowerDownAtaque();
            decorador.setPersonaje(personaje);
            decorador.actualizar();

        }
        else if(personaje.getTipoCasilla().equals("MejoraDefensa")){
            if (personaje.getPowerUp() == null){
                personaje.setPowerUp(new MejoraDefensa());
            }else if(personaje.isCambio()){
                personaje.setPowerUp(new MejoraDefensa());
            }
            /*
            Actualizar el atributo defensa automaticamente
            decorador = new PowerUpDefensa();
            decorador.setPersonaje(personaje);
            decorador.actualizar();

             */

        }
        else if(personaje.getTipoCasilla().equals("TrampaDefensa")){
            decorador = new PowerDownDefensa();
            decorador.setPersonaje(personaje);
            decorador.actualizar();


        }else{
            this.getNextInChain().manejar(personaje);
        }


    }
}
