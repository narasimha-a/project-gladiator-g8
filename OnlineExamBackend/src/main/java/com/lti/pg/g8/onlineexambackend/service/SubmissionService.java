package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import com.lti.pg.g8.onlineexambackend.model.Submission;

public interface SubmissionService {

	public abstract List<Submission> getAllSubmissions(); 

	public abstract Submission getSubmissionsById(Long examId); 
	
	public abstract List<Submission> getSubmissionsByExamId(Long examId); 

	public abstract Submission addNewSubmission(Submission submission); 
	
	public abstract Submission addPercentageToSubmissionBySubmissionId( Long submissionId, Integer percentage); 
}
