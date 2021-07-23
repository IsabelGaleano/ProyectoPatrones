package com.isabelgaleano.app.patronVisitante;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.util.List;

public interface IVisitor {

    public void visit(Personaje personaje);

    public void visit(List<Personaje> elementList);

}
