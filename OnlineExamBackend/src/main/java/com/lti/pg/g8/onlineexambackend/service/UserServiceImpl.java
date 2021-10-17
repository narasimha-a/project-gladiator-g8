package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	final UserRepository userRepository;

	private AddressService addressService;

	public UserServiceImpl(UserRepository userRepository, AddressService addressService) {
		super();
		this.userRepository = userRepository;
		this.addressService = addressService;
	}
	
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}

	@Override
	@Transactional
	public User addUser(User user, String city, String state) {

		Address addr = addressService.getAddressByCityAndState(state, city);
		if (addr == null) {
			Address add_addr = new Address(city, state);
			addressService.addAddress(add_addr);
			user.setAddress(add_addr);
			user.setPassword(hashPassword(user.getPassword()));
			this.userRepository.save(user);
		} else {
			Long addrId = (Long) addr.getAddressId();
			user.setAddress(addr);
			user.setPassword(hashPassword(user.getPassword()));
			this.userRepository.save(user);
		}
		System.out.println("Recorded inserted successfully");
		return user;
	}

	@Override
	public List<User> getUserList() {
		return this.userRepository.findAll();
	}

}
