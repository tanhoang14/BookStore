package bookstore.bookstore.payload;

import bookstore.bookstore.model.Book;

public class AddCartItemRequest {
    private Book book;
    private int qty;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
