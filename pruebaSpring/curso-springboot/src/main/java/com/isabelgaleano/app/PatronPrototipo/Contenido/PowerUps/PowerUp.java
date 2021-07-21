package com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps;

public abstract class PowerUp {
    int statMod; /** Modificador de estadística*/
    public String tipo;

    public int getStatMod() {
        return statMod;
    }

    public void setStatMod(int statMod) {
        this.statMod = statMod;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}
