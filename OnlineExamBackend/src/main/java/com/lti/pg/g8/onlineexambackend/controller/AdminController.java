package com.lti.pg.g8.onlineexambackend.controller;


import java.util.List;

import com.lti.pg.g8.onlineexambackend.dto.AdminDto;



import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.model.User;
import com.lti.pg.g8.onlineexambackend.service.AdminLoginService;
import com.lti.pg.g8.onlineexambackend.service.ExamService;
import com.lti.pg.g8.onlineexambackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    UserService userService;
    @Autowired
    ExamService examService;
    @Autowired
    AdminLoginService adminLoginService;
    
    @PostMapping("/login")
    public ResponseEntity<Boolean> validateAdmin(@RequestBody AdminDto adminDto){
        boolean validAdmin = false;
        if(adminDto.getAdminName().equals("admin") && adminDto.getPassword().equals("admin@123"))
            validAdmin = true;

    	return new ResponseEntity<>(validAdmin,HttpStatus.OK);
    }
    
    @GetMapping("/exams")
    public ResponseEntity<List<Exam>> getAllExams(){
        return new ResponseEntity<>(this.examService.getAllExams(), HttpStatus.OK);
    }
    
    @GetMapping("/exams/{examId}")
    public ResponseEntity<Exam> getExamById(@PathVariable Long examId){
        return new ResponseEntity<>(this.examService.getExamById(examId), HttpStatus.OK);
    }

    @PostMapping("/exams")
    public ResponseEntity<Exam> addNewExam(@RequestBody Exam exam){
        return new ResponseEntity<>(this.examService.addOrUpdate(exam), HttpStatus.CREATED);
    }

    @DeleteMapping("/exams/{examId}")
    public ResponseEntity<Boolean> deleteExam(@PathVariable Long examId){
        return new ResponseEntity<>(this.examService.deleteExamById(examId), HttpStatus.OK);
    }



    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(this.userService.getAllUsers(), HttpStatus.OK);
    }

//    @GetMapping("/users/{examId}")
//    public ResponseEntity<List<User>> getAllUsersByExamId(@PathVariable Long examId){
//
//        return new ResponseEntity<>(this.userService.)
//    }


}

//{
//    "userName" : "Jaddu",
//    "userEmail" : "jaddu8@gmail.com",
//    "userMobile" : 8578325345,
//    "dateOfBirth" : "1986-05-19",
//    "qualification" : "BE",
//    "yearOfGraduation" : "2008",
//    "password" : "jaddu@123",
//    "address" : {
//        "city" : "trichy",
//        "state" : "tamilnadu"
//    }


