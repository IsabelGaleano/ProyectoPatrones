package com.isabelgaleano.app.patronFabrica.productoConcreto;

import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.*;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronVisitante.abstracto.IVisitor;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerDownDefensa;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpAtaque;
import com.isabelgaleano.app.patronVisitante.concreto.RemoverPowerUpDefensa;

public class Espia extends Personaje {

    private boolean visibilidad;

    public Espia() {}

    public Espia(int id, int precio, int vida, int cantMovimientos, int defensa, Ataque ataque, int cantOro, int maxOro, String estado, PowerUp powerUp, String tipo, boolean estadoDecorado, boolean visibilidad, int idCasilla) {
        super(id, precio, vida, cantMovimientos, defensa, ataque, cantOro, maxOro, estado, powerUp, tipo, estadoDecorado, idCasilla);
        this.visibilidad = visibilidad;
    }

    public Espia(boolean visibilidad) {
        this.visibilidad = visibilidad;
    }

    public boolean isVisibilidad() {
        return visibilidad;
    }

    public void setVisibilidad(boolean visibilidad) {
        this.visibilidad = visibilidad;}


}
