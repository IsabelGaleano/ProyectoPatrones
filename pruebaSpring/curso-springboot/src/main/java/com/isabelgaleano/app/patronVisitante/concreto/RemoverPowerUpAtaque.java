package com.isabelgaleano.app.patronVisitante.concreto;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

import java.util.List;

public class RemoverPowerUpAtaque implements IVisitor {

    @Override
    public void visit(Personaje personaje) {
        personaje.getAtaque().setPuntos(personaje.getAtaque().getPuntos() - 2);
    }

    @Override
    public void visit(List<Personaje> elementList) {

        for (Personaje p: elementList) {
            p.aceptar(this);
        }
    }
}
