package com.lti.pg.g8.onlineexambackend.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
public class Submission {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long submissionId; 

	private Long examId; 

	private Long userId; 

	private Long addressId; 

	@ElementCollection
    @CollectionTable(name = "submission_percentages", joinColumns = @JoinColumn(name = "id"))
	private List<Integer> percentages;
	
	
	public Submission() {
		super();
	}

	public Submission(Long submissionId, Long examId, Long userId, Long addressId,
			List<Integer> percentages) {
		super();
		this.submissionId = submissionId;
		this.examId = examId;
		this.userId = userId;
		this.addressId = addressId;
		this.percentages = percentages;
	}




	public Long getSubmissionId() {
		return submissionId;
	}

	public void setSubmissionId(Long submissionId) {
		this.submissionId = submissionId;
	}

	public Long getExamId() {
		return examId;
	}

	public void setExamId(Long examId) {
		this.examId = examId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getAddressId() {
		return addressId;
	}

	public void setAddressId(Long addressId) {
		this.addressId = addressId;
	}

	public List<Integer> getPercentages() {
		return percentages;
	}

	public void setPercentages(List<Integer> percentages) {
		this.percentages = percentages;
	}

	@Override
	public String toString() {
		return "Submission [submissionId=" + submissionId + ", examId=" + examId + ", userId=" + userId + ", addressId="
				+ addressId + ", percentages=" + percentages + "]";
	} 
	
	
}
