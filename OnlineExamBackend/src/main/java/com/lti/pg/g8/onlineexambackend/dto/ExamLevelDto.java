package com.lti.pg.g8.onlineexambackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ExamLevelDto {

    private Long examId;

    private Long examLevelId;

    private Long submissionId;

    private int passingCriteria;

    private Map<Long, String> selectedOptionsMap;
}
