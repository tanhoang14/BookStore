package bookstore.bookstore.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<?> handleUserNameAlreadyExists(UsernameAlreadyExistsException e) {
        return new ResponseEntity<>(new UserNameAlreadyExistsResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException e) {
        return new ResponseEntity<>(new ResourceNotFoundResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
