package com.isabelgaleano.app.Defensa;

public class Defensa {
    protected String id;
    protected int vida;
    protected int ataque;
    protected int alcance;
    protected int precio;

    public Defensa() {
    }

    public Defensa(String id, int vida, int ataque, int alcance, int precio) {
        this.id = id;
        this.vida = vida;
        this.ataque = ataque;
        this.alcance = alcance;
        this.precio = precio;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public int getAtaque() {
        return ataque;
    }

    public void setAtaque(int ataque) {
        this.ataque = ataque;
    }

    public int getAlcance() {
        return alcance;
    }

    public void setAlcance(int alcance) {
        this.alcance = alcance;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }
}
