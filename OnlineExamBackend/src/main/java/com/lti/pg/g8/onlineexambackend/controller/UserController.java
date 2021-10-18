package com.lti.pg.g8.onlineexambackend.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.lti.pg.g8.onlineexambackend.dto.ExamDto;
import com.lti.pg.g8.onlineexambackend.dto.ExamLevelDto;
import com.lti.pg.g8.onlineexambackend.dto.UserLoginDto;
import com.lti.pg.g8.onlineexambackend.service.EvaluationService;
import com.lti.pg.g8.onlineexambackend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.service.AddressService;
import com.lti.pg.g8.onlineexambackend.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	AddressService addressService;

	@Autowired
	ExamService examService;

	@Autowired
	EvaluationService evaluationService;

	@PostMapping("")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("inside controller " + user);
		return new ResponseEntity<>(this.userService.addUser(user), HttpStatus.CREATED);
		
	}

	@GetMapping("")
	public ResponseEntity<Boolean> authenticateUser(@RequestBody UserLoginDto userLoginDto){
		return  new ResponseEntity<>(this.userService.checkUserCred(userLoginDto.getUserName(), userLoginDto.getPassword()),
				HttpStatus.OK);
	}

	@GetMapping("/address/city/{city}")
	public ResponseEntity<List<User>> getUserByAddressCity(@PathVariable(value = "city") String city) {
		Address addr = addressService.getAddressByCity(city);
//		List<User> userList = userService.getUserListByAddressId(addr.getAddressId());
//		System.out.println(userList);
		return new ResponseEntity<>(this.userService.getUserListByAddressId(addr.getAddressId()), HttpStatus.OK);
	}

	@GetMapping("/address/state/{state}")
	public ResponseEntity<List<List<User>>> getUserByAddressState(@PathVariable(value = "state") String state) {

		List<List<User>> userList = addressService.getAddressByState(state).stream()
				.map(address -> userService.getUserListByAddressId(address.getAddressId()))
				.collect(Collectors.toList());

		return new ResponseEntity<>(userList, HttpStatus.OK);
	}

	@GetMapping("/exams")
	public ResponseEntity<List<ExamDto>> getAllExams(){
		return new ResponseEntity<>(this.examService.getAllExamsWithoutLevels(), HttpStatus.OK);
	}

	@PostMapping("/{userId}/submitLevel")
	public ResponseEntity<Integer> submitExamLevel(@RequestBody ExamLevelDto examLevelDto, @PathVariable Long userId){

		int levelResult = this.evaluationService.evaluateExamLevel(examLevelDto);

		//Add result to Submission table

		return new ResponseEntity<>(levelResult, HttpStatus.OK);
	}

}
