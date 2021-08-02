package com.isabelgaleano.app.Gestores;

import com.isabelgaleano.app.patronFabrica.fabricaAbstracta.IPersonajesJuego;
import com.isabelgaleano.app.patronFabrica.fabricaConcreta.*;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Bersequer;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;

import java.util.ArrayList;

public class GestorFabricaAbstracta {


    public GestorFabricaAbstracta() {
    }

    private static ArrayList<Personaje> personajes = new ArrayList<Personaje>();

    public static void crearFabricaPersonajes(IPersonajesJuego fabrica) {
        Personaje personaje = fabrica.crearPersonajes();
        agregarPersonaje(personaje);
    }



    private static void agregarPersonaje(Personaje personaje) {
        personajes.clear();
        personajes.add(personaje);
    }

    public static ArrayList<Personaje> crearPersonaje(int opcion) {
        IPersonajesJuego fabrica;
        switch (opcion) {

            case 1:
                fabrica = new FabricaArquero();
                crearFabricaPersonajes(fabrica);
                break;

            case 2:
                fabrica = new FabricaEspadachin();
                crearFabricaPersonajes(fabrica);
                break;

            case 3:
                fabrica = new FabricaAsesino();
                crearFabricaPersonajes(fabrica);
                break;

            case 4:
                fabrica = new FabricaBerserquer();
                crearFabricaPersonajes(fabrica);
                break;

            case 5:
                fabrica = new FabricaEspia();
                crearFabricaPersonajes(fabrica);
                break;

            case 6:
                fabrica = new FabricaJinete();
                crearFabricaPersonajes(fabrica);
                break;

            case 7:
                fabrica = new FabricaMago();
                crearFabricaPersonajes(fabrica);
                break;

            default:
                break;
        }
        return personajes;

    }


    public static ArrayList<Personaje> getPersonajes() {
        return personajes;
    }

    public static void setPersonajes(ArrayList<Personaje> personajes) {
        GestorFabricaAbstracta.personajes = personajes;
    }
}
