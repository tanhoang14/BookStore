package bookstore.bookstore.service;


import bookstore.bookstore.model.*;
import bookstore.bookstore.payload.AddCartItemRequest;
import bookstore.bookstore.repository.BookToCartItemRepository;
import bookstore.bookstore.repository.CartItemRepository;
import bookstore.bookstore.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.List;


@Service
public class CartItemService {

    @Autowired
    UserService userService;
    @Autowired
    BookService bookService;
    @Autowired
    CartItemRepository cartItemRepository;
    @Autowired
    BookToCartItemRepository bookToCartItemRepository;
    @Autowired
    ShoppingCartRepository shoppingCartRepository;

    public List<CartItem> findByShoppingCart(ShoppingCart shoppingCart) {
        return cartItemRepository.findByShoppingCart(shoppingCart);
    }

    public CartItem addBookToCartItem(AddCartItemRequest request, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        Book book = bookService.findone(request.getBook().getId());

        BigDecimal cartTotal = new BigDecimal(0);
        List<CartItem> cartItems = findByShoppingCart(user.getShoppingCart());
        CartItem cartIt = null;

        for (CartItem cartItem : cartItems) {
            if (cartItem.getBook().getId().equals(book.getId())) {
                cartItem.setQty(cartItem.getQty() + request.getQty());
                cartItem.setSubTotal(new BigDecimal(book.getOurPrice()).multiply(new BigDecimal(request.getQty())));
                cartIt = cartItem;
                cartItemRepository.save(cartItem);
            }
            cartTotal = cartTotal.add(cartItem.getSubTotal());
        }

        if (cartIt == null) {
            cartIt = new CartItem();
            cartIt.setShoppingCart(user.getShoppingCart());
            cartIt.setBook(request.getBook());
            cartIt.setQty(request.getQty());
            cartIt.setSubTotal(new BigDecimal(book.getOurPrice()).multiply(new BigDecimal(request.getQty())));
            cartIt = cartItemRepository.save(cartIt);
            BookToCartItem bookToCartItem = new BookToCartItem();
            bookToCartItem.setBook(book);
            bookToCartItem.setCartItem(cartIt);
            bookToCartItemRepository.save(bookToCartItem);
            cartTotal = cartTotal.add(cartIt.getSubTotal());
        }
        user.getShoppingCart().setGrandTotal(cartTotal);
        shoppingCartRepository.save(user.getShoppingCart());

        return cartIt;
    }

    public List<CartItem> getUserShoppingCart(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<CartItem> cartItems = findByShoppingCart(user.getShoppingCart());
        return cartItems;
    }

    public CartItem findById(long id) {
        return cartItemRepository.findById(id).get();
    }

    public void removeCartItem(long id) {
        CartItem cartItem = findById(id);
        bookToCartItemRepository.deleteByCartItem(cartItem);
        cartItemRepository.delete(cartItem);
    }

    public void clearShoppingCart(ShoppingCart shoppingCart) {
        List<CartItem> cartItemList = findByShoppingCart(shoppingCart);

        for (CartItem cartItem : cartItemList) {
            cartItem.setShoppingCart(null);
            cartItemRepository.save(cartItem);
        }

        shoppingCart.setGrandTotal(new BigDecimal(0));

        shoppingCartRepository.save(shoppingCart);
    }
}
