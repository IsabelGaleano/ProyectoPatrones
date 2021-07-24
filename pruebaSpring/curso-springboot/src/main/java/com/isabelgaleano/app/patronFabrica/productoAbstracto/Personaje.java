package com.isabelgaleano.app.patronFabrica.productoAbstracto;

import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

public abstract class Personaje {
    protected int id;
    protected int precio;
    protected int vida;
    protected int cantMovimientos;
    protected int defensa;
    protected Ataque ataque;
    protected int cantOro;
    protected int maxOro;
    protected String estado;
    protected PowerUp powerUp;
    protected String tipo;
    protected boolean estadoDecorado;


    public Personaje() {
    }

    public Personaje(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado, PowerUp powerUp) {
        this.id = id;
        this.precio = precio;
        this.vida = vida;
        this.cantMovimientos = cantMovimientos;
        this.defensa = defensa;
        this.ataque = ataque;
        this.cantOro = cantOro;
        this.maxOro = maxOro;
        this.estado = estado;
        this.powerUp = powerUp;
    }

    public Personaje(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado) {
        this.id = id;
        this.precio = precio;
        this.vida = vida;
        this.cantMovimientos = cantMovimientos;
        this.defensa = defensa;
        this.ataque = ataque;
        this.cantOro = cantOro;
        this.maxOro = maxOro;
        this.estado = estado;
        this.tipo = tipo;
        this.estadoDecorado = estadoDecorado;
    }

    public abstract void aceptar(IVisitor iVisitor);

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
        this.maxOro = maxOro; }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;

    }

    public PowerUp getPowerUp() {
        return powerUp;
    }

    public void setPowerUp(PowerUp powerUp) {
        this.powerUp = powerUp;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public boolean isEstadoDecorado() {
        return estadoDecorado;
    }

    public void setEstadoDecorado(boolean estadoDecorado) {
        this.estadoDecorado = estadoDecorado;
    }
}
