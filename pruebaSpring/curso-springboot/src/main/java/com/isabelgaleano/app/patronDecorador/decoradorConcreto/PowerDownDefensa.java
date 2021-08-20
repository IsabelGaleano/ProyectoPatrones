package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerDownDefensa extends ObjetoDecorado {

    @Override
    public void actualizar() {
        if ((this.personaje.getDefensa() - 2) < 0){
            this.personaje.setDefensa(0);
        } else {
            this.personaje.setDefensa(this.personaje.getDefensa() - 2);
        }
        this.personaje.setEstadoDecorado(true);
    }
}
