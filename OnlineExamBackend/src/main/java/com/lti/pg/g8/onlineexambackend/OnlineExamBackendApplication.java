package com.lti.pg.g8.onlineexambackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.lti.pg.g8.onlineexambackend.controller.UserController;
import com.lti.pg.g8.onlineexambackend.service.UserService;
import com.lti.pg.g8.onlineexambackend.service.UserServiceImpl;

@SpringBootApplication
public class OnlineExamBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineExamBackendApplication.class, args);

        System.out.println("Spring Boot Working fine......");
    }

}
