package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espia;

public class FabricaEspia implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Espia elEspia = new Espia(0, 5, 2, 5,1, new Ataque(5, 1,3),0,10,"Inactivo", null,"Espia",false, false, 0);
        return elEspia;
    }
}
