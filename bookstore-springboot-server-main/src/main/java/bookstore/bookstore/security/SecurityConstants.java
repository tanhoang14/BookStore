package bookstore.bookstore.security;

public class SecurityConstants {
    public static final long EXPIRATION_TIME = 86_400_000; //1800_000
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String HEADER_STRING = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String AUTHORITIES_KEY = "scopes";
}
