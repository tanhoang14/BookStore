package bookstore.bookstore.payload;

import bookstore.bookstore.model.UserBilling;
import bookstore.bookstore.model.UserPayment;

public class CreditCardAndBillingRequest {

    private UserBilling userBilling;

    private UserPayment userPayment;

    private String userBillingName;
    private String userBillingStreet1;
    private String userBillingStreet2;
    private String userBillingCity;
    private String userBillingState;
    private String userBillingCountry;
    private String userBillingZipcode;

    private String type;
    private String cardName;
    private String cardNumber;
    private String expireDate;
    private int cvc;
    private String holderName;
    private boolean defaultPayment;

    public CreditCardAndBillingRequest(String userBillingName, String userBillingStreet1, String userBillingStreet2, String userBillingCity, String userBillingState, String userBillingCountry, String userBillingZipcode, String type, String cardName, String cardNumber, String expireDate, int cvc, String holderName, boolean defaultPayment) {
        this.userBillingName = userBillingName;
        this.userBillingStreet1 = userBillingStreet1;
        this.userBillingStreet2 = userBillingStreet2;
        this.userBillingCity = userBillingCity;
        this.userBillingState = userBillingState;
        this.userBillingCountry = userBillingCountry;
        this.userBillingZipcode = userBillingZipcode;
        this.type = type;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.cvc = cvc;
        this.holderName = holderName;
        this.defaultPayment = defaultPayment;
        this.userBilling = new UserBilling(userBillingName, userBillingStreet1, userBillingStreet2, userBillingCity, userBillingState, userBillingCountry, userBillingZipcode);
        this.userPayment = new UserPayment(type, cardName, cardNumber, expireDate, cvc, holderName, defaultPayment);
    }

    public UserBilling getUserBilling() {
        return userBilling;
    }

    public void setUserBilling(UserBilling userBilling) {
        this.userBilling = userBilling;
    }

    public UserPayment getUserPayment() {
        return userPayment;
    }

    public void setUserPayment(UserPayment userPayment) {
        this.userPayment = userPayment;
    }

    public String getUserBillingName() {
        return userBillingName;
    }

    public void setUserBillingName(String userBillingName) {
        this.userBillingName = userBillingName;
    }

    public String getUserBillingStreet1() {
        return userBillingStreet1;
    }

    public void setUserBillingStreet1(String userBillingStreet1) {
        this.userBillingStreet1 = userBillingStreet1;
    }

    public String getUserBillingStreet2() {
        return userBillingStreet2;
    }

    public void setUserBillingStreet2(String userBillingStreet2) {
        this.userBillingStreet2 = userBillingStreet2;
    }

    public String getUserBillingCity() {
        return userBillingCity;
    }

    public void setUserBillingCity(String userBillingCity) {
        this.userBillingCity = userBillingCity;
    }

    public String getUserBillingState() {
        return userBillingState;
    }

    public void setUserBillingState(String userBillingState) {
        this.userBillingState = userBillingState;
    }

    public String getUserBillingCountry() {
        return userBillingCountry;
    }

    public void setUserBillingCountry(String userBillingCountry) {
        this.userBillingCountry = userBillingCountry;
    }

    public String getUserBillingZipcode() {
        return userBillingZipcode;
    }

    public void setUserBillingZipcode(String userBillingZipcode) {
        this.userBillingZipcode = userBillingZipcode;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

    public int getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }

    public String getHolderName() {
        return holderName;
    }

    public void setHolderName(String holderName) {
        this.holderName = holderName;
    }

    public boolean isDefaultPayment() {
        return defaultPayment;
    }

    public void setDefaultPayment(boolean defaultPayment) {
        this.defaultPayment = defaultPayment;
    }
}
