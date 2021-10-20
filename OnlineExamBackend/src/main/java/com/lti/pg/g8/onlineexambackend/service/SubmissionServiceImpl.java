package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Submission;
import com.lti.pg.g8.onlineexambackend.repository.SubmissionRepository;



@Service
public class SubmissionServiceImpl implements SubmissionService {

	@Autowired
	SubmissionRepository subrepository;
	
	@Override
	public List<Submission> getAllSubmissions() {
		return this.subrepository.findAll();
	}

	@Override
	public Submission getSubmissionsById(Long Id) {
		Optional<Submission> sub=this.subrepository.findById(Id);
		
		System.out.println("sub:");
		System.out.println(sub);
		
		if(sub.isPresent())
			return this.subrepository.findById(Id).get();
		
		System.out.println("************no value found**********");
		
		return null;
	}

	@Override
	public Submission addNewSubmission(Submission submission) {
		return this.subrepository.save(submission);
	}

	@Override
	public Submission addPercentageToSubmissionBySubmissionId(Long submissionId, Integer percentage) {
		Submission sub1=this.subrepository.getById(submissionId);
		List<Integer> percent=sub1.getPercentages();
		percent.add(percentage);
		sub1.setPercentages(percent);
		System.out.println(percent);
		return this.subrepository.save(sub1);
	}

	@Override
	public List<Submission> getSubmissionsByExamId(Long examId) {
		List<Submission> sub=this.subrepository.findByexamId(examId);
		System.out.println(sub);
		return sub;
		//return null;
	}

	@Override
	public Submission getSubmissionByExamAndUserId(Long examId, Long userId) {
		return this.subrepository.findByExamIdAndUserId(examId, userId);
	}
}
