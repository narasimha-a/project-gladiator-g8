package com.lti.pg.g8.onlineexambackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.lti.pg.g8.onlineexambackend.model.SearchStudents;
import com.lti.pg.g8.onlineexambackend.repository.AddressRepository;
import com.lti.pg.g8.onlineexambackend.repository.SearchStudentsRepository;
import com.lti.pg.g8.onlineexambackend.repository.SubmissionRepository;
import com.lti.pg.g8.onlineexambackend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class SearchStudentsServiceImpl implements SearchStudentsService{

    @Autowired
    SubmissionRepository submissionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    SearchStudentsRepository studentRepository;

    @Override
    public List<String> SearchStudentsMethod() {
        System.out.println(this.studentRepository.searchStudents());
        return this.studentRepository.searchStudents();
    }

}