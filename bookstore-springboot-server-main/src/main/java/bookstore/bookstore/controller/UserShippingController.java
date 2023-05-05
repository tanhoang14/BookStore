package bookstore.bookstore.controller;

import bookstore.bookstore.model.UserShipping;
import bookstore.bookstore.payload.UserShippingResponse;
import bookstore.bookstore.service.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/shipping")
public class UserShippingController {

    @Autowired
    UserShippingService userShippingService;

    @PostMapping("/addNewUserShippingAddress")
    public ResponseEntity<?> addNewUserShippingAddress(@RequestBody UserShipping userShipping, Principal principal) {
        userShippingService.addNewUserShipping(userShipping, principal);
        return new ResponseEntity<>("", HttpStatus.CREATED);
    }

    @PostMapping("/updateUserShippingAddress")
    public ResponseEntity<?> updateUserShippingAddress(@RequestBody UserShipping userShipping, Principal principal) {
        userShippingService.updateUserShipping(userShipping, principal);
        return new ResponseEntity<>("", HttpStatus.CREATED);
    }

    @GetMapping("/usershippinglist")
    public ResponseEntity<?> getUserShippingList(Principal principal) {
        List<UserShipping> userShippingList = userShippingService.getUserShipping(principal);
        UserShipping userShipping = userShippingService.getDefaultUserShipping(principal);
        UserShippingResponse response = new UserShippingResponse(userShippingList, userShipping);
        return new ResponseEntity<UserShippingResponse>(response, HttpStatus.ACCEPTED);
    }

    @GetMapping("/shippingInfo/{id}")
    public ResponseEntity<?> getShippingInfo(@PathVariable long id, Principal principal) {
        UserShipping userShipping = userShippingService.getShippingInfo(id, principal);
        return new ResponseEntity<>(userShipping, HttpStatus.OK);
    }

    @DeleteMapping("/deleteUserShipping/{id}")
    public ResponseEntity<?> deleteShippingAddress(@PathVariable long id, Principal principal) {
        userShippingService.deleteUserShipping(id, principal);
        return new ResponseEntity<>("deleted", HttpStatus.OK);
    }

    @GetMapping("/defaultUserShipping")
    public ResponseEntity<?> defaultUserShipping(Principal principal) {
        UserShipping userShipping = userShippingService.getDefaultUserShipping(principal);
        return new ResponseEntity<>(userShipping, HttpStatus.OK);
    }

    @GetMapping("/setDefaultUserShipping/{id}")
    public ResponseEntity<?> setDefaultUserShipping(@PathVariable long id, Principal principal) {
        userShippingService.setDefaultUserShipping(id, principal);
        return new ResponseEntity<>("", HttpStatus.OK);
    }
}
