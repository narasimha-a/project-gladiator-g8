package com.lti.pg.g8.onlineexambackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lti.pg.g8.onlineexambackend.model.Submission;

public interface SubmissionRepository extends JpaRepository <Submission, Long> {

	List<Submission> findByexamId(Long examId);
	
	@Query("Select s from Submission s where s.examId = ?1 and s.userId = ?2")
	Submission findByExamIdAndUserId(Long examId, Long userId);
}
