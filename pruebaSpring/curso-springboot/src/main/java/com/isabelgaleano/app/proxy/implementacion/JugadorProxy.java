package com.isabelgaleano.app.proxy.implementacion;

import com.isabelgaleano.app.proxy.interface_proxy.IJugador;

public class JugadorProxy implements IJugador {
    private Jugador jugador = new Jugador();
    @Override
    public boolean turnoJugador( int turno) {

        return jugador.turnoJugador( turno);
    }
}
