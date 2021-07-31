package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

public class FabricaArquero implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Arquero elArquero = new Arquero(0, 10, 10, 3,3, new Ataque(1, 3,4),0,2,"Inactivo", null,"Arquero",false, 0);
        return elArquero;
    }
}
