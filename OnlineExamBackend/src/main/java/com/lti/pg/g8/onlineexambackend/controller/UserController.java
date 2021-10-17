package com.lti.pg.g8.onlineexambackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.service.UserLoginService;
import com.lti.pg.g8.onlineexambackend.service.UserLoginServiceImpl;
import com.lti.pg.g8.onlineexambackend.service.UserService;

@RestController
@RequestMapping("/users/")
public class UserController {
 
	final UserService userService;
	final UserLoginService userLoginService;

	public UserController(UserService userService, UserLoginService userLoginService) {
		super();
		this.userService = userService;
		this.userLoginService = userLoginService;
	}
	
	@GetMapping("/getUsers")
    public List<User> getUser(){
		System.out.println(" inside controller - calling getEmpList");		
		List<User> userList= userService.getUserList();
		return userList;
    }
	
	@PostMapping(value="/addUser/{city}/{state}")
	public void saveUser(@RequestBody User user, @PathVariable(value="city") String city, @PathVariable(value="state") String state) {	
	
		System.out.println("inside controller "+user);
		User user1 = userService.addUser(user,city,state);
		System.out.println(user1.getUserId());
	}
	
	@GetMapping("/userlogin/{username}/{password}")
	public void userLogin( @PathVariable (value= "username") String username, @PathVariable(value= "password") String password ) {
		System.out.println("Welcome to Login Page : )");
		
		if(userLoginService.checkUserCred(username, password) == true) {
			System.out.println("Successful login");
		}
		else {
			System.out.println("Invalid username or password");
		}
		
		
		
	}
	
	
}
