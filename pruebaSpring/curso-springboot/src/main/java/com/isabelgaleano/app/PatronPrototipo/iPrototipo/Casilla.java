package  com.isabelgaleano.app.PatronPrototipo.iPrototipo;

public abstract class  Casilla {
    private int id;
    private String tipo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public abstract String getData();
    public abstract Casilla clone();



}
