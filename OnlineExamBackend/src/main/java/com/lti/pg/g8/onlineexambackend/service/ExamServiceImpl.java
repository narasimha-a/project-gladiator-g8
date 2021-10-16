package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService{

    final
    ExamRepository examRepository;

    public ExamServiceImpl(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    @Override
    public List<Exam> getAllExams() {
        return this.examRepository.findAll();
    }
}
