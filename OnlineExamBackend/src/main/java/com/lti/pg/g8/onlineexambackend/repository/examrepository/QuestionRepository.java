package com.lti.pg.g8.onlineexambackend.repository.examrepository;

import com.lti.pg.g8.onlineexambackend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
