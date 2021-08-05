package com.isabelgaleano.app.Modelo;

import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;

import java.io.Serializable;
import java.util.List;

public class PersonajesModelo {

    private List<Personaje> listPersonajes;

    public List<Personaje> getListPersonajes() {
        return listPersonajes;
    }

    public void setListPersonajes(List<Personaje> listPersonajes) {
        this.listPersonajes = listPersonajes;
    }
}
