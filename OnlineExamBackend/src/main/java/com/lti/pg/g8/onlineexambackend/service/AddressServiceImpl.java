package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import javax.persistence.NoResultException;

import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Address;
import com.lti.pg.g8.onlineexambackend.repository.AddressRepository;

@Service
public class AddressServiceImpl implements AddressService {
	
	final AddressRepository addressRepository;
	
	public AddressServiceImpl(AddressRepository addressRepository) {
		super();
		this.addressRepository = addressRepository;
	}

	@Override
	public Address getAddressByCityAndState(String city, String state) {
		Address addr;
		try {
			addr = this.addressRepository.getAddressByCityAndState(city, state);
			//System.out.println("Address for " + city + " & " + state + " is :"+addr);
		}catch(NoResultException nre) {
			return null;
		}
		return addr;
	}



	@Override
	public Address addAddress(Address address) {

		return this.addressRepository.save(address);
	}



	@Override
	public Address getAddressByCity(String city) {
		Address addr;
		try {
			addr = this.addressRepository.getAddressByCity(city);
		}catch(NoResultException nre) {
			return null;
		}
		return addr;
	}



	@Override
	public List<Address> getAddressByState(String state) {
		List<Address> addr;
		try {
			addr = this.addressRepository.getAddressByState(state);
		}catch(NoResultException nre) {
			return null;
		}
		return addr;
	}

}
