package com.lti.pg.g8.onlineexambackend.model;

import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "USERS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long userId;

	@Column(nullable = false)
	String userName;

	@Column(unique = true, nullable = false)
	String userEmail;

	@Column(unique = true, nullable = false)
	String userMobile;
	
	String dateOfBirth;
	
	String qualification;

	String yearOfGraduation;

	@Column(nullable = false)
	String password;

	@ManyToOne
	@JoinColumn(nullable = false)
	Address address;

	@Override
	public String toString() {
		return "User{" +
				"userId=" + userId +
				", userName='" + userName + '\'' +
				", userEmail='" + userEmail + '\'' +
				", userMobile='" + userMobile + '\'' +
				", dateOfBirth=" + dateOfBirth +
				", qualification='" + qualification + '\'' +
				", yearOfGraduation='" + yearOfGraduation + '\'' +
				", password='" + password + '\'' +
				", address=" + address +
				'}';
	}
}
