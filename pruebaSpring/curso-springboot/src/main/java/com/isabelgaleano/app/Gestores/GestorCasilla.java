package com.isabelgaleano.app.Gestores;


import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaAzul;
import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaBlanca;
import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaVerde;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraDefensa;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.TrampaAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.TrampaDefensa;
import com.isabelgaleano.app.PatronPrototipo.PrincipalCasilla.HelperCasilla;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaGema;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaNormal;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaPowerUp;


import java.util.ArrayList;
import java.util.*;

public class GestorCasilla {
    private ArrayList<Casilla> arrCasillas = new ArrayList<Casilla>();
    ArrayList<CasillaGema> arrGemas= new ArrayList<>();
    ArrayList<CasillaPowerUp> arrPowerUp= new ArrayList<>();
    int arregloIDs[] = new int[100];
    private Casilla prototipoGema;
    private Casilla prototipoPowerUp;
    private Casilla prototipoNormal;


    public GestorCasilla(){
        prototipoGema = new CasillaGema(new GemaVerde());
        prototipoPowerUp = new CasillaPowerUp(new MejoraAtaque());
        prototipoNormal= new CasillaNormal();

    }
    public void rellenarArr(){
        for(int i=0; i<100;i++){


            if(i<14){

                arrGemas.add((CasillaGema) prototipoGema.clone());



            }else if(i<29){

                arrPowerUp.add((CasillaPowerUp) prototipoPowerUp.clone());



            }else{
                arrCasillas.add(prototipoNormal.clone());

            }


        }



    }

    public void cambiarDatos(){
        int r;
        for(int i=0;i<arrGemas.size();i++){
            r= HelperCasilla.random(2);
            CasillaGema iter = arrGemas.get(i);
            if(r==0){
                iter.setGema(new GemaAzul());

            }else if(r==2){
                iter.setGema(new GemaBlanca());
            }

        }
        for(int i=0;i<arrPowerUp.size();i++){
            r=HelperCasilla.random(3);
            CasillaPowerUp iter = arrPowerUp.get(i);
            if(r==0){
                iter.setpU(new MejoraDefensa());

            }else if(r==1){
                iter.setpU(new TrampaDefensa());
            }
            else if(r==2){
                iter.setpU(new TrampaAtaque());


            }


        }



    }
    /**Método Encargado de Unir las 3 listas en una sola: arrCasillas**/
    public void unir(){
        for(int i=0;i<arrPowerUp.size();i++){
            CasillaPowerUp iter = arrPowerUp.get(i);
            arrCasillas.add(iter);

        }
        for(int i=0;i<arrGemas.size();i++){
            CasillaGema iter = arrGemas.get(i);
            arrCasillas.add(iter);

        }

    }
    public String getData(){
        String data="";
        int i=1;
        for(Casilla element : arrCasillas) {
            data+=i+"."+element.getData()+"\n";
            i++;
        }

        return data;
    }
    public void shuffle(){/**Método Encargado de reordenar aleatoriamente la lista principal**/
        Collections.shuffle(arrCasillas);

    }

    public void rellenarID() {
        int i = 0;
        llenarArregloID();
        for (Casilla casilla: arrCasillas) {
            casilla.setId(arregloIDs[i]);
            i++;
        }
    }


    public void llenarArregloID() {
        for (int i = 0; i < arregloIDs.length; i++) {
            arregloIDs[i] = i;
        }

        Collections.shuffle(Collections.singletonList(arregloIDs));
    }

    public void validarCastillos(int cantidadCastillos) {
        switch (cantidadCastillos) {
            case 2:
                encontrarRepeticionesDos();
                break;
            case 3:
                encontrarRepeticionesTres();
                break;

            case 4:
                encontrarRepeticionesCuatro();
                break;

        }
    }

    public void encontrarRepeticionesDos() {
        Casilla temp;
        for (int i = 0; i < arrCasillas.size(); i++) {
            if (i == 9) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 9);
                    temp.setId(9);
                    arrCasillas.set(9, temp);
                }
            }

            if (i == 90) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 90);
                    temp.setId(90);
                    arrCasillas.set(90, temp);
                }
            }


        }
    }


    public void encontrarRepeticionesTres() {
        Casilla temp;
        for (int i = 0; i < arrCasillas.size(); i++) {
            if (i == 0) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 0);
                    temp.setId(0);
                    arrCasillas.set(0, temp);

                }
            }


            if (i == 9) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 9);
                    temp.setId(9);
                    arrCasillas.set(9, temp);
                }
            }

            if (i == 90) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 90);
                    temp.setId(90);
                    arrCasillas.set(90, temp);
                }
            }


        }
    }


    public void encontrarRepeticionesCuatro() {
        Casilla temp;
        for (int i = 0; i < arrCasillas.size(); i++) {

            if (i == 0) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 0);
                    temp.setId(0);
                    arrCasillas.set(0, temp);
                }
            }

            if (i == 9) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 9);
                    temp.setId(9);
                    arrCasillas.set(9, temp);
                }
            }

            if (i == 90) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i), 99);
                    temp.setId(90);
                    arrCasillas.set(90, temp);
                }
            }

            if (i == 99) {
                if (arrCasillas.get(i).getTipo() != "CasillaNormal") {
                    temp = intercambiarCasilla(arrCasillas.get(i),99);
                    temp.setId(99);
                    arrCasillas.set(99, temp);
                }
            }


        }
    }



    public Casilla intercambiarCasilla(Casilla casilla, int posicion) {
        ArrayList<Casilla> casillasTemp = new ArrayList<>();
        ArrayList<Integer> posicionesCasillas = new ArrayList<>();
        Casilla temp;
        for (int i = 20; i < 85 ; i++) {
            if (arrCasillas.get(i).getTipo().equals("CasillaNormal")) {
                casillasTemp.add(arrCasillas.get(i));
                posicionesCasillas.add(i);
            }
        }

        casilla.setId(posicionesCasillas.get(0));
        arrCasillas.set(posicionesCasillas.get(0), casilla);

        return casillasTemp.get(0);
    }

    public List <Casilla> generarCasillas(int cantidadCastillos){
        arrCasillas.clear();
        rellenarArr();
        cambiarDatos();
        unir();
        shuffle();
        rellenarID();
        validarCastillos(cantidadCastillos);


        return  arrCasillas;
    }
    public List <Casilla> getCasillas(){
        return  arrCasillas;
    }


}
