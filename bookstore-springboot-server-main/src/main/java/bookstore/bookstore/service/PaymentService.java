package bookstore.bookstore.service;

import bookstore.bookstore.model.Payment;
import bookstore.bookstore.model.UserPayment;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    public Payment setByUserPayment(UserPayment userPayment) {
        Payment payment = new Payment();
        payment.setType(userPayment.getType());
        payment.setHolderName(userPayment.getHolderName());
        payment.setCardNumber(userPayment.getCardNumber());
        payment.setExpireDate(userPayment.getExpireDate());
        payment.setCvc(userPayment.getCvc());
        return payment;
    }
}
