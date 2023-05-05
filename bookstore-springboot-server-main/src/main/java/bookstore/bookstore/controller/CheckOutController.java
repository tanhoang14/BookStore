package bookstore.bookstore.controller;

import bookstore.bookstore.model.Order;
import bookstore.bookstore.service.CheckOutService;
import bookstore.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/checkout")
public class CheckOutController {

    @Autowired
    private CheckOutService checkOutService;

    @Autowired OrderService orderService;

    @PostMapping("/createOrder")
    public ResponseEntity<?> createOrder(Principal principal) {
        checkOutService.checkout(principal, "");
        return new ResponseEntity<>("", HttpStatus.CREATED);
    }

    @GetMapping("/getOrders")
    public ResponseEntity<?> getOrders(Principal principal) {
        List<Order> orderList = orderService.getOrders(principal);
        return new ResponseEntity<>(orderList,HttpStatus.OK);
    }
}

