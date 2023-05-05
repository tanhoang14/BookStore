package bookstore.bookstore.service;

import bookstore.bookstore.model.BillingAddress;
import bookstore.bookstore.model.UserBilling;
import org.springframework.stereotype.Service;

@Service
public class BillingAddressService {
    public BillingAddress setByUserBilling(UserBilling userBilling) {
        BillingAddress billingAddress = new BillingAddress();
        billingAddress.setBillingAddressName(userBilling.getUserBillingName());
        billingAddress.setBillingAddressStreet1(userBilling.getUserBillingStreet1());
        billingAddress.setBillingAddressStreet2(userBilling.getUserBillingStreet2());
        billingAddress.setBillingAddressCity(userBilling.getUserBillingCity());
        billingAddress.setBillingAddressState(userBilling.getUserBillingState());
        billingAddress.setBillingAddressCountry(userBilling.getUserBillingCountry());
        billingAddress.setBillingAddressZipcode(userBilling.getUserBillingZipcode());
        return billingAddress;
    }
}
