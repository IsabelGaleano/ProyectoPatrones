package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espia;

public class FabricaEspia implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Espia elEspia = new Espia();
        return elEspia;
    }
}
