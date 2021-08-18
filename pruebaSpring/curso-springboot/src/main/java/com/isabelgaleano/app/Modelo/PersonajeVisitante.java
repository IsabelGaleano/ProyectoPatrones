package com.isabelgaleano.app.Modelo;

import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownDefensa;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpDefensa;

import java.io.Serializable;

public class PersonajeVisitante implements Serializable {

    private int id;
    private int defensa;
    private String tipoPowerUp;
    private int ataque;
    private boolean estadoDecorado;

    public PersonajeVisitante() {
    }

    public PersonajeVisitante(int id, int defensa, String tipoPowerUp, int ataque, boolean estadoDecorado) {
        this.id = id;
        this.defensa = defensa;
        this.tipoPowerUp = tipoPowerUp;
        this.ataque = ataque;
        this.estadoDecorado = estadoDecorado;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }

    public String getTipoPowerUp() {
        return tipoPowerUp;
    }

    public void setTipoPowerUp(String tipoPowerUp) {
        this.tipoPowerUp = tipoPowerUp;
    }

    public int getAtaque() {
        return ataque;
    }

    public void setAtaque(int ataque) {
        this.ataque = ataque;
    }

    public boolean isEstadoDecorado() {
        return estadoDecorado;
    }

    public void setEstadoDecorado(boolean estadoDecorado) {
        this.estadoDecorado = estadoDecorado;
    }



    public void aceptar(IVisitor iVisitor) {
        this.estadoDecorado = false;
        if (this.tipoPowerUp.equals("MejoraAtaque")) {
            if (iVisitor.getClass().equals(RemoverPowerUpAtaque.class)) {
                iVisitor.visit(this);
            }
        } else if (this.tipoPowerUp.equals("MejoraDefensa")) {
            if (iVisitor.getClass().equals(RemoverPowerUpDefensa.class)) {
                iVisitor.visit(this);
            }
        } else if (this.tipoPowerUp.equals("TrampaAtaque")) {
            if (iVisitor.getClass().equals(RemoverPowerDownAtaque.class)) {
                iVisitor.visit(this);
            }
        } else if (this.tipoPowerUp.equals("TrampaDefensa")) {
            if (iVisitor.getClass().equals(RemoverPowerDownDefensa.class)) {
                iVisitor.visit(this);
            }
        }

    }
}
