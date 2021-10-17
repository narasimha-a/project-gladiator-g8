package com.lti.pg.g8.onlineexambackend.dto;

import java.util.Date;

import com.lti.pg.g8.onlineexambackend.model.Address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
	private Long id;
	private String userName;
	private String userEmail;
	private String userMobile;
	private Date dateOfBirth;
	private String qualification;
	private String yearOfGraduation;
	private String password;
    Address address;
}
