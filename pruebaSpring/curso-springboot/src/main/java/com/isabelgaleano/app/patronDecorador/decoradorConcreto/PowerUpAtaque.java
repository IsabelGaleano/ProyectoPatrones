package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerUpAtaque extends ObjetoDecorado {

    @Override
    public void actualizar() {
        this.personaje.getAtaque().setPuntos(this.personaje.getAtaque().getPuntos() + 2);
    }
}
