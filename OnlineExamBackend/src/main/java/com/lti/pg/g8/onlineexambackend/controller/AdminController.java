package com.lti.pg.g8.onlineexambackend.controller;

import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.service.ExamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/exams")
public class AdminController {

    final
    ExamService examService;

    public AdminController(ExamService examService) {
        this.examService = examService;
    }

    @GetMapping("")
    public ResponseEntity<List<Exam>> getAllExams(){
        return new ResponseEntity<>(this.examService.getAllExams(), HttpStatus.OK);
    }
    
    @GetMapping("/{examId}")
    public ResponseEntity<Exam> getExamById(@PathVariable Long examId){
        return new ResponseEntity<>(this.examService.getExamById(examId), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Exam> addNewExam(@RequestBody Exam exam){
        return new ResponseEntity<>(this.examService.addOrUpdate(exam), HttpStatus.CREATED);
    }

    @DeleteMapping("/{examId}")
    public ResponseEntity<Boolean> deleteExam(@PathVariable Long examId){
        return new ResponseEntity<>(this.examService.deleteExamById(examId), HttpStatus.OK);
    }

}
