package com.isabelgaleano.app.Gestores;
import com.isabelgaleano.app.Modelo.PersonajeVisitante;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownDefensa;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpDefensa;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class GestorVisitante {

    List<PersonajeVisitante> personajes;
    ArrayList<IVisitor> visitantes;

    public GestorVisitante() {
        this.personajes = new ArrayList<PersonajeVisitante>();
        this.visitantes = new ArrayList<IVisitor>();
    }

    private void agregarPersonaje(PersonajeVisitante pPersonaje) {
        personajes.add(pPersonaje);
    }

    public void agregarVisitantes() {
        visitantes.add(new RemoverPowerDownAtaque());
        visitantes.add(new RemoverPowerDownDefensa());
        visitantes.add(new RemoverPowerUpAtaque());
        visitantes.add(new RemoverPowerUpDefensa());
    }

    public void ejecutarVisitantes() {

        for (IVisitor visitor: visitantes) {
            visitarConcretos(visitor);
        }
    }

    private void visitarConcretos(IVisitor visitor) {
        visitor.visit(personajes);
    }

    public  List<PersonajeVisitante> visitarPersonajes(List<PersonajeVisitante> personajeR) {
        for (PersonajeVisitante p: personajeR) {
            agregarPersonaje(p);
        }
        agregarVisitantes();
        ejecutarVisitantes();
        return personajes;
    }

}
