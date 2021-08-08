package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.*;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownDefensa;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpDefensa;

public class Asesino extends Personaje {

    public Asesino() {
    }

    public Asesino(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado, PowerUp powerUp, String tipo, boolean estadoDecorado, int idCasilla) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro, estado, powerUp, tipo, estadoDecorado, idCasilla);
    }

    /*@Override
    public void aceptar(IVisitor iVisitor) {
        if (this.powerUp != null) {
            if (powerUp.getClass().equals(MejoraAtaque.class)) {
                if (iVisitor.getClass().equals(RemoverPowerUpAtaque.class)) {
                    iVisitor.visit(this);
                }
            } else if (powerUp.getClass().equals(MejoraDefensa.class)) {
                if (iVisitor.getClass().equals(RemoverPowerUpDefensa.class)) {
                    iVisitor.visit(this);
                }
            } else if (powerUp.getClass().equals(TrampaAtaque.class)) {
                if (iVisitor.getClass().equals(RemoverPowerDownAtaque.class)) {
                    iVisitor.visit(this);
                }
            } else if (powerUp.getClass().equals(TrampaDefensa.class)) {
                if (iVisitor.getClass().equals(RemoverPowerDownDefensa.class)) {
                    iVisitor.visit(this);
                }
            }
        }
    }*/


}
