package com.lti.pg.g8.onlineexambackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Address")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Address {
	@Id
	@Column(name = "Address_Id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long addressId;
	public Address(String city, String state) {
		super();
		this.city = city;
		this.state = state;
	}
	@Column(name = "City")
	String city;
	@Column(name = "State")
	String state;

	@Override
	public String toString() {
		return "Address [addressid=" + addressId + ", city=" + city + ", state=" + state + "]";
	}
	
	
	
}
