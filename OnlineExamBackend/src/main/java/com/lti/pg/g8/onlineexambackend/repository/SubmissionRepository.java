package com.lti.pg.g8.onlineexambackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.pg.g8.onlineexambackend.model.Submission;

public interface SubmissionRepository extends JpaRepository <Submission, Long> {

	List<Submission> findByexamId(Long examId);
}
