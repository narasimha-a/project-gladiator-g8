package com.lti.pg.g8.onlineexambackend.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Address {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long addressId;

	@Column(nullable = false)
	String city;

	@Column(nullable = false)
	String state;

	@Override
	public String toString() {
		return "Address{" +
				"addressId=" + addressId +
				", city='" + city + '\'' +
				", state='" + state + '\'' +
				'}';
	}
}
