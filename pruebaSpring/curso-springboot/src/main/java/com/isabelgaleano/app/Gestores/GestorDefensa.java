package com.isabelgaleano.app.Gestores;

import com.isabelgaleano.app.Defensa.Ballesta;
import com.isabelgaleano.app.Defensa.Catapulta;
import com.isabelgaleano.app.Defensa.Defensa;
import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.fabricaConcreta.*;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class GestorDefensa {

    public GestorDefensa() {
    }

    public static ArrayList<Defensa> crearDefensa(int opcion) {
        Defensa defensa;
        ArrayList<Defensa> defensas = new ArrayList<Defensa>();
        switch (opcion) {

            case 1:
                defensa = new Ballesta("0",3,2,2,5,"Ballesta");
                defensas.clear();
                defensas.add(defensa);
                break;

            case 2:
                defensa = new Catapulta("0",3,5,2,8,"Catapulta");
                defensas.clear();
                defensas.add(defensa);
                break;

            default:
                break;
        }
        return defensas;

    }


}
