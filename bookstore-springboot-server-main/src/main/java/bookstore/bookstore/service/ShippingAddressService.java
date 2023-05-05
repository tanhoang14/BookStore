package bookstore.bookstore.service;

import bookstore.bookstore.exception.NoDataException;
import bookstore.bookstore.model.ShippingAddress;
import bookstore.bookstore.model.UserShipping;
import org.springframework.stereotype.Service;

@Service
public class ShippingAddressService {

	public ShippingAddress setByUserShipping(UserShipping userShipping) {
		try {
			ShippingAddress shippingAddress = new ShippingAddress();
			shippingAddress.setShippingAddressName(userShipping.getUserShippingName());
			shippingAddress.setShippingAddressStreet1(userShipping.getUserShippingStreet1());
			shippingAddress.setShippingAddressStreet2(userShipping.getUserShippingStreet2());
			shippingAddress.setShippingAddressCity(userShipping.getUserShippingCity());
			shippingAddress.setShippingAddressState(userShipping.getUserShippingState());
			shippingAddress.setShippingAddressCountry(userShipping.getUserShippingCountry());
			shippingAddress.setShippingAddressZipcode(userShipping.getUserShippingZipcode());
			return shippingAddress;
		} catch (Exception e) {
			throw new NoDataException("Error: No data to be processed !!! " + e.getMessage() );
		}
		
	}
}
