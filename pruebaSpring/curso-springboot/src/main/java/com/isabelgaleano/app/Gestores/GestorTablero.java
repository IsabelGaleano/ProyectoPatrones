package com.isabelgaleano.app.Gestores;

import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.Tablero.Tablero;
import com.isabelgaleano.app.api.JugadorObject;

import java.util.ArrayList;

public class GestorTablero {

    public GestorTablero() {
    }

    private static Tablero tablero;
    private static GestorCasilla gestorCasilla = new GestorCasilla();
    private static ArrayList<Casilla> casillas;
    private static GestorCastillo gestorCastillo = new GestorCastillo();


    public static Tablero crearTablero(ArrayList<JugadorObject> jugadores) {
        casillas = (ArrayList<Casilla>) gestorCasilla.generarCasillas(jugadores.size());

        ArrayList<Castillo> castillos = gestorCastillo.getCastillos(jugadores.size());
        tablero = new Tablero(casillas,jugadores,castillos,null,0);
        return tablero;
    }

    public static Tablero getTablero() {
        return tablero;
    }

    public static GestorCasilla getGestorCasilla() {
        return gestorCasilla;
    }

    public static void setGestorCasilla(GestorCasilla gestorCasilla) {
        GestorTablero.gestorCasilla = gestorCasilla;
    }

    public static ArrayList<Casilla> getCasillas() {
        return casillas;
    }

    public static void setCasillas(ArrayList<Casilla> casillas) {
        GestorTablero.casillas = casillas;
    }

    public static void setTablero(Tablero tablero) {

        GestorTablero.tablero = tablero;
    }
}
