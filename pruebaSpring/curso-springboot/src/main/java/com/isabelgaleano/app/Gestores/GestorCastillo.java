package com.isabelgaleano.app.Gestores;

import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.api.CastilloController;

import java.util.ArrayList;

public class GestorCastillo {

    private static ArrayList<Castillo> castillos;

    public GestorCastillo() {
        this.castillos = new ArrayList<Castillo>();
    }

    public static ArrayList<Castillo> getCastillos(int cantidadCastillos) {

        for (int i = 1; i <= cantidadCastillos; i++) {
            Castillo castillo = new Castillo(i, 30, 20,null, null);
            castillos.add(castillo);
        }

        return castillos;
    }


}
