package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import com.lti.pg.g8.onlineexambackend.model.Address;

public interface AddressService {
	Address addAddress(Address address);
	Address getAddressByCityAndState(String state, String city);
	Address getAddressByCity(String city);
	List<Address> getAddressByState(String state);
}
