package bookstore.bookstore.payload;

import bookstore.bookstore.model.UserShipping;

import java.util.List;

public class UserShippingResponse {
    List<UserShipping> userShippingList;
    UserShipping defaultUserShipping;

    public UserShippingResponse(List<UserShipping> userShippingList, UserShipping defaultUserShipping) {
        this.userShippingList = userShippingList;
        this.defaultUserShipping = defaultUserShipping;
    }

    public List<UserShipping> getUserShippingList() {
        return userShippingList;
    }

    public void setUserShippingList(List<UserShipping> userShippingList) {
        this.userShippingList = userShippingList;
    }

    public UserShipping getDefaultUserShipping() {
        return defaultUserShipping;
    }

    public void setDefaultUserShipping(UserShipping defaultUserShipping) {
        this.defaultUserShipping = defaultUserShipping;
    }
}
