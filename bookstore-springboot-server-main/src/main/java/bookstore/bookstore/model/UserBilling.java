package bookstore.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class UserBilling {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String userBillingName;
    private String userBillingStreet1;
    private String userBillingStreet2;
    private String userBillingCity;
    private String userBillingState;
    private String userBillingCountry;
    private String userBillingZipcode;

    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private UserPayment userPayment;

    public UserBilling() {

    }

    public UserBilling(String userBillingName, String userBillingStreet1, String userBillingStreet2, String userBillingCity, String userBillingState, String userBillingCountry, String userBillingZipcode) {
        this.userBillingName = userBillingName;
        this.userBillingStreet1 = userBillingStreet1;
        this.userBillingStreet2 = userBillingStreet2;
        this.userBillingCity = userBillingCity;
        this.userBillingState = userBillingState;
        this.userBillingCountry = userBillingCountry;
        this.userBillingZipcode = userBillingZipcode;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public UserPayment getUserPayment() {
        return userPayment;
    }

    public void setUserPayment(UserPayment userPayment) {
        this.userPayment = userPayment;
    }

    @Override
    public String toString() {
        return "UserBilling{" +
                "id=" + id +
                ", userBillingName='" + userBillingName + '\'' +
                ", userBillingStreet1='" + userBillingStreet1 + '\'' +
                ", userBillingStreet2='" + userBillingStreet2 + '\'' +
                ", userBillingCity='" + userBillingCity + '\'' +
                ", userBillingState='" + userBillingState + '\'' +
                ", userBillingCountry='" + userBillingCountry + '\'' +
                ", userBillingZipcode='" + userBillingZipcode + '\'' +
                ", userPayment=" + userPayment +
                '}';
    }
}
