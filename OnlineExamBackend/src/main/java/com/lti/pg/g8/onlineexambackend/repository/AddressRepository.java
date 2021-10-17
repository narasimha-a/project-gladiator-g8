package com.lti.pg.g8.onlineexambackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lti.pg.g8.onlineexambackend.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{

	@Query("Select a from Address a where a.city=?1 and a.state=?2")
	Address getAddressByCityAndState(String city, String state);
}
