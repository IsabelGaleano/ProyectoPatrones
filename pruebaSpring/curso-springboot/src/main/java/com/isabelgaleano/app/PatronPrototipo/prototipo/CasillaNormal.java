package com.isabelgaleano.app.PatronPrototipo.prototipo;


import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;

public class CasillaNormal extends Casilla {
    public CasillaNormal(){
        this.setTipo("CasillaNormal");


    }

    @Override
    public String getData() {
        return this.getTipo();
    }
    @Override
    public Casilla clone(){
        return new CasillaNormal();
    }
}
