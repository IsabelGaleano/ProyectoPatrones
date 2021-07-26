package com.isabelgaleano.app.patronFabrica.gestor;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class FabricaDelPersonaje {
    private static ArrayList<Personaje> losPersonajes = new ArrayList<>();



    public static void personajeListo(Personaje elPersonaje) {
        losPersonajes.add(elPersonaje);
    }


}
