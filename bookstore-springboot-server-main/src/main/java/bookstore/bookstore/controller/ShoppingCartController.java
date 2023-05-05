package bookstore.bookstore.controller;

import bookstore.bookstore.model.CartItem;
import bookstore.bookstore.payload.AddCartItemRequest;
import bookstore.bookstore.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/shoppingCart")
public class ShoppingCartController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/addItem")
    public ResponseEntity<?> addItem(@RequestBody AddCartItemRequest request, Principal principal) {
        CartItem cartItem = cartItemService.addBookToCartItem(request, principal);
        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @GetMapping("/shoppingCart")
    public ResponseEntity<?> shoppingCart(Principal principal) {
        List<CartItem> cartItems = cartItemService.getUserShoppingCart(principal);
        return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }

    @DeleteMapping("/deleteItem/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable long id, Principal principal) {
        cartItemService.removeCartItem(id);
        return new ResponseEntity<>("deletd", HttpStatus.OK);
    }

}
