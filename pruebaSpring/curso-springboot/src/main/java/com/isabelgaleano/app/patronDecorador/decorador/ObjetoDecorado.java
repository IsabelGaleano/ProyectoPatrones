package com.isabelgaleano.app.patronDecorador.decorador;

import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public abstract class ObjetoDecorado  extends IPower{
    protected Personaje personaje;

    public Personaje getPersonaje() {
        return personaje;
    }

    public void setPersonaje(Personaje personaje) {
        this.personaje = personaje;
    }

    public abstract void actualizar();


}
