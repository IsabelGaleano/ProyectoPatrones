package com.isabelgaleano.app.PatronCadena.Chain.abstracto;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public abstract class Manejador {
    private Manejador nextInChain;

    public Manejador getNextInChain() {
        return nextInChain;
    }

    public void setNextInChain(Manejador nextInChain) {
        this.nextInChain = nextInChain;
    }

    public abstract void manejar(Personaje personaje, String tipoCasilla);

}
