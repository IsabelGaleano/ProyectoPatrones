package com.isabelgaleano.app.patronVisitante.concreto;

import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;

import java.util.List;

public class RemoverPowerUpAtaque implements IVisitor {

    @Override
    public void visit(PersonajeVisitante personaje) {
        personaje.setAtaque(personaje.getAtaque() - 2);
    }

    @Override
    public void visit(List<PersonajeVisitante> elementList) {

        for (PersonajeVisitante p: elementList) {
            p.aceptar(this);
        }
    }
}
