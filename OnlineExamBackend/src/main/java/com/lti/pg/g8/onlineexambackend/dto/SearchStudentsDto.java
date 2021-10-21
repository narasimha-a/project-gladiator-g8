package com.lti.pg.g8.onlineexambackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

import javax.persistence.Column;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchStudentsDto {
	
	String userName;

	String userEmail;

	String userMobile;
	
	String city;

	String state;
	
	String examName;
	
	String percentages;
	
	
	
}
