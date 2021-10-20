package com.lti.pg.g8.onlineexambackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Submission {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long submissionId; 

	private Long examId; 

	private Long userId; 

	private Long addressId;
//ex : 65,75
	private String percentages;

//	@ElementCollection
//    @CollectionTable(name = "submission_percentages", joinColumns = @JoinColumn(name = "id"))
//	private List<Integer> percentages;


	@Override
	public String toString() {
		return "Submission [submissionId=" + submissionId + ", examId=" + examId + ", userId=" + userId + ", addressId="
				+ addressId + ", percentages=" + percentages + "]";
	} 
	
	
}
