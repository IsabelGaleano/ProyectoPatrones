package com.isabelgaleano.app.patronFabrica.fabricaConcreta;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espia;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Jinete;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Mago;

public class FabricaMago implements IPersonajesJuego {
    public Personaje crearPersonajes() {
        Mago elMago = new Mago(0, 10, 10, 2,3, new Ataque(7, 6,3),0,2,"Inactivo", null,"Mago",false);
        return elMago;
    }
}

