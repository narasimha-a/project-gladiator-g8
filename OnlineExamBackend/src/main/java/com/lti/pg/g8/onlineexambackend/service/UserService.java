package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import com.lti.pg.g8.onlineexambackend.model.User;

public interface UserService {
//	List<User>getAllUsers();
	User addUser(User user,String city, String state);
	public List<User> getUserList() ;
	public List<User> getUserListByAddressId(Long AddressId);

}
