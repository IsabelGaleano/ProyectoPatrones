package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class Asesino extends Personaje {

    public Asesino() {
    }

    public Asesino(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro);
    }
}
