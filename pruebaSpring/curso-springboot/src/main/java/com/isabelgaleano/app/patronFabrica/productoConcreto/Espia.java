package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

public class Espia extends Personaje {
    private boolean visibilidad;

    public Espia(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }

    public Espia(int id, double precio, double vida, int cantMovimientos, double defensa, Ataque ataque, double cantOro, boolean visibilidad) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro);
        this.visibilidad = visibilidad;
    }

    public boolean isVisibilidad() {
        return visibilidad;
    }

    public void setVisibilidad(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }
}
