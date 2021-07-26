package com.isabelgaleano.app.PatronPrototipo.PrincipalCasilla;

import com.isabelgaleano.app.Gestores.GestorCasilla;

public class MainCasilla {

    public static void main(String ar[])  {
        GestorCasilla gC = new GestorCasilla();

        gC.generarCasillas();
        gC.getData();
        System.out.println(gC.getData());


    }

}
