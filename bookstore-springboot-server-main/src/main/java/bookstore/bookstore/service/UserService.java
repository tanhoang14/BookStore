package bookstore.bookstore.service;

import bookstore.bookstore.exception.UsernameAlreadyExistsException;
import bookstore.bookstore.model.*;
import bookstore.bookstore.repository.UserRepository;
import bookstore.bookstore.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserRoleRepository userRoleRepository;

	public User SaveNewUser(User newUser) {
		try {
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
			newUser.setUsername(newUser.getUsername());

			Role role = new Role();
			role.setName("Role_USER");

			Set<UserRole> userRoles = new HashSet<>();
			UserRole userRole = new UserRole();
			userRole.setUser(newUser);
			userRole.setRole(role);
			userRoles.add(userRole);

			newUser.setUserRole(userRoles);
			ShoppingCart shoppingCart = new ShoppingCart();
			shoppingCart.setUser(newUser);
			newUser.setShoppingCart(shoppingCart);
			return userRepository.save(newUser);
		} catch (Exception e) {
			throw new UsernameAlreadyExistsException(
					"Username '" + newUser.getUsername() + "' already exists " + e.getMessage());
		}

	}

	public void saveUser(User user) {
		userRepository.save(user);
	}

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
}
