package com.lti.pg.g8.onlineexambackend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	@Id
	@Column(name = "User_Id")
	long userid;
	
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
	
	@ManyToOne
	@JoinColumn(name = "Address_Id")
	Address address;
	
	
	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public User() {
		super();
	}
	
	public User(long userid, String userName, String userEmail, String userMobile, Date dateOfBirth,
			String qualification, String yearOfGraduation, String password) {
		super();
		this.userid = userid;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userMobile = userMobile;
		this.dateOfBirth = dateOfBirth;
		this.qualification = qualification;
		this.yearOfGraduation = yearOfGraduation;
		this.password = password;
	}
	
	
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserMobile() {
		return userMobile;
	}
	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getYearOfGraduation() {
		return yearOfGraduation;
	}
	public void setYearOfGraduation(String yearOfGraduation) {
		this.yearOfGraduation = yearOfGraduation;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
	@Override
	public String toString() {
		return "User [userid=" + userid + ", userName=" + userName + ", userEmail=" + userEmail + ", userMobile="
				+ userMobile + ", dateOfBirth=" + dateOfBirth + ", qualification=" + qualification
				+ ", yearOfGraduation=" + yearOfGraduation + ", password=" + password + "]";
	}

}
