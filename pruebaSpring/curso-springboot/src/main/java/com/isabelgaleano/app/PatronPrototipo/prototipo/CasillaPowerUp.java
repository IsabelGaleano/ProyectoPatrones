package com.isabelgaleano.app.PatronPrototipo.prototipo;


import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.PowerUp;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;

public class CasillaPowerUp extends Casilla {
    PowerUp pU;

    public CasillaPowerUp(PowerUp powerUp){
        this.setpU(powerUp);
        this.setTipo("CasillaPowerUp");

    }

    public PowerUp getpU() {
        return pU;
    }

    public void setpU(PowerUp pU) {
        this.pU = pU;
    }

    @Override
    public String getData() {
        return this.pU.getTipo();
    }
    @Override
    public Casilla clone(){
        return new CasillaPowerUp(this.getpU());
    }
}
