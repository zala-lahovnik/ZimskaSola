package si.um.feri.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrviRest {

    @GetMapping("info")
    public String prvi() {
        return "Zdravo";
    }

    @PostMapping("nekiPost")
    public String dajmoNekajPostnit(String vsebina) {
        System.out.println("Dobil sem " + vsebina);

        return vsebina;
    }
}
