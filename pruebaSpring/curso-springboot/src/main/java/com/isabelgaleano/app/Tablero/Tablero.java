package com.isabelgaleano.app.Tablero;

import com.isabelgaleano.app.Castillo.Castillo;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.api.JugadorObject;
import com.isabelgaleano.app.proxy.implementacion.Jugador;

import java.util.ArrayList;

public class Tablero {

    private ArrayList<Casilla> casillas;
    private ArrayList<JugadorObject> jugadores;
    private ArrayList<Castillo> castillos;
    private JugadorObject jugadorActivo;
    private int turno;

    public Tablero() {
    }


    public Tablero(ArrayList<Casilla> casillas, ArrayList<JugadorObject> jugadores, ArrayList<Castillo> castillos, JugadorObject jugadorActivo, int turno) {
        this.casillas = casillas;
        this.jugadores = jugadores;
        this.castillos = castillos;
        this.jugadorActivo = jugadorActivo;
        this.turno = turno;
    }

    public ArrayList<Casilla> getCasillas() {
        return casillas;
    }

    public void setCasillas(ArrayList<Casilla> casillas) {
        this.casillas = casillas;
    }

    public ArrayList<JugadorObject> getJugadores() {
        return jugadores;
    }

    public void setJugadores(ArrayList<JugadorObject> jugadores) {
        this.jugadores = jugadores;
    }

    public JugadorObject getJugadorActivo() {
        return jugadorActivo;
    }

    public void setJugadorActivo(JugadorObject jugadorActivo) {
        this.jugadorActivo = jugadorActivo;
    }

    public int getTurno() {
        return turno;
    }

    public void setTurno(int turno) {
        this.turno = turno;
    }

    public ArrayList<Castillo> getCastillos() {
        return castillos;
    }

    public void setCastillos(ArrayList<Castillo> castillos) {
        this.castillos = castillos;
    }
}
