package com.lti.pg.g8.onlineexambackend.controller;

import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users/exams")
public class ExamController {

    final
    ExamService examService;

    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    @GetMapping("")
    public ResponseEntity<List<Exam>> getAllExams(){
        return new ResponseEntity<>(this.examService.getAllExams(), HttpStatus.OK);
    }

}
