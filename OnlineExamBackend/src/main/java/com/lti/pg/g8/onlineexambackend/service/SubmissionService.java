package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import com.lti.pg.g8.onlineexambackend.model.Submission;

public interface SubmissionService {

	List<Submission> getAllSubmissions();

	Submission getSubmissionsById(Long examId);
	
	List<Submission> getSubmissionsByExamId(Long examId);

	Submission addNewSubmission(Submission submission);
	
	Submission addPercentageToSubmissionBySubmissionId(Long submissionId, Integer percentage);

	Submission createNewSubmission(Long userId, Long examId);
}
