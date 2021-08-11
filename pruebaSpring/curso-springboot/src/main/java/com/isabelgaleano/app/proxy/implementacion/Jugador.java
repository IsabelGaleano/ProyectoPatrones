package com.isabelgaleano.app.proxy.implementacion;

import com.isabelgaleano.app.proxy.interface_proxy.IJugador;

public class Jugador implements IJugador {

    @Override
    public boolean turnoJugador(int turno) {

        if(turno == 2) {
            return true;
        } else
            return false;
    }

}
