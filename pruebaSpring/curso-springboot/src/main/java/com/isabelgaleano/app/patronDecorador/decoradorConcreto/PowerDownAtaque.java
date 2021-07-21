package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerDownAtaque extends ObjetoDecorado {

    @Override
    public void actualizar() {
        this.personaje.getAtaque().setPuntos(getAtaque().getPuntos() - 2);
    }
}