package com.lti.pg.g8.onlineexambackend.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ExamLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long examLevelId;
    private int passingCriteria;

    @OneToMany
    @JoinColumn
    private List<Question> questions;

    @Override
    public String toString() {
        return "ExamLevel{" +
                "id=" + examLevelId +
                ", passingCriteria=" + passingCriteria +
                ", questions=" + questions +
                '}';
    }
}
