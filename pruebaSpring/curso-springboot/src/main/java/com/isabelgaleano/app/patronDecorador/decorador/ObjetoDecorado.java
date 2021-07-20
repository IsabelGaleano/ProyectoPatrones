package com.isabelgaleano.app.patronDecorador.decorador;

import com.isabelgaleano.app.patronDecorador.componente.IPower;

public abstract class ObjetoDecorado extends IPower {
    protected IPower power;

    public IPower getPower() { return power; }
}
