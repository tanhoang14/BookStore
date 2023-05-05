package bookstore.bookstore.repository;

import bookstore.bookstore.model.UserShipping;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserShippingRepository extends CrudRepository<UserShipping, Long> {
    UserShipping getUserShippingByUserShippingDefaultIsTrueAndUser_Id(long id);
}
