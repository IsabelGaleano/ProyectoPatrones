package com.isabelgaleano.app.patronDecorador.decoradorConcreto;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

public class PowerUpAtaque extends ObjetoDecorado {

    @Override
    public void actualizar() {
        this.personaje.getAtaque().setPuntos(this.personaje.getAtaque().getPuntos() + this.personaje.getPowerUp().getStatMod());
        this.personaje.setEstadoDecorado(true);
    }


}
