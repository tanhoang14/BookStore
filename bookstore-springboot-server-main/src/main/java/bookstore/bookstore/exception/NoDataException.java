package bookstore.bookstore.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NoDataException extends NullPointerException {
    public NoDataException(String message) {
        super(message);
    }
}
