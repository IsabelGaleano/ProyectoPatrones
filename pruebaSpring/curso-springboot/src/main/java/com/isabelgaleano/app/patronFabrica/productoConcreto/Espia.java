package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class Espia extends Personaje {
    private boolean visibilidad;

    public Espia(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }

    public Espia(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, boolean visibilidad) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro);
        this.visibilidad = visibilidad;
    }

    public boolean isVisibilidad() {
        return visibilidad;
    }

    public void setVisibilidad(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }
}
