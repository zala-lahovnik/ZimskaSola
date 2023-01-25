package si.um.feri.demo.info;

import si.um.feri.demo.Oseba;

public class FundsHelper {

    public static Oseba withdraw(Oseba oseba, float ammount) {
        float currentFunds = oseba.getImetje();
        float newFunds = currentFunds - ammount;

        if(newFunds > -1000)
            oseba.setImetje(newFunds);

        return oseba;
    }

    public static Oseba deposit(Oseba oseba, float ammount) {
        float currentFunds = oseba.getImetje();
        float newFunds = currentFunds + ammount;

        oseba.setImetje(newFunds);

        return oseba;
    }

}
