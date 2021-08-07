package com.isabelgaleano.app.patronVisitante.concreto;

import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

import java.util.List;

public class RemoverPowerUpDefensa implements IVisitor {
    @Override
    public void visit(PersonajeVisitante personaje) {
        personaje.setDefensa(personaje.getDefensa() - 2);
    }

    @Override
    public void visit(List<PersonajeVisitante> elementList) {

        for (PersonajeVisitante p: elementList) {
            p.aceptar(this);
        }
    }
}
