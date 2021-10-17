package com.lti.pg.g8.onlineexambackend.service;

import com.lti.pg.g8.onlineexambackend.model.Address;

public interface AddressService {
	Address addAddress(Address address);
	Address getAddressByCityAndState(String state, String city);
}
