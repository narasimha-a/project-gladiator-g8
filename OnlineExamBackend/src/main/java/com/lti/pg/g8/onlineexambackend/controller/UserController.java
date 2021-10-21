package com.lti.pg.g8.onlineexambackend.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import com.lti.pg.g8.onlineexambackend.dto.ExamDto;
import com.lti.pg.g8.onlineexambackend.dto.ExamLevelDto;
import com.lti.pg.g8.onlineexambackend.dto.UserLoginDto;
import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.model.Submission;
import com.lti.pg.g8.onlineexambackend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;


import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.model.User;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins= "*")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	AddressService addressService;

	@Autowired
	ExamService examService;

	@Autowired
	EvaluationService evaluationService;

	@Autowired
	SubmissionService submissionService;

	@PostMapping("")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("inside controller " + user);
		return new ResponseEntity<>(this.userService.addUser(user), HttpStatus.CREATED);
		
	}

<<<<<<< HEAD
	@GetMapping("")
=======
	@PostMapping("/login")
>>>>>>> 79ba73b80f86386c1098e19da50b81b4b7566aaf
	public ResponseEntity<User> authenticateUser(@RequestBody UserLoginDto userLoginDto){
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
	
//	@GetMapping("/exams/{examId}")
//	public ResponseEntity<List<User>> getUserByExam(@PathVariable(value = "examId") Long examId){
//		return new ResponseEntity<>(this.userService.getUsersByExamId(examId), HttpStatus.OK);
//	}

	@GetMapping("/exams/{examId}")
	public ResponseEntity<Exam> getExamByExamId(@PathVariable Long examId){
		return new ResponseEntity<>(this.examService.getExamById(examId), HttpStatus.OK);
	}

	@PostMapping("/{userId}/exams/{examId}")
	public ResponseEntity<Submission> createNewSubmission(@PathVariable Long userId, @PathVariable Long examId){
		return new ResponseEntity<>(this.submissionService.createNewSubmission(userId,examId),HttpStatus.OK);
	}


	@PostMapping("/submitLevel")
	public ResponseEntity<Submission> submitExamLevel(@RequestBody ExamLevelDto examLevelDto){

		int levelResult = this.evaluationService.evaluateExamLevel(examLevelDto);
		//Add result to Submission table
		Submission submission = this.submissionService.addPercentageToSubmissionBySubmissionId(examLevelDto.getSubmissionId(),levelResult);


		return new ResponseEntity<>(submission, HttpStatus.OK);

	}

	

}
