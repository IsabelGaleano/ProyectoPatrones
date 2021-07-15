package com.isabelgaleano.app.patronFabrica.productoConcreto;

public class Ataque {
    private int id;
    private int puntos;
    private int alcance;

    public Ataque() {
    }

    public Ataque(int id, int puntos, int alcance) {
        this.id = id;
        this.puntos = puntos;
        this.alcance = alcance;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPuntos() {
        return puntos;
    }

    public void setPuntos(int puntos) {
        this.puntos = puntos;
    }

    public int getAlcance() {
        return alcance;
    }

    public void setAlcance(int alcance) {
        this.alcance = alcance;
    }
}
