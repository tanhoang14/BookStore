package bookstore.bookstore.repository;

import bookstore.bookstore.model.BookToCartItem;
import bookstore.bookstore.model.CartItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BookToCartItemRepository extends CrudRepository<BookToCartItem, Long> {
    void deleteByCartItem(CartItem cartItem);
}
