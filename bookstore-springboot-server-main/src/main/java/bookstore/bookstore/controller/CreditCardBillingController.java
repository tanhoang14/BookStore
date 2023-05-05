package bookstore.bookstore.controller;

import bookstore.bookstore.model.UserPayment;
import bookstore.bookstore.payload.CreditCardAndBillingRequest;
import bookstore.bookstore.payload.CreditCardResponse;
import bookstore.bookstore.service.UserBillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/creditcard")
public class CreditCardBillingController {


    @Autowired
    private UserBillingService userBillingService;

    @PostMapping("/addNewCreditCard")
    public ResponseEntity<?> addNewCreditCard(@RequestBody CreditCardAndBillingRequest request, Principal principal) {
        userBillingService.AddNewCreditCardAndUserBilling(request, principal);
        return new ResponseEntity<String>("", HttpStatus.CREATED);
    }

    @GetMapping("/creditcardlist")
    public ResponseEntity<?> getCreditCards(Principal principal) {
        List<UserPayment> userPayments = userBillingService.getCreditCards(principal);
        UserPayment userPayment = userBillingService.getDefaultCreditCard(principal);
        CreditCardResponse creditCardResponse = new CreditCardResponse(userPayments, userPayment);
        return new ResponseEntity<CreditCardResponse>(creditCardResponse, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deletecard/{cardId}")
    public ResponseEntity<?> deleteCard(@PathVariable long cardId, Principal principal) {
        userBillingService.deleteCard(cardId, principal);
        return new ResponseEntity<String>("card wtih id: " + cardId + " deleted", HttpStatus.OK);
    }

    @GetMapping("/cardinfo/{cardId}")
    public ResponseEntity<?> cardDetail(@PathVariable long cardId, Principal principal) {
        UserPayment userPayment = userBillingService.getCard(cardId, principal);
        return new ResponseEntity<UserPayment>(userPayment, HttpStatus.OK);
    }

    @PostMapping("/updatecard")
    public ResponseEntity<?> updateCard(@RequestBody UserPayment userPayment, Principal principal) {
        userBillingService.updateCard(userPayment, principal);
        return new ResponseEntity<String>("updated", HttpStatus.OK);
    }

    @GetMapping("/defaultCard")
    public ResponseEntity<?> defaultCard(Principal principal) {
        UserPayment userPayment = userBillingService.getDefaultCreditCard(principal);
        return new ResponseEntity<>(userPayment, HttpStatus.ACCEPTED);
    }

    @GetMapping("/setDefaultCard/{id}")
    public ResponseEntity<?> setDefaultCard(@PathVariable long id, Principal principal) {
        userBillingService.setDefaultCard(id, principal);
        return new ResponseEntity<>("", HttpStatus.OK);
    }

}
