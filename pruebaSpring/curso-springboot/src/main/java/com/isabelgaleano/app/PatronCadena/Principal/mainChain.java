package com.isabelgaleano.app.PatronCadena.Principal;

import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.Gema;
import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaAzul;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.PowerUp;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaGema;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaPowerUp;
import com.isabelgaleano.app.patronFabrica.productoAbstracto.Personaje;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Arquero;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Ataque;
import com.isabelgaleano.app.patronFabrica.productoConcreto.Espadachin;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class mainChain {
    public static void main(String[] args) {
        ArrayList<Personaje> a = new ArrayList<>();
        Personaje arquero = new Arquero(1,25,100,3,9,new Ataque(23,3,56), 24);
        Personaje espadachin = new Espadachin(2,30,54,4,9,new Ataque(23,3,56), 24);
        Gema gema = new GemaAzul();
        PowerUp pU= new MejoraAtaque();


        Casilla casillaGema = new CasillaGema(gema);
        Casilla casillaPowerUp = new CasillaPowerUp(pU);

        GestorCadena cadena = new GestorCadena();


        cadena.IniciarValidacion(arquero,casillaPowerUp, a);
        cadena.IniciarValidacion(espadachin,casillaGema, a);
        System.out.println(arquero);


    }



}
