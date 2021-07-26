package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Asesino;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;

public class FabricaBerserquer implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Bersequer elBerserquer = new Bersequer(4, 25, 15, 1,10, new Ataque(4, 10,2),0,6,"Inactivo", null,"Berserquer",false);
        return elBerserquer;
    }
}
