package com.isabelgaleano.app.PatronPrototipo.prototipo;

import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.Gema;

import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;

public class CasillaGema extends Casilla {
    private Gema gema;

    public CasillaGema(Gema gema){
        this.gema= gema;
        this.setTipo("CasillaGema");

    }
    public void setGema(Gema g){
        this.gema= g;

    }

    public Gema getGema() {
        return this.gema;
    }



    @Override
    public Casilla clone() {
        return new CasillaGema(this.getGema());
    }



    @Override
    public String getData() {
        return this.gema.getTipo();
    }
}
