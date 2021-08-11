package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.*;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownDefensa;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpDefensa;

public class Arquero extends Personaje {

    public Arquero() {
    }

    public Arquero(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado, PowerUp powerUp, String tipo, boolean estadoDecorado, int idCasilla) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro, estado, powerUp, tipo, estadoDecorado, idCasilla);
    }



}
