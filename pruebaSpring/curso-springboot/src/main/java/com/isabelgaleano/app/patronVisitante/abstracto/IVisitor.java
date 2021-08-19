package com.isabelgaleano.app.patronVisitante.abstracto;

import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.List;

public interface IVisitor {

    public void visit(PersonajeVisitante personaje);

    public void visit(List<PersonajeVisitante> elementList);


}
