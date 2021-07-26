package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espia;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Jinete;

public class FabricaJinete implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Jinete elJinete = new Jinete(6, 15, 10, 6,4, new Ataque(6, 4,1),0,6,"Inactivo", null,"Jinete",false);
        return elJinete;
    }
}

