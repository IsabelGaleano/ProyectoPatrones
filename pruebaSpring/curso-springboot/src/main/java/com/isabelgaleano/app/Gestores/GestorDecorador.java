package com.isabelgaleano.app.Gestores;


import com.isabelgaleano.app.Modelo.PersonajeChain;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraDefensa;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerDownAtaque;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerUpAtaque;
import com.isabelgaleano.app.patronDecorador.decoradorConcreto.PowerUpDefensa;


public class GestorDecorador {
    private PersonajeChain personajeChain;

    public PersonajeChain activar (PersonajeChain personajeChain){
        ObjetoDecorado powerUp;
        switch (personajeChain.getActivar()){
            case 1:
                powerUp = new PowerUpAtaque();
                if (personajeChain.getPowerUp() == null) {
                    personajeChain.setPowerUp(new MejoraAtaque());
                }
                powerUp.setPersonaje(personajeChain);
                powerUp.actualizar();
                personajeChain = powerUp.getPersonaje();
                personajeChain.setPowerUp(null);
                break;
            case 2:
                powerUp = new PowerUpDefensa();
                if (personajeChain.getPowerUp() == null) {
                    personajeChain.setPowerUp(new MejoraDefensa());
                }
                powerUp.setPersonaje(personajeChain);
                powerUp.actualizar();
                personajeChain = powerUp.getPersonaje();
                personajeChain.setPowerUp(null);
                break;
        }

    return personajeChain;
    }

}
