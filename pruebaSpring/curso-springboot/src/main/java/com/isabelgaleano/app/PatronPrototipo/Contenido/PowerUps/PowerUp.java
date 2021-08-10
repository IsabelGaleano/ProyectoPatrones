package com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "tipo")
@JsonSubTypes({
        @JsonSubTypes.Type(value = MejoraAtaque.class, name = "MejoraAtaque"),
        @JsonSubTypes.Type(value = MejoraDefensa.class, name = "MejoraDefensa"),
})
public abstract class PowerUp {
    int statMod; /** Modificador de estadística*/
    public String tipo;

    public int getStatMod() {
        return statMod;
    }

    public void setStatMod(int statMod) {
        this.statMod = statMod;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}
