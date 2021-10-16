package com.lti.pg.g8.onlineexambackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Address")
public class Address {
	@Id
	@Column(name = "Address_Id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	long addressid;
	public Address(String city, String state) {
		super();
		this.city = city;
		this.state = state;
	}
	@Column(name = "City")
	String city;
	@Column(name = "State")
	String state;
	public Address() {
		super();
	}
	public Address(long addressid, String city, String state) {
		super();
		this.addressid = addressid;
		this.city = city;
		this.state = state;
	}
	public long getAddressid() {
		return addressid;
	}
	public void setAddressid(long addressid) {
		this.addressid = addressid;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Override
	public String toString() {
		return "Address [addressid=" + addressid + ", city=" + city + ", state=" + state + "]";
	}
	
	
	
}
