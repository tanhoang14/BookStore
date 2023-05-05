package bookstore.bookstore.service;

import bookstore.bookstore.model.User;
import bookstore.bookstore.model.UserShipping;
import bookstore.bookstore.repository.UserShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class UserShippingService {

    @Autowired
    UserService userService;

    @Autowired
    UserShippingRepository userShippingRepository;

    public UserShipping findUserShippingById(long id) {
        return userShippingRepository.findById(id).get();
    }

    public void addNewUserShipping(UserShipping userShipping, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        user.getUserShippings().add(userShipping);
        userShipping.setUser(user);
//        userShipping.setUserShippingDefault(false);
        userService.saveUser(user);
    }

    public void updateUserShipping(UserShipping userShipping, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        long defaultID = getDefaultUserShipping(principal).getId();
        user.getUserShippings().add(userShipping);
        userShipping.setUser(user);
//        userShipping.setUserShippingDefault(false);

        userService.saveUser(user);
        if (userShipping.getId() != null) {
            if (defaultID == userShipping.getId()) {
                setDefaultUserShipping(defaultID, principal);
            }
        }
    }

    public List<UserShipping> getUserShipping(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<UserShipping> userShippingList = user.getUserShippings();
        return userShippingList;
    }

    public UserShipping getShippingInfo(long id, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        UserShipping userShipping = findUserShippingById(id);
        if (userShipping.getUser().getId() != user.getId()) {
            return null;
        }
        return userShipping;
    }

    public void deleteUserShipping(long id, Principal principal) {
        User user = userService.findByUsername((principal.getName()));
        UserShipping userShipping = findUserShippingById(id);
        if (userShipping.getUser().getId() != user.getId()) {
            return;
        }
        userShippingRepository.deleteById(id);
    }

    public UserShipping getDefaultUserShipping(Principal principal) {
        User user = userService.findByUsername((principal.getName()));
        UserShipping userShipping = userShippingRepository.getUserShippingByUserShippingDefaultIsTrueAndUser_Id(user.getId());
        return userShipping;
    }

    public void setDefaultUserShipping(long id, Principal principal) {
        List<UserShipping> userShippingList = getUserShipping(principal);

        for (UserShipping userShipping : userShippingList) {
            if (userShipping.getId() == id) {
                userShipping.setUserShippingDefault(true);
                userShippingRepository.save(userShipping);
            } else {
                userShipping.setUserShippingDefault(false);
                userShippingRepository.save(userShipping);
            }
        }
    }
}
