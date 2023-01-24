package si.um.feri.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrviRest {

    @Autowired
    OsebaRepository osebaRepo;

    @GetMapping("info")
    public String prvi() {
        return "Zdravo";
    }

    @PostMapping("nekiPost")
    public String addPerson(@RequestBody Oseba oseba) {
        osebaRepo.save(oseba);

        System.out.println(oseba);

        return "OK";
    }
}
