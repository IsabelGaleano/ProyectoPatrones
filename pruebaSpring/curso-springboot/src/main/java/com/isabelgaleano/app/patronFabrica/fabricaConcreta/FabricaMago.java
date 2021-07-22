package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espia;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Mago;

public class FabricaMago implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Mago elMago = new Mago();
        return elMago;
    }
}

