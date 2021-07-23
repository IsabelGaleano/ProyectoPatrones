package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerDownDefensa extends ObjetoDecorado {

    @Override
    public void actualizar() {
        this.personaje.setDefensa(this.personaje.getDefensa() - 2);
    }
}
