package com.isabelgaleano.app.PatronPrototipo.PrincipalCasilla;

public class MainCasilla {

    public static void main(String ar[])  {
        GestorCasilla gC = new GestorCasilla();

        gC.generarCasillas();
        gC.getData();
        System.out.println(gC.getData());


    }

}
