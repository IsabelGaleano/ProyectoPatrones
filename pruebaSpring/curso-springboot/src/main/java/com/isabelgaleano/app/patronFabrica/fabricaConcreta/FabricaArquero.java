package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;

public class FabricaArquero implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Arquero elArquero = new Arquero();
        return elArquero;
    }
}
