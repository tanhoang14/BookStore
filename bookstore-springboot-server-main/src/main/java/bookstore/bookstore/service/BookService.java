package bookstore.bookstore.service;

import bookstore.bookstore.exception.ResourceNotFoundException;
import bookstore.bookstore.model.Book;
import bookstore.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public List<Book> findAll() {
        List<Book> bookList = (List<Book>) bookRepository.findAll();
        List<Book> activeBookList = getActiveBook(bookList);
        return activeBookList;
    }

    public Book findone(Long id) {
        Book book = bookRepository.findBookById(id);
        if (book == null)
            throw new ResourceNotFoundException("book with id " + id + " doesnt exist");
        return book;
    }

    public List<Book> findByCategory(String category) {
        List<Book> bookList = bookRepository.findByCategory(category);
        List<Book> activeBookList = getActiveBook(bookList);
        return activeBookList;
    }

    public List<Book> blurrySearch(String title) {
        List<Book> bookList = bookRepository.findByTitleContaining(title);
        List<Book> activeBookList = getActiveBook(bookList);
        return activeBookList;
    }

    private List<Book> getActiveBook(List<Book> bookList) {
        List<Book> activeBookList = new ArrayList<>();

        for (Book book : bookList) {
            if (book.isActive()) {
                activeBookList.add(book);
            }
        }
        return activeBookList;
    }

    public Book save(Book book) {

        String bookImage = book.getBookImage();
        Book book1 = bookRepository.save(book);
        BufferedWriter writer = null;
        try {
            writer = new BufferedWriter(new FileWriter("src/main/resources/static/image/book/" + book1.getId()));
            writer.write(bookImage);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return book1;
    }

    public void delete(long id) {
        Book book = findone(id);
        bookRepository.delete(book);
        File file = new File("src/main/resources/static/image/book/" + id);
        file.delete();

    }
}
