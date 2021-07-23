package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class Mago extends Personaje {

    public Mago() {
    }

    public Mago(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro);
    }
}
