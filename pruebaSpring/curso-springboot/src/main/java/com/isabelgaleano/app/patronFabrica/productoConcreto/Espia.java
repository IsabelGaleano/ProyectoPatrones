package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.IVisitor;

public class Espia extends Personaje {

    private boolean visibilidad;

    public Espia(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }

    public Espia(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado, boolean visibilidad) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro, estado);
        this.visibilidad = visibilidad;
    }

    public boolean isVisibilidad() {
        return visibilidad;
    }

    public void setVisibilidad(boolean visibilidad) {
        this.visibilidad = visibilidad;}


    @Override
    public void aceptar(IVisitor iVisitor) {

    }
}
