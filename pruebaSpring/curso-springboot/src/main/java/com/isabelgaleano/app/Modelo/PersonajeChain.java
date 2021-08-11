package com.isabelgaleano.app.Modelo;

import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.PowerUp;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;

import java.io.Serializable;

public class PersonajeChain implements Serializable {
    private int id;
    private Ataque ataque;
    private int defensa;
    private boolean estadoDecorado;
    private PowerUp powerUp;
    private int oro;
    private int maxOro;
    private String tipoCasilla;
    private boolean cambio;
    private int activar;

    public PersonajeChain(){}

    public PersonajeChain(int id, Ataque ataque, int defensa, boolean estadoDecorado, PowerUp powerUp, int oro, int maxOro, String tipoCasilla, boolean cambio, int activar) {
        this.id = id;
        this.ataque = ataque;
        this.defensa = defensa;
        this.estadoDecorado = estadoDecorado;
        this.powerUp = powerUp;
        this.oro = oro;
        this.maxOro = maxOro;
        this.tipoCasilla = tipoCasilla;
        this.cambio = cambio;
        this.activar = activar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Ataque getAtaque() {
        return ataque;
    }

    public void setAtaque(Ataque ataque) {
        this.ataque = ataque;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }

    public boolean isEstadoDecorado() {
        return estadoDecorado;
    }

    public void setEstadoDecorado(boolean estadoDecorado) {
        this.estadoDecorado = estadoDecorado;
    }

    public PowerUp getPowerUp() {
        return powerUp;
    }

    public void setPowerUp(PowerUp powerUp) {
        this.powerUp = powerUp;
    }

    public int getOro() {
        return oro;
    }

    public void setOro(int oro) {
        this.oro = oro;
    }

    public int getMaxOro() {
        return maxOro;
    }

    public void setMaxOro(int maxOro) {
        this.maxOro = maxOro;
    }

    public String getTipoCasilla() {
        return tipoCasilla;
    }

    public void setTipoCasilla(String tipoCasilla) {
        this.tipoCasilla = tipoCasilla;
    }

    public boolean isCambio() {
        return cambio;
    }

    public void setCambio(boolean cambio) {
        this.cambio = cambio;
    }

    public int getActivar() {
        return activar;
    }

    public void setActivar(int activar) {
        this.activar = activar;
    }
}
