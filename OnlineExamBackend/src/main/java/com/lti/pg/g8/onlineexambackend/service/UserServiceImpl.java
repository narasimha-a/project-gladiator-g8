package com.lti.pg.g8.onlineexambackend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Submission;
import com.lti.pg.g8.onlineexambackend.dto.SearchStudentsDto;
import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.repository.SubmissionRepository;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	SubmissionRepository submissionRepository;

	@Autowired
	AddressService addressService;

	@Autowired
	SubmissionService submissionService;

	private String hashPassword(String plainTextPassword) {
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}

	@Override
	@Transactional
	public User addUser(User user) {

		Address address = this.addressService.getAddressByCityAndState(user.getAddress().getCity(),
				user.getAddress().getState());
		if (address == null) {
			Address add_addr = addressService.addAddress(user.getAddress());
			user.setAddress(add_addr);
			user.setPassword(hashPassword(user.getPassword()));
			this.userRepository.save(user);
		} else {
			// System.out.println(address);
			user.setAddress(address);
			user.setPassword(hashPassword(user.getPassword()));
			this.userRepository.save(user);
		}
		System.out.println("Recorded inserted successfully");
		return user;
	}

	@Override
	public Boolean checkUserCred(String name, String password) {
		User resUser;
		try {
			resUser = this.userRepository.findByUserEmail(name);
			System.out.println(resUser);
			if (resUser == null) {
				return false;
			} else {

				System.out.println(BCrypt.checkpw(password, resUser.getPassword()));
				return BCrypt.checkpw(password, resUser.getPassword());
			}
		} catch (NoResultException nre) {
			return false;
		}
	}

	@Override
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}

	@Override
	public User getUserById(Long userId) {
		// TODO Auto-generated method stub

		return this.userRepository.findById(userId).get();
	}

	@Override
	public List<User> getUserListByAddressId(Long addressId) {
		return this.userRepository.findAllUsersByAddressId(addressId);
	}

	@Override
	public List<User> getUsersByExamId(Long examId) {
		List<User> userList = this.submissionRepository.findByexamId(examId).stream()
				.map(submission -> this.userRepository.findById(submission.getUserId()).get())
				.collect(Collectors.toList());
		return userList;
	}

	
	
	

}
