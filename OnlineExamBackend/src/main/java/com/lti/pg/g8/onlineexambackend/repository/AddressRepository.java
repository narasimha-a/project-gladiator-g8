package com.lti.pg.g8.onlineexambackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lti.pg.g8.onlineexambackend.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{
	
	@Query("Select a from Address a")
	List<Address> getAllAddresses();
	
	@Query("Select a from Address a where a.city=?1")
	Address getAddressByCity(String city);

	@Query("Select a from Address a where a.state=?1")
	List<Address> getAddressByState(String state);

	@Query("Select a from Address a where a.addressId=?1")
	Address getAddressById(Long addressId);

	@Query("Select a from Address a where a.city=?1 and a.state=?2")
	Address getAddressByCityAndState(String city, String state);

}
