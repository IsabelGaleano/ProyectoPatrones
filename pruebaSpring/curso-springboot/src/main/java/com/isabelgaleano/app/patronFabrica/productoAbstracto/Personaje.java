package com.isabelgaleano.app.patronFabrica.productoAbstracto;

import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

public abstract class Personaje {
    protected int id;
    protected double precio;
    protected double vida;
    protected int cantMovimientos;
    protected double defensa;
    protected Ataque ataque;
    protected double cantOro;
    protected int maxOro;



    public Personaje() {
    }

    public Personaje(int id, double precio, double vida, int cantMovimientos, double defensa, Ataque ataque, double cantOro) {
        this.id = id;
        this.precio = precio;
        this.vida = vida;
        this.cantMovimientos = cantMovimientos;
        this.defensa = defensa;
        this.ataque = ataque;
        this.cantOro = cantOro;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public double getVida() {
        return vida;
    }

    public void setVida(double vida) {
        this.vida = vida;
    }

    public int getCantMovimientos() {
        return cantMovimientos;
    }

    public void setCantMovimientos(int cantMovimientos) {
        this.cantMovimientos = cantMovimientos;
    }

    public double getDefensa() {
        return defensa;
    }

    public void setDefensa(double defensa) {
        this.defensa = defensa;
    }

    public Ataque getAtaque() {
        return ataque;
    }

    public void setAtaque(Ataque ataque) {
        this.ataque = ataque;
    }

    public double getCantOro() {
        return cantOro;
    }

    public void setCantOro(double cantOro) {
        this.cantOro = cantOro;
    }

    public int getMaxOro() {
        return maxOro;
    }

    public void setMaxOro(int maxOro) {
        this.maxOro = maxOro;
    }
}
