package com.lti.pg.g8.onlineexambackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lti.pg.g8.onlineexambackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("Select u from User u where u.userEmail = ?1")
	User findByUserEmail(String name);
}



