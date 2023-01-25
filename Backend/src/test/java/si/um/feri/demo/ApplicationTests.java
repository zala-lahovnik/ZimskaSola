package si.um.feri.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import si.um.feri.demo.info.FundsHelper;
import static org.junit.jupiter.api.Assertions.*;

//@SpringBootTest
//@ActiveProfiles("mysql")
public class ApplicationTests {

//    @Autowired
//    OsebaRepository osebaRepository;

    @Test
    public void DepositTest() {
        Oseba janez = new Oseba(0, "janez.novak@feri.um.si", "Janez", "Novak", 1000);
        janez = FundsHelper.deposit(janez, 200);

        assertEquals(1200, janez.getImetje());
    }

    @Test
    public void WithdrawTest() {
        Oseba janez = new Oseba(0, "janez.novak@feri.um.si", "Janez", "Novak", 1000);
        janez = FundsHelper.withdraw(janez, 100);

        assertEquals(900, janez.getImetje());
    }

    @Test
    public void TransferTest() {
        Oseba janez = new Oseba(0, "janez.novak@feri.um.si", "Janez", "Novak", 1000);
        Oseba luka = new Oseba(1, "luka.kovac@feri.um.si", "Luka", "Kovač", 1000);

        janez = FundsHelper.withdraw(janez, 100);
        luka = FundsHelper.deposit(luka, 100);

        assertEquals(900, janez.getImetje());
        assertEquals(1100, luka.getImetje());
    }

}
