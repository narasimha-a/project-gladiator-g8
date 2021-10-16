package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.model.Exam;
import com.lti.pg.g8.onlineexambackend.repository.examrepository.ExamLevelRepository;
import com.lti.pg.g8.onlineexambackend.repository.examrepository.ExamRepository;
import com.lti.pg.g8.onlineexambackend.repository.examrepository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamServiceImpl implements ExamService {

    @Autowired
    ExamRepository examRepository;

    @Autowired
    ExamLevelRepository examLevelRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Override
    public List<Exam> getAllExams() {
        return this.examRepository.findAll();
    }

    @Override
    public Exam addNewExam(Exam exam) {

        exam.setLevels(exam.getLevels().stream().map(examLevel -> {

            examLevel.setQuestions(

                    examLevel.getQuestions().stream().map(question ->
                            this.questionRepository.save(question)).collect(Collectors.toList()));

            return this.examLevelRepository.save(examLevel);

        }).collect(Collectors.toList()));

        return this.examRepository.save(exam);
    }


}
