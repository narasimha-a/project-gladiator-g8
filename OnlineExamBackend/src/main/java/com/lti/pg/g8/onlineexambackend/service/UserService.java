package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import com.lti.pg.g8.onlineexambackend.model.User;

public interface UserService {

//	List<User>getAllUsers();
	User addUser(User user);
	Boolean checkUserCred(String name, String password);
	List<User> getAllUsers() ;
	List<User> getUserListByAddressId(Long AddressId);

//	List<User> getUsersByExamId(Long examId);
//	List<User> getUsersByAddressId(Long addressId);

}
