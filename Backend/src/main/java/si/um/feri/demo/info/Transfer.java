package si.um.feri.demo.info;

public class Transfer {

    private int idFrom;
    private int idTo;
    private float ammount;

    public Transfer() {
    }

    public Transfer(int idFrom, int idTo, float ammount) {
        this.idFrom = idFrom;
        this.idTo = idTo;
        this.ammount = ammount;
    }

    public int getIdFrom() {
        return idFrom;
    }

    public void setIdFrom(int idFrom) {
        this.idFrom = idFrom;
    }

    public int getIdTo() {
        return idTo;
    }

    public void setIdTo(int idTo) {
        this.idTo = idTo;
    }

    public float getAmmount() {
        return ammount;
    }

    public void setAmmount(float ammount) {
        this.ammount = ammount;
    }
}
