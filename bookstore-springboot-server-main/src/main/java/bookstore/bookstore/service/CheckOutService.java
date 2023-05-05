package bookstore.bookstore.service;

import bookstore.bookstore.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDate;

@Service
public class CheckOutService {

    @Autowired
    private UserService userService;

    @Autowired
    private UserShippingService userShippingService;

    @Autowired
    UserBillingService userBillingService;

    @Autowired
    private ShippingAddressService shippingAddressService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private BillingAddressService billingAddressService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CartItemService cartItemService;

    public void checkout(Principal principal, String shippingMethod) {
        User user = userService.findByUsername(principal.getName());

        ShoppingCart shoppingCart = user.getShoppingCart();

        UserShipping userShipping = userShippingService.getDefaultUserShipping(principal);
        ShippingAddress shippingAddress = shippingAddressService.setByUserShipping(userShipping);

        UserPayment userPayment = userBillingService.getDefaultCreditCard(principal);
        Payment payment = paymentService.setByUserPayment(userPayment);
        BillingAddress billingAddress = billingAddressService.setByUserBilling(userPayment.getUserBilling());

        Order order = orderService.createOrder(shoppingCart, shippingAddress, billingAddress, payment, "shippingMethod", user);

        cartItemService.clearShoppingCart(shoppingCart);

        LocalDate today = LocalDate.now();
        LocalDate estimatedDeliveryDate;

        if (shippingMethod.equals("groundShipping")) {
            estimatedDeliveryDate = today.plusDays(5);
        } else {
            estimatedDeliveryDate = today.plusDays(3);
        }
    }
}
