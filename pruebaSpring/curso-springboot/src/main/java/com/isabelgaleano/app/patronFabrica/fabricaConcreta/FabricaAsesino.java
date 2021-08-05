package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Asesino;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

public class FabricaAsesino implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Asesino elAsesino = new Asesino(0, 5, 10, 4,3, new Ataque(3, 3,2),0,2,"Inactivo", null,"Asesino",false, 0);
        return elAsesino;
    }
}
