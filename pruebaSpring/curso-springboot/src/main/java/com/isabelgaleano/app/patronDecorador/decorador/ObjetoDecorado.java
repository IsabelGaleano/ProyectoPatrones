package com.isabelgaleano.app.patronDecorador.decorador;

import com.isabelgaleano.app.Modelo.PersonajeChain;
import com.isabelgaleano.app.patronDecorador.componente.IPower;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public abstract class ObjetoDecorado  extends IPower{
    protected PersonajeChain personaje;

    public PersonajeChain getPersonaje() {
        return personaje;
    }

    public void setPersonaje(PersonajeChain personaje) {
        this.personaje = personaje;
    }

    public abstract void actualizar();


}
