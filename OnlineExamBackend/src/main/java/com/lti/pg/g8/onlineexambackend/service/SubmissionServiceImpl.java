package com.lti.pg.g8.onlineexambackend.service;
import java.util.List;
import java.util.Optional;

import com.lti.pg.g8.onlineexambackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Submission;
import com.lti.pg.g8.onlineexambackend.repository.SubmissionRepository;



@Service
public class SubmissionServiceImpl implements SubmissionService {

	@Autowired
	SubmissionRepository submissionRepository;

	@Autowired
	UserRepository userRepository;


	
	@Override
	public List<Submission> getAllSubmissions() {
		return this.submissionRepository.findAll();
	}

	@Override
	public Submission getSubmissionsById(Long Id) {
		Optional<Submission> sub=this.submissionRepository.findById(Id);
		
		System.out.println("sub:");
		System.out.println(sub);
		
		if(sub.isPresent())
			return this.submissionRepository.findById(Id).get();
		
		System.out.println("************no value found**********");
		
		return null;
	}

	@Override
	public Submission addNewSubmission(Submission submission) {
		return this.submissionRepository.save(submission);
	}

	@Override
	public Submission addPercentageToSubmissionBySubmissionId(Long submissionId, Integer percentage) {
		Submission submission=this.submissionRepository.getById(submissionId);
		String percent=submission.getPercentages();
		if(percent == null){
			percent = Integer.toString(percentage);
		}
		else{
			percent += "," + percentage;
		}
		submission.setPercentages(percent);
		System.out.println(percent);
		return this.submissionRepository.save(submission);
	}

	@Override
	public Submission createNewSubmission(Long userId, Long examId) {

		return this.submissionRepository.save(new Submission(0L, examId, userId,
				this.userRepository.getById(userId).getAddress().getAddressId(), ""));
	}

	@Override
	public List<Submission> getSubmissionsByExamId(Long examId) {
		List<Submission> sub=this.submissionRepository.findByexamId(examId);
		System.out.println(sub);
		return sub;
	}

	@Override
	public Submission getSubmissionByExamAndUserId(Long examId, Long userId) {
		System.out.println(this.submissionRepository.findByExamIdAndUserId(examId, userId));
		return this.submissionRepository.findByExamIdAndUserId(examId, userId);
	}
}