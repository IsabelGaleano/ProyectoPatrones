package com.isabelgaleano.app.Castillo;

import com.isabelgaleano.app.Defensa.Defensa;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.ArrayList;

public class Castillo {
    private String id;
    private int vida;
    private int oro;
    ArrayList<Defensa> defensas;
    ArrayList<Personaje> tropas;

    public Castillo() {
    }

    public Castillo(String id, int vida, int oro, ArrayList<Defensa> defensas, ArrayList<Personaje> tropas) {
        this.id = id;
        this.vida = vida;
        this.oro = oro;
        this.defensas = defensas;
        this.tropas = tropas;
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

    public int getOro() {
        return oro;
    }

    public void setOro(int oro) {
        this.oro = oro;
    }

    public ArrayList<Defensa> getDefensas() {
        return defensas;
    }

    public void setDefensas(ArrayList<Defensa> defensas) {
        this.defensas = defensas;
    }

    public ArrayList<Personaje> getTropas() {
        return tropas;
    }

    public void setTropas(ArrayList<Personaje> tropas) {
        this.tropas = tropas;
    }
}
