package si.um.feri.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Oseba {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String email;

    @NotBlank
    @Size(min=2, max=30)
    private String ime;

    private String priimek;

    //za numerične meritve npr max pa min
    //@Min(value=-273)
    //@Max(value=300)

    @Min(value=-1000)
    private float imetje;

    public Oseba() {
    }

    public Oseba(int id, String email, String ime, String priimek, float imetje) {
        this.id = id;
        this.email = email;
        this.ime = ime;
        this.priimek = priimek;
        this.imetje = imetje;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPriimek() {
        return priimek;
    }

    public void setPriimek(String priimek) {
        this.priimek = priimek;
    }


    public float getImetje() {
        return imetje;
    }

    public void setImetje(float imetje) {
        this.imetje = imetje;
    }

    @Override
    public String toString() {
        return "Oseba{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", ime='" + ime + '\'' +
                ", priimek='" + priimek + '\'' +
                ", imetje=" + imetje +
                '}';
    }
}
