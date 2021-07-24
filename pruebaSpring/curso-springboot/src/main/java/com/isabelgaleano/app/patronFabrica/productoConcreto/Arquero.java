package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

public class Arquero extends Personaje {

    public Arquero() {
    }

    public Arquero(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro, estado);
    }

    @Override
    public void aceptar(IVisitor iVisitor) {

    }


}
