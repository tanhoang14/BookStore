package bookstore.bookstore.repository;

import bookstore.bookstore.model.UserPayment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {
    public UserPayment findUserPaymentByDefaultPaymentIsTrueAndUser_Id(long id);
}
