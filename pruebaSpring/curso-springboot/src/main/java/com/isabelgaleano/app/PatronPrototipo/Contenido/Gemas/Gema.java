package com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas;

public abstract class Gema {
    private String tipo;
    private   int oro;

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getOro() {
        return oro;
    }

    public void setOro(int oro) {
        this.oro = oro;
    }
}
