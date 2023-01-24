package si.um.feri.demo;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import si.um.feri.demo.info.Deposit;
import si.um.feri.demo.info.Transfer;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PrviRest {

    @Autowired
    OsebaRepository osebaRepo;

    @GetMapping("info")
    public String prvi() {
        return "Zdravo";
    }

    @GetMapping("members")
    public List<Oseba> getAllMembers() {
        List<Oseba> members = new ArrayList<>();

        Iterable<Oseba> foundMembers = osebaRepo.findAll();

        foundMembers.forEach(oseba -> members.add(oseba));

        return members;
    }

    @Operation(summary = "Add a new person")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Returns OK",
                     content = {@Content(mediaType = "application/json", schema = @Schema(implementation = Oseba.class))}),
            @ApiResponse(responseCode = "400", description = "Bad request",
                    content = {@Content(mediaType = "application/json", schema = @Schema(implementation = String.class))})
    })
    @PostMapping("addMember")
    public String addMember(@RequestBody Oseba oseba) {
        osebaRepo.save(oseba);

        return "Member "+oseba.getIme() + " " + oseba.getPriimek() + " added.";
    }

    @PostMapping("addFunds")
    public String addFunds(@RequestBody Deposit deposit) {
        Oseba oseba = osebaRepo.findById(String.valueOf(deposit.getId())).orElse(new Oseba());

        if(!"".equals(oseba.getIme())) {
            float currentFunds = oseba.getImetje();
            float newFunds = currentFunds + deposit.getAmmount();

            oseba.setImetje(newFunds);

            osebaRepo.save(oseba);

            return "New ammount total: " + newFunds;
        }

        return "No such person found";
    }

    @PostMapping("withdrawFunds")
    public String withdrawFunds(@RequestBody Deposit withdrawl) {
        Oseba oseba = osebaRepo.findById(String.valueOf(withdrawl.getId())).orElse(null);

        if(null != oseba) {
            float currentFunds = oseba.getImetje();
            float newFunds = currentFunds - withdrawl.getAmmount();

            if(newFunds > -1000) {
                oseba.setImetje(newFunds);
                osebaRepo.save(oseba);
                return "Withdrawl successfull.";
            } else {
                return "Cannot withdraw funds from account. Balance is too low.";
            }
        }

        return "No such person found";
    }

    @PostMapping("transferFunds")
    public String transferFunds(@RequestBody Transfer transfer) {
        Oseba from = osebaRepo.findById(String.valueOf(transfer.getIdFrom())).orElse(null);
        Oseba to = osebaRepo.findById(String.valueOf(transfer.getIdTo())).orElse(null);

        if(from == null || to == null)
            return "Cannot find such accounts";
        else {
            if(from.getImetje() - transfer.getAmmount() < -1000) {
                return "Account doesn't have enough funds for this transaction";
            } else {
                from.setImetje(from.getImetje() - transfer.getAmmount());
                to.setImetje(to.getImetje() + transfer.getAmmount());

                osebaRepo.save(from);
                osebaRepo.save(to);

                return "Transfer successfull.";
            }
        }
    }
}
