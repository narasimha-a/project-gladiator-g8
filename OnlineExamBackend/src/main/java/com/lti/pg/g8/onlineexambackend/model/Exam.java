package com.lti.pg.g8.onlineexambackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long examId;

    private String examName;

    @OneToMany(orphanRemoval = true)
    @JoinColumn
    private List<ExamLevel> levels;

    @Override
    public String toString() {
        return "Exam{" +
                "examId=" + examId +
                ", examName='" + examName + '\'' +
                '}';
    }
}
