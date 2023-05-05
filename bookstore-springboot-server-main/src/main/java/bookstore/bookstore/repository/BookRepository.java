package bookstore.bookstore.repository;

import bookstore.bookstore.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    Book findBookById(long id);

    List<Book> findByCategory(String category);

    List<Book> findByTitleContaining(String title);
}
