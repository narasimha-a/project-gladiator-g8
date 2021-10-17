package com.lti.pg.g8.onlineexambackend.service;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

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
	public Address getAddressByCityAndState(String state, String city) {
		Address addr;
		try {
			addr = this.addressRepository.getAddressByCityAndState(city, state);
		}catch(NoResultException nre) {
			return null;
		}
		return addr;
	}



	@Override
	public Address addAddress(Address address) {
		this.addressRepository.save(address);
		return null;
	}

}
