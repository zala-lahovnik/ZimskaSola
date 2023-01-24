package si.um.feri.demo.info;

public class Deposit {
    private int id;
    private float ammount;

    public Deposit() {
    }

    public Deposit(int id, float ammount) {
        this.id = id;
        this.ammount = ammount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getAmmount() {
        return ammount;
    }

    public void setAmmount(float ammount) {
        this.ammount = ammount;
    }

    @Override
    public String toString() {
        return "Deposit{" +
                "id=" + id +
                ", ammount=" + ammount +
                '}';
    }
}
