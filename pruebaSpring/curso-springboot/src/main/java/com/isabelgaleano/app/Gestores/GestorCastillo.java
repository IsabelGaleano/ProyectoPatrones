package com.isabelgaleano.app.Gestores;

import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.api.CastilloController;

import java.util.ArrayList;

public class GestorCastillo {

    public  ArrayList<Castillo> getCastillos(int cantidadCastillos) {
        ArrayList<Castillo> castillos = new ArrayList<Castillo>();

        for (int i = 1; i <= cantidadCastillos; i++) {
            Castillo castillo = new Castillo(i, 30, 20,null, null);
            castillos.add(castillo);
        }

        return castillos;

    }


}
