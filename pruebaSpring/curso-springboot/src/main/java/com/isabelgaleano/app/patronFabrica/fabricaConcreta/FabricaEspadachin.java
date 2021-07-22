package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;

public class FabricaEspadachin implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Espadachin elEspadachin= new Espadachin();
        return elEspadachin;
    }
}