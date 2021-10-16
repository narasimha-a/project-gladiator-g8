package com.lti.pg.g8.onlineexambackend.service;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Service;

import com.lti.pg.g8.onlineexambackend.model.Address;

@Service
public class AddressServiceImpl implements AddressService {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	
	
	@Override
	public Address getAddressByCityAndState(String state, String city) {
		String sql = "Select a from Address a where a.city=:a_city and a.state=:a_state";
		TypedQuery<Address> tqry = entityManager.createQuery(sql,Address.class);
		System.out.println(city + " " + state);
		tqry.setParameter("a_city",city);
		tqry.setParameter("a_state", state);
		Address addr;
		try {
			addr = tqry.getSingleResult();
		}catch(NoResultException nre) {
			return null;
		}
		return addr;
	}



	@Override
	public Address addAddress(Address address) {
		entityManager.persist(address);
		return null;
	}

}
