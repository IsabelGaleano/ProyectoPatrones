package com.isabelgaleano.app.PatronPrototipo.PrincipalCasilla;


import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaAzul;
import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaBlanca;
import com.isabelgaleano.app.PatronPrototipo.Contenido.Gemas.GemaVerde;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.MejoraDefensa;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.TrampaAtaque;
import com.isabelgaleano.app.PatronPrototipo.Contenido.PowerUps.TrampaDefensa;
import com.isabelgaleano.app.PatronPrototipo.iPrototipo.Casilla;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaGema;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaNormal;
import com.isabelgaleano.app.PatronPrototipo.prototipo.CasillaPowerUp;


import java.util.ArrayList;
import java.util.*;

public class GestorCasilla {
    private static ArrayList<Casilla> arrCasillas = new ArrayList<>();
    ArrayList<CasillaGema> arrGemas= new ArrayList<>();
    ArrayList<CasillaPowerUp> arrPowerUp= new ArrayList<>();
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
    /**Método Encargado de cambiar los datos de los objetos clonados de las listas especiales*/
    public void cambiarDatos(){
        int r;
        for(int i=0;i<arrGemas.size();i++){
            r=HelperCasilla.random(2);
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
    public List <Casilla> generarCasillas(){
        rellenarArr();
        cambiarDatos();
        unir();
        shuffle();

        return  arrCasillas;
    }
    public List <Casilla> getCasillas(){
        return  arrCasillas;
    }




}
