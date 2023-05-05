package bookstore.bookstore.service;

import bookstore.bookstore.model.User;
import bookstore.bookstore.model.UserBilling;
import bookstore.bookstore.model.UserPayment;
import bookstore.bookstore.payload.CreditCardAndBillingRequest;
import bookstore.bookstore.repository.UserPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class UserBillingService {

    @Autowired
    UserService userService;

    @Autowired
    UserPaymentRepository userPaymentRepository;

    public UserPayment findCardByID(long id) {
        return userPaymentRepository.findById(id).get();
    }

    public void AddNewCreditCardAndUserBilling(CreditCardAndBillingRequest request, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        UserPayment userPayment = request.getUserPayment();
        UserBilling userBilling = request.getUserBilling();
        userPayment.setUserBilling(userBilling);
        userPayment.setDefaultPayment(false);
        userBilling.setUserPayment(userPayment);
        user.getUserPayments().add(userPayment);
        userPayment.setUser(user);
        userService.saveUser(user);
    }

    public List<UserPayment> getCreditCards(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return user.getUserPayments();
    }

    public void deleteCard(long cardId, Principal principal) {
        long userid = userService.findByUsername(principal.getName()).getId();
        UserPayment userPayment = findCardByID(cardId);
        if (userPayment.getUser().getId() != userid) {
            return;
        }
        userPaymentRepository.delete(userPayment);
    }

    public UserPayment getCard(long cardId, Principal principal) {
        long userid = userService.findByUsername(principal.getName()).getId();
        UserPayment userPayment = findCardByID(cardId);
        if (userPayment.getUser().getId() != userid) {
            return null;
        }
        return userPayment;
    }

    public void updateCard(UserPayment userPayment, Principal principal) {
//        long userid = userService.findByUsername(principal.getName()).getId();
//        if (userPayment.getUser().getId() != userid) {
//            return;
//        }
        long defaultID = getDefaultCreditCard(principal).getId();
        User user = userService.findByUsername(principal.getName());
        userPayment.setUser(user);
        userPayment.setUserBilling(userPayment.getUserBilling());
        userPayment.getUserBilling().setUserPayment(userPayment);
        user.getUserPayments().add(userPayment);
        userService.saveUser(user);
        if (defaultID == userPayment.getId()) {
            setDefaultCard(defaultID, principal);
        }
    }

    public UserPayment getDefaultCreditCard(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        UserPayment userPayment = userPaymentRepository.findUserPaymentByDefaultPaymentIsTrueAndUser_Id(user.getId());
        return userPayment;

    }

    public void setDefaultCard(long id, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<UserPayment> userPaymentList = user.getUserPayments();

        for (UserPayment userPayment : userPaymentList) {
            if (userPayment.getId() == id) {
                userPayment.setDefaultPayment(true);
                userPaymentRepository.save(userPayment);
            } else {
                userPayment.setDefaultPayment(false);
                userPaymentRepository.save(userPayment);
            }
        }
    }
}
