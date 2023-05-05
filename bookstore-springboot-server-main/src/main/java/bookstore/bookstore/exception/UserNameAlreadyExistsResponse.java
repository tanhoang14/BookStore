package bookstore.bookstore.exception;

public class UserNameAlreadyExistsResponse {
    private String message;

    public UserNameAlreadyExistsResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
