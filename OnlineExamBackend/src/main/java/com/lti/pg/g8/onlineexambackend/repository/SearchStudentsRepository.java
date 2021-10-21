package com.lti.pg.g8.onlineexambackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lti.pg.g8.onlineexambackend.dto.SearchStudentsDto;
import com.lti.pg.g8.onlineexambackend.model.SearchStudents;

@Repository
public interface SearchStudentsRepository extends JpaRepository<SearchStudents, Long> {

	@Query("select u.userName,u.userEmail,u.userMobile,a.city,a.state,e.examName,s.percentages from User u,Exam e, Submission s,Address a where e.examId=s.examId and u.userId=s.userId and s.addressId=a.addressId")
	List<String> searchStudents();
	
}
