package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Asesino;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;

public class FabricaBerserquer implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Bersequer elBerserquer = new Bersequer();
        return elBerserquer;
    }
}
