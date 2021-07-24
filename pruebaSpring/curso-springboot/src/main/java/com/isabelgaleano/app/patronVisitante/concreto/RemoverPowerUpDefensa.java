package com.isabelgaleano.app.patronVisitante.concreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

import java.util.List;

public class RemoverPowerUpDefensa implements IVisitor {
    @Override
    public void visit(Personaje personaje) {
        if (personaje.isEstadoDecorado() == true) {
            personaje.setDefensa(personaje.getDefensa() - 2);
        }
    }

    @Override
    public void visit(List<Personaje> elementList) {

        for (Personaje p: elementList) {
            p.aceptar(this);
        }
    }
}
