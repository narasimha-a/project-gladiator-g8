package com.lti.pg.g8.onlineexambackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ExamLevelDto {

    private Long examLevelId;
    private int passingCriteria;

    private List<QuestionDto> questions;

}
