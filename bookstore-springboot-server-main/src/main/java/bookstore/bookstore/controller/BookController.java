package bookstore.bookstore.controller;

import bookstore.bookstore.model.Book;
import bookstore.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestBody Book book) {
        Book savedBook = bookService.save(book);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @DeleteMapping("/deletebook/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable long id) {
        bookService.delete(id);
        return new ResponseEntity<String>("Book with id : " + id + " was deleted", HttpStatus.OK);
    }
}
