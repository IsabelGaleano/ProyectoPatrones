package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Asesino;

public class FabricaAsesino implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Asesino elAsesino = new Asesino();
        return elAsesino;
    }
}
