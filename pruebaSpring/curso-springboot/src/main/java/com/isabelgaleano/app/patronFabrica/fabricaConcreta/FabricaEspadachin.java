package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Asesino;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;

public class FabricaEspadachin implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Espadachin elEspadachin = new Espadachin(0, 15, 10, 2,5, new Ataque(2, 6,1),0,2,"Inactivo", null,"Espadachin",false, 0);
        return elEspadachin;
    }
}