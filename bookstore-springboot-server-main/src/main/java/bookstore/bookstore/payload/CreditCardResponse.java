package bookstore.bookstore.payload;

import bookstore.bookstore.model.UserPayment;

import java.util.List;

public class CreditCardResponse {

    List<UserPayment> userPayments;
    UserPayment defaultPayment;

    public CreditCardResponse(List<UserPayment> userPayments, UserPayment defaultPayment) {
        this.userPayments = userPayments;
        this.defaultPayment = defaultPayment;
    }

    public List<UserPayment> getUserPayments() {
        return userPayments;
    }

    public void setUserPayments(List<UserPayment> userPayments) {
        this.userPayments = userPayments;
    }

    public UserPayment getDefaultPayment() {
        return defaultPayment;
    }

    public void setDefaultPayment(UserPayment defaultPayment) {
        this.defaultPayment = defaultPayment;
    }
}
