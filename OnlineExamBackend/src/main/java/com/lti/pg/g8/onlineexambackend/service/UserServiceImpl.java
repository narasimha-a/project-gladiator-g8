package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	final UserRepository userRepository;
	
	
	private AddressService addressService;
	
	
	
	
	
	@PersistenceContext
	private EntityManager entityManager;
	

	public UserServiceImpl(UserRepository userRepository, AddressService addressService) {
		super();
		this.userRepository = userRepository;
		this.addressService = addressService;
	}

	@Override
	@Transactional
	public User addUser(User user,String city, String state) {
//		Address address = entityManager.find(Address.class);
		
		Address addr = addressService.getAddressByCityAndState(state, city);
		if(addr == null) {
			Address add_addr = new Address(city,state);
			addressService.addAddress(add_addr);
			user.setAddress(add_addr);
			entityManager.persist(user);
		}
		else {
			Long addrId = (Long)addr.getAddressid();
			Address add_addr = new Address(addrId, city,state);
			user.setAddress(add_addr);
			entityManager.persist(user);
		}
		System.out.println("Recorded inserted successfully");
		return user;
	}

	@Override
	public List<User> getUserList() {
		// TODO Auto-generated method stub
		return this.userRepository.findAll();
	}
	
	

}
