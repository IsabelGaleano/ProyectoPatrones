package com.isabelgaleano.app.patronFabrica.productoAbstracto;

import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.PowerUp;
import com.isabelgaleano.app.patronDecorador.decorador.ObjetoDecorado;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

public abstract class Personaje {
    protected int id;
    protected int precio;
    protected int vida;
    protected int cantMovimientos;
    protected int defensa;
    protected Ataque ataque;
    protected int cantOro;
    protected int maxOro;

    public Personaje() {
    }

    public Personaje(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro) {
        this.id = id;
        this.precio = precio;
        this.vida = vida;
        this.cantMovimientos = cantMovimientos;
        this.defensa = defensa;
        this.ataque = ataque;
        this.cantOro = cantOro;
        this.maxOro = maxOro;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public int getCantMovimientos() {
        return cantMovimientos;
    }

    public void setCantMovimientos(int cantMovimientos) {
        this.cantMovimientos = cantMovimientos;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }

    public Ataque getAtaque() {
        return ataque;
    }

    public void setAtaque(Ataque ataque) {
        this.ataque = ataque;
    }

    public int getCantOro() {
        return cantOro;
    }

    public void setCantOro(int cantOro) {
        this.cantOro = cantOro;
    }

    public int getMaxOro() {
        return maxOro;
    }

    public void setMaxOro(int maxOro) {
        this.maxOro = maxOro;
    }
}
