package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;

public class PowerDownAtaque extends ObjetoDecorado {

    @Override
    public void actualizar() {
        if ((this.personaje.getAtaque().getPuntos() - 2) < 0){
            this.personaje.getAtaque().setPuntos(0);
        } else {
            this.personaje.getAtaque().setPuntos(this.personaje.getAtaque().getPuntos() - 2);
        }
        this.personaje.setEstadoDecorado(true);
    }
}
