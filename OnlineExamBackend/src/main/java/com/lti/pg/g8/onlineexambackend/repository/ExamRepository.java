package com.lti.pg.g8.onlineexambackend.repository;

import com.lti.pg.g8.onlineexambackend.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends JpaRepository<Exam, Long> {
}
