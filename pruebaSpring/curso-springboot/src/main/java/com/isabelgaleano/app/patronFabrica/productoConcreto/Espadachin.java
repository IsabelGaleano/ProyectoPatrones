package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class Espadachin extends Personaje {

    public Espadachin() {
    }

    public Espadachin(int id, double precio, double vida, int cantMovimientos, double defensa, Ataque ataque, double cantOro) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro);

    }
}
