package com.lti.pg.g8.onlineexambackend.repository.examrepository;

import com.lti.pg.g8.onlineexambackend.model.ExamLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamLevelRepository extends JpaRepository<ExamLevel, Long> {
}
