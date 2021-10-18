package com.lti.pg.g8.onlineexambackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.pg.g8.onlineexambackend.model.Submission;
import com.lti.pg.g8.onlineexambackend.service.SubmissionService;

@RestController
@RequestMapping("home/exam/submission")
public class SubmissionController {
	
	@Autowired
	SubmissionService subService;
	
	@GetMapping("/allSubmission")
	public List<Submission> getAllSubmissions(){
			return this.subService.getAllSubmissions();
	}

	@GetMapping("/SubmissionById/{submissionId}")
	public Submission getSubmissionsById(@PathVariable Long submissionId){
		return subService.getSubmissionsById(submissionId);
	}
	
	@GetMapping("/SubmissionByExamId/{examId}")
	public List<Submission> getSubmissionsByExamId(@PathVariable Long examId){
		return this.subService.getSubmissionsByExamId(examId);
	//	return null;
	}

	@PostMapping("/addSubmission")
	public Submission addNewSubmission(@RequestBody Submission submission) {
		return this.subService.addNewSubmission(submission);
	}
	
	@GetMapping("/addPercentage/{submissionId}/{percentage}")
	public Submission addPercentageToSubmissionBySubmissionId(@PathVariable Long submissionId,@PathVariable Integer percentage) {
		return this.subService.addPercentageToSubmissionBySubmissionId(submissionId, percentage);
	
	}
}
