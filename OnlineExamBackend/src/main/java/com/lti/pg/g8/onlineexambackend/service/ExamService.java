package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.model.Exam;

import java.util.List;

public interface ExamService {

    List<Exam> getAllExams();

    Exam addOrUpdate(Exam exam);

    boolean deleteExamById(Long examId);

    Exam getExamById(Long examId);



}
