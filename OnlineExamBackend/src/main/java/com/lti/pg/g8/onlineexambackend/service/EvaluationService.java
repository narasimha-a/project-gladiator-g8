package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.dto.ExamLevelDto;
import com.lti.pg.g8.onlineexambackend.model.ExamLevel;
import com.lti.pg.g8.onlineexambackend.repository.examrepository.ExamLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public interface EvaluationService {

    int evaluateExamLevel(ExamLevelDto examLevelDto);

}

@Service
class EvaluationServiceImpl implements EvaluationService{

    @Autowired
    ExamLevelRepository examLevelRepository;

    @Override
    public int evaluateExamLevel(ExamLevelDto examLevelDto) {
    	System.out.println(examLevelDto);
        int validAnswerCount;

        ExamLevel examLevel = this.examLevelRepository.getById(examLevelDto.getExamLevelId());
        
        validAnswerCount = (int) examLevel.getQuestions().stream()
                .filter(question -> examLevelDto.getSelectedOptionsMap().get(question.getQuestionId()).equals(question.getAnswers()))
                .count();

        System.out.println(((float)validAnswerCount / examLevel.getQuestions().size()));

        return (int) (((float)validAnswerCount / examLevel.getQuestions().size()) * 100);
    }
}

