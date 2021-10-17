package com.lti.pg.g8.onlineexambackend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
	@Id
	@Column(name = "User_Id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long userId;
	
	@Column(name = "User_Name")
	String userName;
	
	@Column(name = "User_Email")
	String userEmail;
	
	@Column(name = "User_Mobile")
	String userMobile;
	
	@Column(name = "User_Dob")
	Date dateOfBirth;
	
	@Column(name = "User_Qualification")
	String qualification;
	
	@Column(name = "User_Year_Of_Graduation")
	String yearOfGraduation;
	
	@Column(name = "User_Password")
	String password;
	
	@ManyToOne()
	@JoinColumn(name = "Address_Id")
	Address address;
	
	

	@Override
	public String toString() {
		return "User [userid=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userMobile="
				+ userMobile + ", dateOfBirth=" + dateOfBirth + ", qualification=" + qualification
				+ ", yearOfGraduation=" + yearOfGraduation + ", password=" + password + "]";
	}

}
