package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.dto.ExamDto;
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
    public List<ExamDto> getAllExamsWithoutLevels() {

        return this.examRepository.findAll().stream()
                .map(exam -> new ExamDto(exam.getExamId(), exam.getExamName()))
                .collect(Collectors.toList());
    }

    @Override
    public Exam addOrUpdate(Exam exam) {
    	
    	

        exam.setLevels(exam.getLevels().stream().map(examLevel -> {

            examLevel.setQuestions(

                    examLevel.getQuestions().stream().map(question ->
                            this.questionRepository.save(question)).collect(Collectors.toList()));

            return this.examLevelRepository.save(examLevel);

        }).collect(Collectors.toList()));

        return this.examRepository.save(exam);
    }

    @Override
    public boolean deleteExamById(Long examId) {

        this.examRepository.deleteById(examId);

        return true;
    }

    @Override
    public Exam getExamById(Long examId) {
        if(this.examRepository.findById(examId).isPresent())
            return this.examRepository.findById(examId).get();
        return null;
    }

}
