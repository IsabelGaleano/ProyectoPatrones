package com.isabelgaleano.app.PatronCadena.Chain.abstracto;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public abstract class Manejador {

    public abstract void manejar(Personaje personaje, Casilla casilla );

}
