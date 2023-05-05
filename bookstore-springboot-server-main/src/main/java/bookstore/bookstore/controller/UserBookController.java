package bookstore.bookstore.controller;

import bookstore.bookstore.model.Book;
import bookstore.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/userBook")
public class UserBookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/booklist")
    public ResponseEntity<?> getAllBooks() {
        List<Book> bookList = bookService.findAll();
        return new ResponseEntity<>(bookList, HttpStatus.ACCEPTED);
    }

    @GetMapping("/bookinfo/{id}")
    public ResponseEntity<?> getBookInfo(@PathVariable long id) {
        Book book = bookService.findone(id);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @GetMapping("getimage/{id}")
    public ResponseEntity<?> getBookImage(@PathVariable long id) {
        bookService.findone(id);

        String img = null;
        try {
            img = Files.readString(Path.of("src/main/resources/static/image/book/" + id));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>(img, HttpStatus.OK);
    }
}
