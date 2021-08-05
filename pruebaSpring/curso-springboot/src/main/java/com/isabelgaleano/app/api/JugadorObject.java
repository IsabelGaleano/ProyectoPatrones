package com.isabelgaleano.app.api;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Jugadores")
public class JugadorObject implements Serializable {
    private boolean turno;
    private static final long serialVersionUID = -6801690473848135418L;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Id
    @Column(name = "alias", nullable = false, length = 100, unique = true)
    private String alias;

    @Column(length = 50)
    private int partidasGanadas;
    private int partidasPerdidas;
    private int estado;
    private int tropasCompradas;
    private int tropasDerrotadas;
    private int idCastillo;

    @Column(length = 200)
    private double oroGanado;



    public JugadorObject() {
    }

    public JugadorObject(boolean turno, Long id, String alias, int partidasGanadas, int partidasPerdidas, int estado, int tropasCompradas, int tropasDerrotadas, double oroGanado, int idCastillo) {
        this.turno = turno;
        this.id = id;
        this.alias = alias;
        this.partidasGanadas = partidasGanadas;
        this.partidasPerdidas = partidasPerdidas;
        this.estado = estado;
        this.tropasCompradas = tropasCompradas;
        this.tropasDerrotadas = tropasDerrotadas;
        this.oroGanado = oroGanado;
        this.idCastillo = idCastillo;
    }

    @Override
    public String toString() {
        return "JugadorObject{" +
                "turno=" + turno +
                ", id=" + id +
                ", alias='" + alias + '\'' +
                ", partidasGanadas=" + partidasGanadas +
                ", partidasPerdidas=" + partidasPerdidas +
                ", estado=" + estado +
                ", tropasCompradas=" + tropasCompradas +
                ", tropasDerrotadas=" + tropasDerrotadas +
                ", idCastillo=" + idCastillo +
                ", oroGanado=" + oroGanado +
                '}';
    }

    public boolean isTurno() {
        return turno;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public int getPartidasGanadas() {
        return partidasGanadas;
    }

    public void setPartidasGanadas(int partidasGanadas) {
        this.partidasGanadas = partidasGanadas;
    }

    public int getPartidasPerdidas() {
        return partidasPerdidas;
    }

    public void setPartidasPerdidas(int partidasPerdidas) {
        this.partidasPerdidas = partidasPerdidas;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public int getTropasCompradas() {
        return tropasCompradas;
    }

    public void setTropasCompradas(int tropasCompradas) {
        this.tropasCompradas = tropasCompradas;
    }

    public int getTropasDerrotadas() {
        return tropasDerrotadas;
    }

    public void setTropasDerrotadas(int tropasDerrotadas) {
        this.tropasDerrotadas = tropasDerrotadas;
    }

    public double getOroGanado() {
        return oroGanado;
    }

    public void setOroGanado(double oroGanado) {
        this.oroGanado = oroGanado;
    }

    public boolean getTurno() {
        return turno;
    }

    public void setTurno(boolean turno) {
        this.turno = turno;
    }

    public int getIdCastillo() {
        return idCastillo;
    }

    public void setIdCastillo(int idCastillo) {
        this.idCastillo = idCastillo;
    }
}
