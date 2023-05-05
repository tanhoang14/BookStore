package bookstore.bookstore.exception;

public class ResourceNotFoundResponse {
    String message;

    public ResourceNotFoundResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
