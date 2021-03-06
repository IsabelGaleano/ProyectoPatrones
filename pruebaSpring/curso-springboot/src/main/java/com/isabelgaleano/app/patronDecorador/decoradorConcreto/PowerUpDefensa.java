package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerUpDefensa extends ObjetoDecorado {

    @Override
    public void actualizar() {
        this.personaje.setDefensa(this.personaje.getDefensa() + this.personaje.getPowerUp().getStatMod());
        this.personaje.setEstadoDecorado(true);
    }
}
