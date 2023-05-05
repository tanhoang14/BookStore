package bookstore.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class UserPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String type;
    private String cardName;
    private String cardNumber;

    private String expireDate;

    private int cvc;
    private String holderName;
    private boolean defaultPayment;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "userPayment")
    private UserBilling userBilling;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    public UserPayment() {
    }

    public UserPayment(String type, String cardName, String cardNumber, String expireDate, int cvc, String holderName, boolean defaultPayment) {
        this.type = type;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.cvc = cvc;
        this.holderName = holderName;
        this.defaultPayment = defaultPayment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public UserBilling getUserBilling() {
        return userBilling;
    }

    public void setUserBilling(UserBilling userBilling) {
        this.userBilling = userBilling;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserPayment{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", cardName='" + cardName + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", expireDate=" + expireDate +
                ", cvc=" + cvc +
                ", holderName='" + holderName + '\'' +
                ", defaultPayment=" + defaultPayment +
                ", userBilling=" + userBilling +
                ", user=" + user +
                '}';
    }
}
